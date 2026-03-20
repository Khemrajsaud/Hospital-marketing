# Hospital Management System - API Testing Script
# Run these commands to test all authentication endpoints on port 3000

$BaseUrl = "http://localhost:3000/api"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "HOSPITAL MANAGEMENT SYSTEM API TESTS"
Write-Host "========================================`n" -ForegroundColor Cyan

# ============================================
# TEST 1: LOGIN API
# ============================================
Write-Host "1. TESTING LOGIN ENDPOINT" -ForegroundColor Yellow
Write-Host "Endpoint: POST /api/auth/login`n"

$loginBody = @{
    email = "admin@hospital.com"
    password = "Admin12345"
} | ConvertTo-Json

Write-Host "Request Body:" -ForegroundColor Green
Write-Host $loginBody
Write-Host ""

try {
    $loginResponse = Invoke-RestMethod -Method Post `
        -Uri "$BaseUrl/auth/login" `
        -ContentType "application/json" `
        -Body $loginBody `
        -TimeoutSec 10

    Write-Host "✓ SUCCESS (Status 200)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Green
    $loginResponse | ConvertTo-Json | Write-Host
    
    # Save token for other tests
    $Global:Token = $loginResponse.token
    Write-Host "Token saved for other tests`n" -ForegroundColor Cyan
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $errorMsg = $_.Exception.Response.Content | ConvertFrom-Json
    Write-Host "✗ FAILED (Status $statusCode)" -ForegroundColor Red
    Write-Host "Error: $($errorMsg.error)`n" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# ============================================
# TEST 2: FORGOT PASSWORD API
# ============================================
Write-Host "2. TESTING FORGOT PASSWORD ENDPOINT" -ForegroundColor Yellow
Write-Host "Endpoint: POST /api/auth/forgot-password`n"

$forgotBody = @{
    email = "admin@hospital.com"
} | ConvertTo-Json

Write-Host "Request Body:" -ForegroundColor Green
Write-Host $forgotBody
Write-Host ""

try {
    $forgotResponse = Invoke-RestMethod -Method Post `
        -Uri "$BaseUrl/auth/forgot-password" `
        -ContentType "application/json" `
        -Body $forgotBody `
        -TimeoutSec 10

    Write-Host "✓ SUCCESS (Status 200)" -ForegroundColor Green
    Write-Host "Response:" -ForegroundColor Green
    $forgotResponse | ConvertTo-Json | Write-Host
    Write-Host ""
} catch {
    $statusCode = $_.Exception.Response.StatusCode.value__
    $errorMsg = $_.Exception.Response.Content | ConvertFrom-Json
    Write-Host "✗ FAILED (Status $statusCode)" -ForegroundColor Red
    Write-Host "Error: $($errorMsg.error)`n" -ForegroundColor Red
}

Start-Sleep -Seconds 1

# ============================================
# TEST 3: REGISTER API (requires SUPERADMIN token)
# ============================================
Write-Host "3. TESTING REGISTER ENDPOINT (Protected)" -ForegroundColor Yellow
Write-Host "Endpoint: POST /api/auth/register`n"
Write-Host "Note: This requires a valid SUPERADMIN JWT token`n"

if ($Global:Token) {
    $registerBody = @{
        name = "New Admin User"
        email = "newadmin@hospital.com"
        password = "NewAdmin12345"
        role = "ADMIN"
    } | ConvertTo-Json

    Write-Host "Request Body:" -ForegroundColor Green
    Write-Host $registerBody
    Write-Host ""

    $headers = @{
        Authorization = "Bearer $($Global:Token)"
    }

    try {
        $registerResponse = Invoke-RestMethod -Method Post `
            -Uri "$BaseUrl/auth/register" `
            -ContentType "application/json" `
            -Headers $headers `
            -Body $registerBody `
            -TimeoutSec 10

        Write-Host "✓ SUCCESS (Status 201)" -ForegroundColor Green
        Write-Host "Response:" -ForegroundColor Green
        $registerResponse | ConvertTo-Json | Write-Host
        Write-Host ""
    } catch {
        $statusCode = $_.Exception.Response.StatusCode.value__
        $errorMsg = $_.Exception.Response.Content | ConvertFrom-Json
        Write-Host "✗ FAILED (Status $statusCode)" -ForegroundColor Red
        Write-Host "Error: $($errorMsg.error)`n" -ForegroundColor Red
    }
} else {
    Write-Host "⚠ SKIPPED - No token available. Login first." -ForegroundColor Yellow
    Write-Host ""
}

Start-Sleep -Seconds 1

# ============================================
# TEST 4: RESET PASSWORD API
# ============================================
Write-Host "4. TESTING RESET PASSWORD ENDPOINT" -ForegroundColor Yellow
Write-Host "Endpoint: POST /api/auth/reset-password`n"
Write-Host "Note: You need a valid reset token from the forgot-password email`n"

$resetBody = @{
    token = "PASTE_RESET_TOKEN_FROM_EMAIL_HERE"
    newPassword = "NewPassword12345"
} | ConvertTo-Json

Write-Host "Request Body (example with placeholder token):" -ForegroundColor Green
Write-Host $resetBody
Write-Host ""
Write-Host "⚠ To test this:" -ForegroundColor Yellow
Write-Host "1. Check your email for reset link" -ForegroundColor Yellow
Write-Host "2. Extract the token from the URL" -ForegroundColor Yellow
Write-Host "3. Replace 'PASTE_RESET_TOKEN_FROM_EMAIL_HERE' in the script" -ForegroundColor Yellow
Write-Host "4. Run this test again`n" -ForegroundColor Yellow

# ============================================
# SUMMARY
# ============================================
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "API TESTING COMPLETE"
Write-Host "========================================`n" -ForegroundColor Cyan

Write-Host "Database Status:" -ForegroundColor Yellow
Write-Host "- Database URL: Check your .env file" -ForegroundColor Gray
Write-Host "- Prisma Schema: src/prisma/schema.prisma" -ForegroundColor Gray
Write-Host ""

Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. If login fails - make sure you have a user in the database" -ForegroundColor Gray
Write-Host "2. If register fails - ensure you're using a SUPERADMIN token" -ForegroundColor Gray
Write-Host "3. For password reset - check email config in .env" -ForegroundColor Gray
