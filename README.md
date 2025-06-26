# Overflow (work in progress)

**Overflow** is a modern Stack Overflow clone built for developers seeking streamlined Q&A interactions. This platform provides a no-nonsense environment where developers can ask programming questions and receive direct, solution-focused answers from a global community. Built with Next.js 15 and featuring OAuth authentication, responsive design, and dark/light mode support, Overflow demonstrates modern full-stack development practices with an emphasis on user experience and performance.

## Key Features

- **OAuth Authentication** - Secure sign-in/sign-up with GitHub and Google providers
- **Responsive Design** - Mobile-first approach with collapsible navigation and adaptive layouts
- **Dark/Light Mode** - System-aware theme switching with persistent user preferences
- **Modern Form Handling** - Client-side validation using React Hook Form and Zod schemas
- **Component Architecture** - Modular UI built with Radix UI primitives and shadcn/ui
- **Type Safety** - End-to-end TypeScript implementation with strict validation
- **Performance Optimized** - Next.js 15 with Turbopack for fast development and builds

## Technologies Used

**Frontend:**

- Next.js 15 (React 19, App Router)
- TypeScript
- Tailwind CSS + CSS Variables
- Radix UI primitives (Dialog, Dropdown, Slot, Label)
- Lucide React icons
- next-themes for theme management

**Authentication & Forms:**

- NextAuth.js v5 (GitHub & Google OAuth)
- React Hook Form with Zod validation
- Custom AuthForm components

**Development Tools:**

- ESLint (Next.js config)
- Turbopack for fast development
- shadcn/ui component library
- Class Variance Authority for component variants

## Architecture & Implementation

The application follows Next.js 15 App Router conventions with a clean separation of concerns. Key architectural decisions include:

- **Route Groups**: Organized with `(auth)` and `(root)` route groups for logical separation
- **Server Components**: Leveraging React Server Components for optimal performance
- **Component Composition**: Reusable UI components following the compound component pattern
- **Form Architecture**: Centralized form validation with schema-driven type safety
- **Theme System**: CSS variable-based theming with system preference detection

Authentication is handled through NextAuth.js with OAuth providers, eliminating the need for password management while maintaining security best practices.

## My Role & Contributions

As the sole developer, I implemented the entire application, including:

- Designed the component architecture and file structure following Next.js best practices
- Implemented OAuth authentication flow with GitHub and Google providers
- Built responsive navigation system with mobile-optimized drawer component
- Created reusable form components with comprehensive validation
- Established theme system with seamless dark/light mode transitions
- Set up development tooling and build optimization with Turbopack

## Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd overflow

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Use Case

**Target Users:**

- **Individual Developers** seeking a clean, modern alternative to traditional Q&A platforms
- **Development Teams** looking for internal knowledge sharing solutions
- **Technical Recruiters** evaluating full-stack development capabilities
- **Students & Bootcamp Graduates** needing a portfolio piece demonstrating modern React/Next.js skills

**Ideal For:**

- Showcasing proficiency in modern React ecosystem (Next.js 15, Server Components)
- Demonstrating authentication implementation and security best practices
- Highlighting responsive design and accessibility considerations
- Illustrating component-driven development with TypeScript

---

_This project demonstrates expertise in modern full-stack development, emphasizing clean architecture, type safety, and user experience. The codebase showcases industry-standard practices suitable for enterprise-level applications._
