import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'ShopDoora',
    position: 'Mid-Level .NET Developer',
    period: 'Feb 2026 – Present',
    description: 'Developing microservices-based applications with Clean Architecture and modern authentication',
    achievements: [
      'Developed Nutrition Coach Project using Microservices-based .NET REST API architecture',
      'Set up projects (Nutri_Care, GoodsShop) using Clean Architecture and N-Layer architecture principles',
      'Designed and implemented Master Data management for all entities, including integration with external APIs',
      'Built authentication and authorization features, including Admin account creation, Login/Logout, and JWT-based security',
      'Fixed and optimized bugs across multiple microservices to improve system performance and reliability',
      'Implemented SMS OTP verification and notification sending features',
    ],
  },
  {
    id: 2,
    company: 'Thetys Co., Ltd (under Fusion Solution Co., Ltd)',
    position: 'Software Developer',
    period: 'Feb 2025 – Feb 2026',
    description: 'Developing enterprise-level applications with .NET, AI integration, and cloud technologies',
    achievements: [
      'Built Intelligent Portal with OCR reading for business cards, purchase orders, and master PDF files',
      'Integrated OpenAI to generate structured JSON responses and implemented batch processing',
      'Developed Business Card Management System with drag-and-drop template builder using Vue.js',
      'Built CP Meiji Purchase Order AI System with Azure OCR, OpenAI, and LINE Channel integration',
      'Managed Azure Blob Storage with SAS tokens and created background job services',
      'Dockerized backend services and optimized API performance',
    ],
  },
  {
    id: 3,
    company: 'Secure Link Company Limited (Naypyitaw)',
    position: 'Software Developer',
    period: 'Sep 2024 – Feb 2025',
    description: 'Developed government license application system with .NET Core and Angular',
    achievements: [
      'Developed DOTP Project – Domestic Operator License System for government operations',
      'Implemented license application, renewal, modification, and cancellation modules',
      'Built features for license extension, route updates, vehicle type changes, and business suspension',
      'Used Repository Pattern for clean architecture implementation',
      'Implemented account and role management systems',
      'Actively resolved production issues, debugging, and hotfix deployment',
    ],
  },
  {
    id: 4,
    company: 'Freelance',
    position: 'Full-Stack Developer',
    period: '2023 – 2024',
    description: 'Delivered custom web applications and e-commerce solutions for various clients',
    achievements: [
      'Built Luxe-Look E-Commerce System – cosmetics platform with full admin panel and REST APIs',
      'Developed Hospital Booking System with ASP.NET MVC for patient appointment scheduling',
      'Created Food Order Management System with order lifecycle and daily sales tracking',
      'Implemented secure REST APIs, CRUD operations, and business logic across projects',
    ],
  },
];
