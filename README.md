# Prisma Visual Live Website

## Overview

This project is a modern, responsive website for Prisma Visual Live, a company specializing in visual experiences for high-end events. The website is built using cutting-edge web technologies to ensure performance, scalability, and an engaging user experience.

## Technologies Used

1. **Next.js**: We chose Next.js as our React framework for several reasons:
   - Server-side rendering and static site generation capabilities
   - Built-in routing and API routes
   - Excellent performance optimizations
   - Easy deployment with Vercel

2. **React**: The core library for building our user interface, chosen for its component-based architecture and large ecosystem.

3. **TypeScript**: Used throughout the project to add static typing, improving code quality and developer experience.

4. **Tailwind CSS**: Our utility-first CSS framework, selected for:
   - Rapid UI development
   - Consistent design system
   - Easy customization
   - Optimal performance with its JIT compiler

5. **Framer Motion**: Implemented for smooth, high-performance animations that enhance the user experience.

6. **shadcn/ui**: A collection of re-usable components that we've integrated for:
   - Consistent, accessible UI elements
   - Easy customization and theming
   - Reduced development time for common UI patterns

7. **Lucide React**: Chosen as our icon library for its comprehensive set of customizable icons.

## Project Structure


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/prisma-visual-live.git
   \`\`\`

2. Navigate to the project directory:
   \`\`\`
   cd prisma-visual-live
   \`\`\`

3. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

4. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the website.

## Deployment

This project is set up for easy deployment on Vercel. To deploy:

1. Push your changes to a GitHub repository.
2. Connect your GitHub repository to Vercel.
3. Vercel will automatically deploy your site and provide you with a URL.

## Customization

To customize the website for your needs:

1. Update the content in the components located in the `components` directory.
2. Modify the global styles in `app/globals.css`.
3. Add or remove sections by editing `app/page.tsx`.
4. Update images by replacing the URLs in `constants/images.ts`.

## Best Practices

When working on this project, keep these best practices in mind:

1. **Performance**: Use Next.js Image component for optimized image loading.
2. **Accessibility**: Ensure all interactive elements are keyboard accessible and have proper ARIA attributes.
3. **Responsive Design**: Test the website on various screen sizes and devices.
4. **Code Quality**: Maintain consistent code formatting and follow TypeScript best practices.
5. **SEO**: Utilize Next.js built-in SEO features and optimize meta tags.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
