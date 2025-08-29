# GigaShop Client

Modern e-commerce client application built with Next.js 15, TypeScript, and modern development tools.

## 🚀 Features

- **Next.js 15** with App Router and Server-Side Rendering
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Shadcn/ui** for beautiful UI components
- **Tanstack Query** for data fetching and caching
- **Zustand** for state management
- **Axios** for HTTP client
- **ESLint & Prettier** for code quality
- **Husky** for git hooks
- **CI/CD** with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: Tanstack Query
- **HTTP Client**: Axios
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
client/
├── .husky/                 # Git hooks
├── .next/                  # Next.js build output
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # Reusable components
│   │   └── ui/           # Shadcn/ui components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── providers/        # React providers
│   ├── services/         # API services
│   └── stores/           # Zustand stores
├── components.json        # Shadcn/ui configuration
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 UI Components

This project uses [Shadcn/ui](https://ui.shadcn.com/) for UI components:

```bash
# Add new components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input
```

## 🔧 State Management

Using Zustand for lightweight state management:

```typescript
// Example store
export const useProductStore = create<ProductStore>()(
  devtools(
    persist(
      (set, get) => ({
        products: [],
        favorites: [],
        cart: [],
        // ... actions
      }),
      { name: 'product-storage' }
    )
  )
);
```

## 📊 Data Fetching

Using Tanstack Query for efficient data fetching:

```typescript
// Example hook
export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: productService.getProducts,
    staleTime: 5 * 60 * 1000,
  });
};
```

## 🌐 API Integration

Configured Axios instance with interceptors:

```typescript
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});
```

## 🚀 Deployment

This project is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Push to main branch to trigger deployment

## 🤝 Development Workflow

1. Create a new branch from `develop`
2. Make your changes
3. Run linting and formatting: `npm run lint && npm run format`
4. Commit changes (Husky will run pre-commit hooks)
5. Push branch and create Pull Request
6. GitHub Actions will run CI/CD pipeline

## 📝 Environment Variables

Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 🔍 Code Quality

- **ESLint**: Configured with Next.js and TypeScript rules
- **Prettier**: Consistent code formatting
- **Husky**: Pre-commit hooks for code quality
- **TypeScript**: Strict type checking

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)
- [Tanstack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs/)