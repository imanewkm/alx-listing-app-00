# ALX Listing App

## About the Project

The **ALX Listing App** is a foundational scaffold for a modern Airbnb clone. This milestone establishes a robust, scalable codebase using **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**. The project emphasizes clean architecture, reusable components, and best practices, providing a solid base for building a dynamic, responsive, and user-friendly property listing platform.

## Learning Objectives

By completing this milestone, you will:

- Scaffold a Next.js project optimized for production.
- Implement TypeScript for type safety and maintainability.
- Configure TailwindCSS for responsive, accessible UI components.
- Structure the project following industry best practices for scalability.
- Create foundational reusable components and organize assets effectively.

## Requirements

**Prerequisites:**

- Basic knowledge of Next.js, React, and TypeScript
- Familiarity with TailwindCSS and modern styling
- Understanding of ESLint for code quality
- Experience organizing scalable projects

**Technical Requirements:**

- Next.js v13+
- Node.js v16+
- Text editor (e.g., VS Code) with TypeScript and TailwindCSS extensions

## Key Highlights

### Project Setup

- Scaffolded with Next.js, TypeScript, ESLint, and TailwindCSS
- Minimal, clean TailwindCSS configuration (`tailwind.config.js`, `globals.css`)

### Folder Structure & Reusability

- Organized directories:
    - `components/` – Reusable UI components (e.g., `Card`, `Button`)
    - `interfaces/` – TypeScript interfaces (e.g., `CardProps`, `ButtonProps`)
    - `constants/` – Project constants
    - `public/assets/` – Images and SVGs

### TypeScript Integration

- Interfaces defined in `interfaces/index.ts` for type safety and consistency

### Asset Management

- All static assets are stored under `public/assets/` for easy access and maintenance

## Folder Structure

```
alx-listing-app/
├── components/
│   ├── Button.tsx
│   └── Card.tsx
├── interfaces/
│   └── index.ts
├── constants/
├── public/
│   └── assets/
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
├── .eslintrc.js
└── README.md
```

## Getting Started

1. **Clone the repository:**
     ```bash
     git clone https://github.com/your-username/alx-listing-app.git
     cd alx-listing-app
     ```

2. **Install dependencies:**
     ```bash
     npm install
     # or
     yarn install
     ```

3. **Run the development server:**
     ```bash
     npm run dev
     # or
     yarn dev
     ```

4. **Open [http://localhost:3000](http://localhost:3000) to view the app.**

## Contributing

Contributions are welcome! Please follow best practices and ensure all code passes ESLint checks.

## License

This project is licensed under the [MIT License](LICENSE).