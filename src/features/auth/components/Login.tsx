import Image from "next/image";
import LoginForm from "./LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 relative overflow-hidden min-h-[600px]">
          <Image
            src="/login1.png"
            alt="Hospital Login Background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="text-center mt-8 relative h-full flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Welcome to Our
              <br />
              Hospital
            </h1>
            <p className="text-base md:text-lg max-w-md leading-relaxed">
              Access your health records, book appointments, and connect with
              your care team — securely and conveniently.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8 md:p-10 lg:p-12 flex flex-col justify-center bg-white">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0B4F6C] mb-8">
            Log In
          </h2>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}