# Cartage - Modern React Framework

A beautiful, modern React application built with TypeScript, Next.js App Router, Tailwind CSS, Framer Motion, and Shadcn UI. This project demonstrates best practices for building performant, scalable React applications.

## ✨ Features

- 🚀 **Next.js 15** with App Router for optimal performance
- 🔥 **TypeScript** for type-safe development
- 🎨 **Tailwind CSS** for utility-first styling
- ✨ **Framer Motion** for smooth animations
- 🎯 **Shadcn UI** for beautiful, accessible components
- 📱 **Mobile-first** responsive design
- 🔍 **SEO optimized** with proper meta tags
- ⚡ **Performance optimized** with React Server Components
- 🛡️ **Production ready** with best practices built-in

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Shadcn UI
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: nuqs (for URL search parameters)
- **Font**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd cartage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx          # Homepage
├── components/            # Reusable components
│   ├── ui/               # Shadcn UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── avatar.tsx
│   └── layout/           # Layout components
│       ├── navbar.tsx
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       └── footer.tsx
└── lib/                  # Utility functions
    └── utils.ts          # CN utility and helpers
```

## 🎨 Component Organization

The project follows a structured approach to component organization:

- **`/src/components/ui`**: Core UI components from Shadcn UI
- **`/src/components/layout`**: Layout-specific components (navbar, footer, sections)
- **`/src/components/forms`**: Form-related components (future expansion)
- **`/src/app`**: Next.js App Router pages and layouts

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your project on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**: Use the `npm run build` command
- **AWS**: Use AWS Amplify or deploy to EC2
- **Docker**: Containerize with the included Next.js Docker support

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## 🎯 Key Features Implemented

### 🎨 Modern UI Design
- Responsive navbar with mobile menu
- Hero section with animated gradients and floating elements
- Feature cards with hover effects
- Professional footer with newsletter signup

### ⚡ Performance Optimizations
- React Server Components for faster loading
- Optimized images with Next.js Image component
- Minimal client-side JavaScript
- Efficient bundle splitting

### 🎭 Smooth Animations
- Framer Motion for entrance animations
- Staggered animations for better UX
- Blob animations for visual appeal
- Hover effects and micro-interactions

### 📱 Responsive Design
- Mobile-first approach
- Breakpoint-based layout adjustments
- Touch-friendly interface
- Optimized for all screen sizes

## 🔧 Customization

### Adding New Components

1. Create components in the appropriate directory:
   ```bash
   # UI components
   npx shadcn@latest add [component-name]
   
   # Custom components
   touch src/components/layout/new-component.tsx
   ```

2. Follow the naming convention: `kebab-case.tsx`

3. Use TypeScript interfaces for props

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing using Tailwind's spacing scale
- Use CSS custom properties for theme colors

### Adding Animations

- Import motion components from Framer Motion
- Use consistent animation durations (0.3s, 0.6s)
- Implement staggered animations for lists
- Add proper viewport triggering for scroll animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon library

---

**Built with ❤️ using the latest React technologies**
