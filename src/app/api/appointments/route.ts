import { prisma } from "@/src/lib/prisma";
import { NextResponse } from "next/server";
import { sendEmail } from "@/src/lib/mailer"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { patientName, patientEmail, phoneNumber, date, time, specialtyId, doctorId, symptoms } = body;

    if (
      !patientName ||
      !patientEmail ||
      !phoneNumber ||
      !date ||
      !time ||
      specialtyId === undefined ||
      doctorId === undefined ||
      !symptoms
    ) {
      return NextResponse.json(
        {
          error:
            "Missing required fields: patientName, patientEmail, phoneNumber, date, time, specialtyId, doctorId, symptoms",
        },
        { status: 400 }
      );
    }

    const parsedSpecialtyId = Number(specialtyId);
    const parsedDoctorId = Number(doctorId);
    const parsedDate = new Date(date);

    if (!Number.isInteger(parsedSpecialtyId) || parsedSpecialtyId <= 0) {
      return NextResponse.json({ error: "specialtyId must be a valid positive integer" }, { status: 400 });
    }
    if (!Number.isInteger(parsedDoctorId) || parsedDoctorId <= 0) {
      return NextResponse.json({ error: "doctorId must be a valid positive integer" }, { status: 400 });
    }
    if (Number.isNaN(parsedDate.getTime())) {
      return NextResponse.json({ error: "date must be a valid date" }, { status: 400 });
    }

    const [specialtyExists, doctorExists] = await Promise.all([
      prisma.specialty.findUnique({ where: { id: parsedSpecialtyId }, select: { id: true } }),
      prisma.doctor.findUnique({ where: { id: parsedDoctorId }, select: { id: true, name: true } }),
    ]);

    if (!specialtyExists) {
      return NextResponse.json({ error: `Specialty with id ${parsedSpecialtyId} was not found` }, { status: 404 });
    }
    if (!doctorExists) {
      return NextResponse.json({ error: `Doctor with id ${parsedDoctorId} was not found` }, { status: 404 });
    }

    const appointment = await prisma.appointment.create({
      data: {
        patientName,
        patientEmail,
        phoneNumber,
        date: parsedDate,
        time,
        specialtyId: parsedSpecialtyId,
        doctorId: parsedDoctorId,
        symptoms,
      },
      include: { doctor: true } // Include doctor info for the email
    });

    // Send email but do not fail booking if mail provider has config/runtime issues.
    try {
      await sendEmail({
        to: patientEmail,
        subject: "Appointment Booking Pending",
        text: `Hello ${patientName}, your appointment with Dr. ${appointment.doctor.name} is now PENDING confirmation.`,
      });
    } catch (emailError) {
      return NextResponse.json(
        {
          ...appointment,
          warning: "Appointment created, but confirmation email failed to send",
        },
        { status: 201 }
      );
    }

    return NextResponse.json(appointment, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Booking failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function GET() {
  const appointments = await prisma.appointment.findMany({
    include: { specialty: true, doctor: true },
    orderBy: { date: 'asc' }
  });
  return NextResponse.json(appointments);
}