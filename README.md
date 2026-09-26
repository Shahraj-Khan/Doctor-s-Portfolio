# Dr. Amelia Thomas — Doctor Portfolio Website

A premium, animated Internal Medicine physician portfolio built with
Next.js 14 (App Router), React, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `components/` — one component per section (Navbar, Hero, About, WhyChooseMe,
  Expertise, Services, Pricing, Contact, CaseStudies, FAQ, Testimonials,
  Articles, Footer) plus shared `Reveal.tsx` (scroll animations) and
  `Counter.tsx` (animated stat counters)
- `lib/data.ts` — all site copy, image URLs, and content, centralized for
  easy editing

## Customizing

- **Content**: edit `lib/data.ts` — every section pulls its text and images
  from here.
- **Images**: replace the Unsplash URLs in `lib/data.ts` with your own,
  or drop files into `public/` and reference them with a leading `/`.
- **Colors**: edit the `mint`, `teal`, and `brass` palettes in
  `tailwind.config.js`.
- **Fonts**: Fraunces (display/serif) and Inter (body/UI) are loaded via
  `next/font/google` in `app/layout.tsx`.
