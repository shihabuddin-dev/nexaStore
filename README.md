# NexaStore

A modern, full-stack e-commerce demo app built with Next.js 15 (App Router), NextAuth.js (Google login), MongoDB, and Tailwind CSS.

## Features
- Public product list and product details pages
- Protected dashboard for adding products (Google login required)
- Product data stored in MongoDB Atlas
- Responsive, modern UI with Tailwind CSS
- Toast notifications for actions

## Setup & Installation

1. **Clone the repository:**
	```bash
	git clone <your-repo-url>
	cd nexastore
	```

2. **Install dependencies:**
	```bash
	npm install
	```

3. **Configure environment variables:**
	Create a `.env.local` file in the root with the following:
	```env
	MONGODB_URI=your_mongodb_atlas_uri
	DB_NAME=your_db_name
	GOOGLE_CLIENT_ID=your_google_client_id
	GOOGLE_CLIENT_SECRET=your_google_client_secret
	NEXTAUTH_URL=http://localhost:3000
	```

4. **Run the development server:**
	```bash
	npm run dev
	```
	Visit [http://localhost:3000](http://localhost:3000)

## Route Summary

| Route                        | Access         | Description                                 |
|------------------------------|---------------|---------------------------------------------|
| `/`                          | Public        | Home page                                   |
| `/products`                  | Public        | Product list page (shows all products)       |
| `/products/[id]`             | Public        | Product details page                        |
| `/login`                     | Public        | Login page (Google social login)             |
| `/dashboard/add-product`     | Protected     | Add product form (requires login)            |
| `/api/products`              | API           | GET all products, POST to add product        |
| `/api/products/count`        | API           | Get total product count                     |

## Tech Stack
- Next.js 15 (App Router)
- NextAuth.js (Google login, MongoDB adapter)
- MongoDB Atlas
- Tailwind CSS
- React Hot Toast

---

Feel free to customize and extend this project for your own needs!
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
