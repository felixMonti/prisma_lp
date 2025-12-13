# Prisma Visual Live Components

This document provides an overview of all the components used in the Prisma Visual Live website. Each component is briefly described along with its main functionalities.

## Layout Components

### 1. Header (`components/header.tsx`)
- Renders the navigation bar at the top of the page
- Implements smooth scrolling to different sections
- Highlights the active section in the navigation
- Uses Framer Motion for animation

### 2. Footer (`components/footer.tsx`)
- Displays company information, contact details, and social media links
- Renders the company logo
- Provides a responsive layout for different screen sizes

## Page Sections

### 3. Hero (`components/hero.tsx`)
- The main landing section of the website
- Displays the company logo with a visually appealing effect
- Uses Framer Motion for entrance animations

### 4. About Us (`components/about-us.tsx`)
- Provides information about Prisma Visual Live
- Includes an image and descriptive text
- Uses a two-column layout on larger screens

### 5. Services (`components/services.tsx`)
- Showcases the services offered by Prisma Visual Live
- Displays service cards with icons and descriptions
- Includes a section for different types of events
- Uses Framer Motion for scroll animations

### 6. Why Us (`components/why-us.tsx`)
- Highlights the company's mission and vision
- Includes an image alongside the text content
- Uses a two-column layout on larger screens

### 7. Event Gallery (`components/event-gallery.tsx`)
- Displays a carousel of event images
- Implements auto-play functionality
- Allows manual navigation with next/previous buttons
- Uses Framer Motion for smooth transitions between images

### 8. Clients (`components/clients.tsx`)
- Showcases client logos
- Displays a grid of event images
- Uses Framer Motion for entrance animations

### 9. Contact (`components/contact.tsx`)
- Renders a contact form
- Includes fields for name, email, and message
- Uses shadcn/ui components for form inputs

## UI Components

### 10. Button (`components/ui/button.tsx`)
- A reusable button component from shadcn/ui
- Customizable with different variants and sizes

### 11. Input (`components/ui/input.tsx`)
- A reusable input component from shadcn/ui
- Used in the contact form

### 12. Textarea (`components/ui/textarea.tsx`)
- A reusable textarea component from shadcn/ui
- Used in the contact form for the message field

## Utility Components

### 13. Image Component (Next.js)
- Used throughout the site for optimized image loading
- Implements lazy loading and provides responsive image sizes

## Layout File

### 14. Root Layout (`app/layout.tsx`)
- Defines the overall structure of the application
- Includes global styles and meta tags
- Wraps all pages with the Header and Footer components

## Main Page

### 15. Home Page (`app/page.tsx`)
- Assembles all the main section components
- Determines the order of sections on the homepage

## Constants

### 16. Images (`constants/images.ts`)
- Stores URLs for all images used across the website
- Centralizes image management for easy updates

## Styles

### 17. Global Styles (`app/globals.css`)
- Defines global styles and Tailwind CSS customizations
- Includes custom animations and utility classes

Each of these components and files plays a crucial role in creating the cohesive and interactive experience of the Prisma Visual Live website. When modifying or extending the site, refer to this document to understand where specific functionalities are implemented.
