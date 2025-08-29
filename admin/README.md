# GigaAdmin Dashboard

Modern admin dashboard built with Angular, TypeScript, Tailwind CSS, and PrimeNG.

## 🚀 Features

- **Angular 20** with SSR (Server-Side Rendering)
- **TypeScript** for type safety
- **Tailwind CSS** for utility-first styling
- **PrimeNG** for rich UI components
- **Axios** for HTTP client
- **Zoneless** Angular application
- **ESLint & Prettier** for code quality
- **Husky** for git hooks
- **CI/CD** with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: Tailwind CSS + SCSS
- **UI Components**: PrimeNG
- **HTTP Client**: Axios
- **Icons**: PrimeIcons
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky
- **Deployment**: Firebase Hosting

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd admin
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp src/environments/environment.example.ts src/environments/environment.ts
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:4200](http://localhost:4200) in your browser.

## 🏗️ Project Structure

```
admin/
├── .husky/                 # Git hooks
├── dist/                   # Build output
├── src/
│   ├── app/               # Angular components and modules
│   ├── services/          # Angular services
│   ├── environments/      # Environment configurations
│   ├── assets/           # Static assets
│   ├── styles.scss       # Global styles
│   ├── main.ts           # Application bootstrap
│   └── index.html        # HTML template
├── angular.json          # Angular CLI configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 UI Components

This project uses [PrimeNG](https://primeng.org/) for UI components:

```typescript
// Import components in your module
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';

@Component({
  imports: [ButtonModule, TableModule, CardModule],
  // ...
})
```

## 🌐 API Integration

Configured Axios service for API calls:

```typescript
@Injectable({
  providedIn: 'root'
})
export class AdminApiService {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: process.env['NG_APP_API_URL'],
      timeout: 10000,
    });
  }
}
```

## 📊 Dashboard Features

- **Dashboard Overview**: Key metrics and statistics
- **Product Management**: CRUD operations for products
- **User Management**: Manage user accounts and roles  
- **Order Management**: Track and manage orders
- **Analytics**: Charts and reports

## 🎯 Admin Functionalities

### Product Management
- View all products in a data table
- Add new products with form validation
- Edit existing product details
- Delete products with confirmation
- Filter and search products

### User Management
- View user list with pagination
- User role management
- Account status control
- User activity tracking

### Order Management
- View orders with different statuses
- Update order status
- Order details view
- Export order data

## 🚀 Deployment

This project is configured for deployment on Firebase Hosting:

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login to Firebase: `firebase login`
3. Initialize project: `firebase init`
4. Build project: `npm run build`
5. Deploy: `firebase deploy`

## 🤝 Development Workflow

1. Create a new branch from `develop`
2. Make your changes
3. Run linting and formatting: `npm run lint && npm run format`
4. Commit changes (Husky will run pre-commit hooks)
5. Push branch and create Pull Request
6. GitHub Actions will run CI/CD pipeline

## 📝 Environment Variables

Create environment files in `src/environments/`:

```typescript
// environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  firebaseConfig: {
    // Firebase configuration
  }
};
```

## 🔧 Tailwind CSS Configuration

Custom Tailwind configuration with PrimeNG compatibility:

```javascript
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#0ea5e9',
          600: '#0284c7',
          // ...
        }
      }
    },
  },
  plugins: [],
}
```

## 🔍 Code Quality

- **ESLint**: Angular and TypeScript rules
- **Prettier**: Consistent code formatting  
- **Husky**: Pre-commit hooks
- **TypeScript**: Strict type checking
- **Angular**: Zoneless architecture

## 🧪 Testing

```bash
# Run unit tests
npm test

# Run tests with coverage
npm run test:coverage

# Run e2e tests
npm run e2e
```

## 📚 Learn More

- [Angular Documentation](https://angular.dev/)
- [PrimeNG Documentation](https://primeng.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 🔐 Authentication

The admin dashboard includes JWT-based authentication:

```typescript
// Login example
async login(credentials: LoginCredentials) {
  const response = await this.api.post('/auth/login', credentials);
  localStorage.setItem('adminToken', response.data.token);
  return response.data.user;
}
```

## 🎨 Theming

Supports custom themes with Tailwind CSS and PrimeNG:

- Light/Dark mode toggle
- Custom color schemes
- Responsive design
- Accessible components