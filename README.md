# Oasis Wash MVP - Premium Car Wash Web App

A Next.js 14 web application for a premium, human-led car wash service in Abu Dhabi, UAE. Built with TypeScript, Tailwind CSS, and designed with an Airbnb-inspired aesthetic.

## 🚀 Features

### Implemented in MVP
- ✅ Homepage with hero section and service preview
- ✅ Complete services catalog with detailed descriptions
- ✅ Customer dashboard with booking management
- ✅ Multi-step booking flow (5 steps)
- ✅ Subscription plans comparison page
- ✅ Weather-smart scheduling alerts (UI ready)
- ✅ Dynamic pricing for heatwave discounts (UI ready)
- ✅ Points and rewards system (UI ready)
- ✅ Favorite cleaners system (UI ready)
- ✅ Responsive mobile-first design
- ✅ Airbnb-inspired color palette and components

### Coming Soon (Backend Integration Required)
- 🔄 User authentication (NextAuth.js or Supabase Auth)
- 🔄 Database integration (PostgreSQL with Prisma)
- 🔄 Payment processing (Stripe)
- 🔄 Real-time checkpoint photos
- 🔄 Weather API integration (OpenWeatherMap)
- 🔄 SMS/Email notifications (Twilio/SendGrid)

## 🎨 Design System

**Color Palette:**
- Primary (Coral): #FF5A5F
- Secondary (Teal): #008489
- Neutral: #484848
- Background: #F7F7F7

**Typography:**
- System fonts with Circular fallback
- Responsive sizing with Tailwind

**Components:**
- Rounded corners (12px cards, 8px buttons)
- Soft shadows with hover effects
- Card-based layout throughout

## 📦 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons (Feather)
- **Deployment:** Vercel (recommended)

## 🛠️ Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone or download the project**
```bash
cd oasis-wash-mvp
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
Navigate to `http://localhost:3000`

## 📁 Project Structure

```
oasis-wash-mvp/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout with nav/footer
│   ├── globals.css              # Global styles + Tailwind
│   ├── services/
│   │   └── page.tsx             # Services catalog
│   ├── booking/
│   │   └── page.tsx             # Multi-step booking flow
│   ├── dashboard/
│   │   └── page.tsx             # Customer dashboard
│   └── subscription/
│       └── page.tsx             # Subscription plans
├── components/
│   ├── Navigation.tsx           # Top navigation bar
│   └── Footer.tsx               # Footer component
├── lib/                         # Utilities (to be added)
├── public/                      # Static assets
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript config
└── package.json
```

## 🚢 Deployment to Vercel

### Option 1: Vercel CLI (Your Current Workflow)

1. **Install Vercel CLI** (if not already installed)
```bash
npm i -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy to preview**
```bash
vercel
```

4. **Deploy to production**
```bash
vercel --prod
```

5. **Custom Domain (GoDaddy)**
- Go to Vercel dashboard → Your project → Settings → Domains
- Add your GoDaddy domain
- Follow Vercel's instructions to update DNS records in GoDaddy

### Option 2: GitHub Integration (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - Oasis Wash MVP"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. **Connect to Vercel**
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Vercel auto-detects Next.js and deploys

3. **Automatic Deployments**
- Every push to `main` → Production deployment
- Every PR → Preview deployment
- Zero configuration needed

## 🔐 Environment Variables (For Future Backend)

Create a `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Stripe
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Weather API
OPENWEATHER_API_KEY="your-api-key"

# Notifications
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
SENDGRID_API_KEY="..."

# Supabase (if using)
NEXT_PUBLIC_SUPABASE_URL="..."
NEXT_PUBLIC_SUPABASE_ANON_KEY="..."
```

## 🗃️ Database Schema (For Implementation)

When ready to add backend, use this Prisma schema:

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model User {
  id            String    @id @default(uuid())
  email         String    @unique
  phone         String    @unique
  passwordHash  String
  firstName     String
  lastName      String
  profilePhoto  String?
  language      String    @default("en")
  pointsBalance Int       @default(0)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  vehicles      Vehicle[]
  bookings      Booking[]
  subscription  Subscription?
}

model Vehicle {
  id           String   @id @default(uuid())
  userId       String
  user         User     @relation(fields: [userId], references: [id])
  make         String
  model        String
  year         Int
  color        String
  licensePlate String
  photoUrl     String?
  isDefault    Boolean  @default(false)
  createdAt    DateTime @default(now())
}

model Service {
  id          String   @id @default(uuid())
  name        String
  description String
  duration    Int
  price       Decimal
  category    String
  isActive    Boolean  @default(true)
  imageUrl    String?
  points      Int
}

model Booking {
  id                String   @id @default(uuid())
  userId            String
  user              User     @relation(fields: [userId], references: [id])
  serviceId         String
  vehicleId         String
  cleanerId         String?
  bookingDate       DateTime
  startTime         String
  status            String
  location          String
  locationLat       Decimal?
  locationLng       Decimal?
  totalPrice        Decimal
  discountApplied   Decimal  @default(0)
  pointsUsed        Int      @default(0)
  weatherRescheduled Boolean @default(false)
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}

model Subscription {
  id                String   @id @default(uuid())
  userId            String   @unique
  user              User     @relation(fields: [userId], references: [id])
  planType          String
  status            String
  monthlyWashLimit  Int
  washesUsedMonth   Int      @default(0)
  unlimitedRinses   Boolean
  startDate         DateTime
  nextBillingDate   DateTime
  isAnnual          Boolean  @default(false)
  createdAt         DateTime @default(now())
  updatedAt         DateTime @updatedAt
}
```

## 📝 Next Steps for Full Implementation

### Phase 1: Backend Setup (Week 1-2)
1. Set up Supabase project or PostgreSQL database
2. Initialize Prisma and run migrations
3. Implement NextAuth.js authentication
4. Create API routes for services, bookings, users

### Phase 2: Payments & Core Features (Week 3-4)
5. Integrate Stripe payment processing
6. Implement subscription billing
7. Build points ledger system
8. Add email/SMS notifications

### Phase 3: Premium Features (Week 5-6)
9. Integrate OpenWeatherMap API
10. Build weather alert system
11. Implement dynamic pricing logic
12. Create cleaner management system

### Phase 4: Polish & Testing (Week 7-8)
13. Add checkpoint photo upload (AWS S3)
14. Implement real-time updates
15. Performance optimization
16. Security audit & testing

## 🎯 Current MVP Status

**What's Built:**
- ✅ Complete UI/UX for all major pages
- ✅ Responsive design (mobile → desktop)
- ✅ Airbnb-inspired aesthetic
- ✅ Multi-step booking flow
- ✅ Dashboard with mock data
- ✅ Service catalog
- ✅ Subscription comparison

**What's Needed:**
- 🔄 Backend API routes
- 🔄 Database connection
- 🔄 Authentication system
- 🔄 Payment processing
- 🔄 External API integrations

## 🤝 Contributing

This is a startup MVP. For questions or contributions:
1. Review the PRD document
2. Check the project roadmap
3. Follow the established design system

## 📄 License

Proprietary - Oasis Wash © 2026

## 📞 Support

For technical questions about this codebase:
- Review the PRD: `Product_Requirements_Document.md`
- Check component documentation in each file
- Reference Tailwind config for design tokens

---

Built with ❤️ for Abu Dhabi's premium car care market
