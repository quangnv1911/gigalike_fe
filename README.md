# GigaShop E-commerce Platform

A modern full-stack e-commerce platform with separate client and admin applications.

## 🏗️ Project Structure

This monorepo contains two main applications:

### 📱 Client Application (`/client`)
Modern e-commerce storefront built with Next.js 15
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **State Management**: Zustand
- **Data Fetching**: Tanstack Query
- **HTTP Client**: Axios

### 🔧 Admin Dashboard (`/admin`)
Comprehensive admin panel built with Angular
- **Framework**: Angular 20 (Zoneless)
- **Language**: TypeScript  
- **Styling**: Tailwind CSS + SCSS
- **UI Components**: PrimeNG
- **HTTP Client**: Axios
- **SSR**: Enabled

## 🚀 Quick Start

### Client Application
```bash
cd client
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### Admin Dashboard
```bash
cd admin
npm install  
npm start
```
Open [http://localhost:4200](http://localhost:4200)

## 🔧 Development Tools

Both projects include:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for git hooks
- **Lint-staged** for pre-commit checks
- **GitHub Actions** for CI/CD

## 📦 Features

### Client Features
- 🏪 Product catalog with SSR
- 🛒 Shopping cart functionality
- ❤️ Wishlist/favorites
- 🔍 Product search and filtering
- 📱 Responsive design
- ⚡ Fast page loads with caching

### Admin Features
- 📊 Dashboard with analytics
- 📦 Product management (CRUD)
- 👥 User management
- 📋 Order management
- 📈 Sales reports
- 🎨 Modern UI with PrimeNG

## 🚀 Deployment

### Client (Vercel)
The client application is optimized for Vercel deployment:
```bash
cd client
vercel --prod
```

### Admin (Firebase)
The admin dashboard is configured for Firebase Hosting:
```bash
cd admin
npm run build
firebase deploy
```

## 🔧 CI/CD Pipeline

GitHub Actions workflows are set up for both applications:
- **Linting & Formatting** checks
- **Automated testing**
- **Build verification**
- **Deployment** to production

## 📚 Documentation

- [Client Documentation](./client/README.md)
- [Admin Documentation](./admin/README.md)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and tests
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.