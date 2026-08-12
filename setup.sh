#!/bin/bash

# HomeMate Project Setup Script

echo "🏠 HomeMate - Homemaker Helper Setup"
echo "========================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js is not installed. Please install Node.js first.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Node.js found: $(node --version)${NC}"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo -e "${RED}❌ npm is not installed.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ npm found: $(npm --version)${NC}"

# Setup Backend
echo -e "${YELLOW}📦 Setting up Backend...${NC}"
cd backend || exit 1
npm install
if [ -f .env ]; then
    echo -e "${YELLOW}⚠️  .env already exists. Skipping...${NC}"
else
    cp .env.example .env
    echo -e "${GREEN}✅ .env created from .env.example${NC}"
fi
cd ..

# Setup Frontend
echo -e "${YELLOW}📦 Setting up Frontend...${NC}"
cd frontend || exit 1
npm install
cd ..

echo -e "${GREEN}✅ Setup Complete!${NC}"
echo ""
echo -e "${YELLOW}🚀 Next Steps:${NC}"
echo "1. Start MongoDB: mongod"
echo "2. Start Backend: cd backend && npm run dev"
echo "3. Start Frontend: cd frontend && npm run dev"
echo "4. Open http://localhost:5173"
echo ""
echo -e "${GREEN}Happy Coding! 🎉${NC}"
