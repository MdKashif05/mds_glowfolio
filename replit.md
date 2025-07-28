# Md Kashif Portfolio Website

## Overview

This is a modern, fully animated personal portfolio website built as a full-stack application using React, Express, and PostgreSQL. The portfolio showcases Md Kashif's journey as an 18-year-old CSE student, future entrepreneur, and athlete. The application features a dark tech theme with glassmorphism effects and neon color accents.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API with `/api` prefix
- **Middleware**: Custom logging, JSON parsing, and error handling
- **Development**: Hot module replacement with Vite integration

### Database Architecture
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema**: Defined in shared directory for consistency
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Portfolio Sections
1. **Hero Section**: Animated introduction with typing effect and profile image
2. **About Section**: Personal journey and background information
3. **Education Section**: Academic timeline and achievements
4. **Skills Section**: Technical competencies with progress indicators
5. **Projects Section**: Featured work with technology stacks
6. **Achievements Section**: Sports and personal accomplishments
7. **Contact Section**: Contact form and social media links

### UI Components
- **Navigation**: Fixed header with smooth scrolling and active section highlighting
- **Cards**: Glassmorphism design with hover animations
- **Forms**: Contact form with validation and toast notifications
- **Animations**: CSS-based animations for enhanced user experience

### Design System
- **Theme**: Dark tech aesthetic with gradient backgrounds
- **Colors**: Neon accents (cyan, green, purple) on dark base
- **Typography**: Modern font stack optimized for readability
- **Layout**: Responsive grid system with mobile-first approach

## Data Flow

### Client-Side Flow
1. User navigates to portfolio sections via smooth scrolling
2. Interactive components trigger state updates
3. Form submissions handled with validation and feedback
4. Query client manages API state and caching

### Server-Side Flow
1. Express server handles API requests with logging middleware
2. Routes are dynamically registered through the routing system
3. Database operations performed through Drizzle ORM
4. Error handling provides consistent API responses

### Asset Management
- Static assets served through Vite in development
- Images and documents stored in attached_assets directory
- Build process optimizes and bundles all resources

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI component primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and developer experience
- **drizzle-kit**: Database schema management
- **@replit/vite-plugin-runtime-error-modal**: Development error handling

### UI Enhancement
- **class-variance-authority**: Component variant management
- **clsx**: Conditional className utility
- **lucide-react**: Icon library
- **wouter**: Lightweight router

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: esbuild bundles Express server for Node.js runtime
3. **Asset Optimization**: Images and static files processed for production
4. **Type Checking**: TypeScript compilation validates all code

### Environment Configuration
- **Development**: Hot reload with Vite dev server proxy
- **Production**: Optimized bundles served by Express static middleware
- **Database**: Environment-based connection strings for different stages

### Deployment Targets
- **Replit**: Native support with development tools integration
- **Serverless**: Compatible with serverless deployment platforms
- **Traditional Hosting**: Express server can run on any Node.js environment

### Performance Optimizations
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image compression and lazy loading
- **Caching**: Query client implements intelligent caching strategies
- **Bundle Analysis**: Build process provides optimization insights