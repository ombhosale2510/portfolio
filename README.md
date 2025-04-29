# Om Bhosale's Portfolio

A modern, responsive portfolio website built with React, showcasing my projects and expertise in AI Engineering and Computer Science.

## 🚀 Features

- Responsive design with Tailwind CSS
- Code splitting and lazy loading for optimal performance
- Error boundary implementation for graceful error handling
- Interactive project showcases with dynamic routing
- Comprehensive SEO optimization:
  - Meta tags and Open Graph tags
  - JSON-LD structured data
  - Sitemap.xml for better indexing
  - Robots.txt configuration
  - Google Search Console integration
- Comprehensive test coverage

## 🛠️ Technologies

- React
- React Router
- Framer Motion
- Tailwind CSS
- Jest & React Testing Library

## 🔧 Setup & Development

1. **Installation**
   ```bash
   npm install
   ```

2. **Development Server**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

3. **Testing**
   ```bash
   npm test
   ```
   Launches the test runner in interactive watch mode.

4. **Production Build**
   ```bash
   npm run build
   ```
   Builds the app for production to the `build` folder.

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── ErrorBoundary.js
│   └── projects/       # Project-specific components
├── App.js              # Main application component
├── ProjectDetails.js   # Dynamic project routing
└── projects.js         # Project data
public/
├── index.html          # Main HTML with SEO meta tags
├── sitemap.xml         # XML sitemap for search engines
└── robots.txt         # Search engine crawling rules
```

## 🧪 Testing

The project uses Jest and React Testing Library for testing. Tests are located alongside their components with the `.test.js` extension.

To run specific tests:
```bash
npm test <test-name>
```

## 🚀 Deployment

The site is deployed using GitHub Pages. The deployment process is automated through GitHub Actions:

1. Push changes to the main branch
2. GitHub Actions automatically builds and deploys
3. Changes are live at [https://ombhosale2510.github.io/portfolio/](https://ombhosale2510.github.io/portfolio/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

Om Bhosale - [LinkedIn](https://www.linkedin.com/in/om-bhosale-44838b186/) - [GitHub](https://github.com/ombhosale2510)
