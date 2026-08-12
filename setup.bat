@echo off
REM HomeMate Project Setup Script for Windows

echo.
echo 🏠 HomeMate - Homemaker Helper Setup
echo ======================================

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed. Please install Node.js first.
    exit /b 1
)

for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo ✅ Node.js found: %NODE_VERSION%

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed.
    exit /b 1
)

for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo ✅ npm found: %NPM_VERSION%

REM Setup Backend
echo.
echo 📦 Setting up Backend...
cd backend
call npm install
if exist .env (
    echo ⚠️  .env already exists. Skipping...
) else (
    copy .env.example .env
    echo ✅ .env created from .env.example
)
cd ..

REM Setup Frontend
echo.
echo 📦 Setting up Frontend...
cd frontend
call npm install
cd ..

echo.
echo ✅ Setup Complete!
echo.
echo 🚀 Next Steps:
echo 1. Start MongoDB: mongod
echo 2. Start Backend: cd backend ^&^& npm run dev
echo 3. Start Frontend (new terminal): cd frontend ^&^& npm run dev
echo 4. Open http://localhost:5173
echo.
echo 🎉 Happy Coding!
echo.
pause
