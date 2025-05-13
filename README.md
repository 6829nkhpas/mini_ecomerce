# Mini E-Commerce Platform

A simple e-commerce platform built with Next.js, Express, and PostgreSQL.

## Features

- Product submission form
- Product listing with search functionality
- Modern UI with Tailwind CSS
- PostgreSQL database with Prisma ORM

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL
- npm or yarn

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd mini-ecommerce
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:

```
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/mini_ecommerce"
PORT=3001
```

4. Set up the database:

```bash
# Create a PostgreSQL database named 'mini_ecommerce'
npx prisma migrate dev
```

5. Start the development servers:

```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
node server.js
```

The application will be available at:

- Frontend: http://localhost:3000
- Backend: http://localhost:3001

## Project Structure

```
/project-root
  ├── backend/
  │   └── server.js
  ├── frontend/
  │   ├── pages/
  │   │   ├── product-submission.tsx
  │   │   └── my-products.tsx
  │   └── components/
  │       └── Layout.tsx
  ├── prisma/
  │   └── schema.prisma
  └── package.json
```

## Technologies Used

- Frontend:

  - Next.js
  - React
  - Tailwind CSS
  - TypeScript

- Backend:
  - Node.js
  - Express
  - Prisma ORM
  - PostgreSQL

## License

MIT
