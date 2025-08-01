# LendSQR Frontend Application

A modern, responsive web application built with React/Next.js, TypeScript, and SCSS, designed to provide a seamless user management interface for the LendSQR platform.

## 🚀 Features

- **User Authentication**: Secure sign-in flow with form validation ( basic)
- **User Management**: Comprehensive user listing with filtering and search capabilities
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI Components**: Custom form inputs, buttons, and interactive elements
- **Pagination**: Custom pagination component (client side)
- **Type Safety**: Built with TypeScript for better developer experience and code reliability

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **UI Components**: Custom built with accessibility in mind
- **Linting**: ESLint
- **Package Manager**: npm
- **Testing**: Jest
- **API**: Mock API using Nextjs API routes, (Mocky.io is now paid, json-generator is confusing me)

## 📦 Prerequisites

- Node.js 20.0.0 or later
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Precioussoul/lendsqr-fe-test.git
   cd lendsqr-fe-test
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open [http://localhost:3000](http://localhost:3000) in your browser**

## 🏗️ Project Structure

```
/src
  /app                  # App Router pages and layouts
    /(auth)             # Authentication related routes
    /(dashboard)        # dashboard routes (users and users/[id])
    /api/*                # API routes (users and users/?id=[id])
  /assets               # Reusable assets (icons/svgs, images, etc.)
  /components           # Reusable UI components
  /lib                 # Utility functions and configurations (mock function for api)
  /styles              # Global styles and SCSS variables, mixin and more
  /types               # TypeScript type definitions
  /utils               # Helper functions and utilities
```

## 🧪 Testing

Run the test suite:

```bash
npm test
# or
yarn test
```

Notes: Mock API, App routes/pages and parent components are excluded from the unit test

## 🧹 Linting

Check code quality with ESLint:

```bash
npm run lint
# or
yarn lint
```

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
```

## 🌐 Deployment

This project is configured for deployment on Vercel. For more deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [SCSS Documentation](https://sass-lang.com/documentation)
