<h1 align="center">MZ WebApp (Public Lite Version)</h1>

<p align="center">
  <a href="https://nextjs.org/" target="_blank"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/" target="_blank"><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://vercel.com/" target="_blank"><img src="https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" /></a>
</p>

---

![CI](https://github.com/mehdi-zayani/mz-webapp/actions/workflows/ci.yml/badge.svg)

## Overview

**MZ WebApp (Lite)** is the public and simplified version of the original private platform developed by [Mehdi Zayani](https://mehdizayani.com).  
This open version demonstrates a clean, production-ready base built with **Next.js**, **TypeScript**, and **TailwindCSS**.

It includes:
- Multilingual support with `next-intl`
- Authentication system (login/register/profile)
- MongoDB integration
- Theme toggle (light/dark mode)
- Reusable UI components (Cards, Badges, etc.)

The goal of this version is to serve as a **starter template** or **light demo** of a real-world modern web application architecture — ready for further customization or commercial extension.

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Framework | **Next.js 16 (App Router)** |
| Language | **TypeScript 5** |
| Styling | **TailwindCSS 3.4** |
| Database | **MongoDB via Mongoose** |
| Auth | **JWT + Secure Cookies** |
| i18n | **next-intl** |
| Icons | **lucide-react** |
| Deployment | **Vercel** |

---

## Project Scripts

```bash
# Run the development server
npm run dev

# Build the production bundle
npm run build

# Start production server
npm run start

# Run ESLint checks
npm run lint

# Test MongoDB connection
npm run test:db
```

## Environment Variables

Create a .env.local file in the project root:

```yaml
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NEXT_PUBLIC_SITE_URL=https://mz-webapp.vercel.app
```
## Deployment

This version is deployed and maintained on Vercel.

Public Demo (Lite): https://mz-webapp.vercel.app

## License

This project is released under the MIT License.
You are free to use, modify, and distribute this version with attribution.



## Author Links

- [Website](https://mehdizayani.com)
- [LinkedIn](https://linkedin.com/in/mehdi-zayani-pro)
- [GitHub](https://github.com/mehdizayani)
