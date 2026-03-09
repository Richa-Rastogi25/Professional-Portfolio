### My Portfolio Website – React.js

* This project is a fully responsive personal portfolio website built using React.js.
* It showcases my skills, projects, qualifications, and contact information in a clean and professional interface.
* The purpose of this assignment was to develop, optimize, and deploy a React-based portfolio website.

Features:-
- React Frontend | Built using modular React components:
1. Home
2. About Me
3. Skills
4. Projects
5. Resume
6. Contact Page
7. Navbar

- Routing implemented with react-router-dom.
- Fully responsive design for mobile, tablet, and desktop screens.

| Technology Used  | Purpose                         |
| ---------------- | ------------------------------- |
| React.js         | Frontend framework              |
| React Router DOM | For navigation between sections |
| HTML5            | Structure                       |
| CSS3             | Styling                         |
| Inline CSS       | Custom styling                  |
| Bootstrap        | Navigation bar layout           |
| JavaScript (ES6) | Component logic                 |

Functional Highlights:-
1. Auto text rotation in Home page.
2. Resume download/redirect through a PDF link.
3. External links (email, LinkedIn) open safely in a new tab.
4. Clean and visually appealing UI with consistent theme colors.

Performance Optimization:-
- To ensure faster load time and production quality:

Lazy Loading:-
- Images and components are auto-lazy-loaded by React's default optimization in the production build.

Minified Files:-
- Running npm run build generates:
1. Minified JavaScript
2. Minified CSS
3. Optimized static assets

Deployment Optimized:-
Includes redirect rules for GitHub Pages using: https://richa-rastogi25.github.io/My-Portfolio/
Production Build

To generate a production build:-
- npm run build
- This creates an optimized /build folder.

Deployment:-
- The project was deployed using GitHub Pages.
Steps followed:
1. Created production build
2. Pushed code to GitHub repository
3. Connected repository to hosting provider

Tried Configuring:-
1. Custom domain 
2. Automatic SSL certificate (HTTPS)
3. Verified deployment accessibility

Challenges & Solutions:-
1. Responsive design adjustments
Problem: Elements overflowed on small screens.
Solution: Added padding adjustments and flexible inline styles.
2. PDF resume not opening
Problem: Browser blocked download.
Solution: Used: <Link to="/RichaRastogi.pdf" target="_blank" rel="noopener noreferrer">

Conclusion:-
This project demonstrates my ability to:
1. Build a production-ready React application
2. Implement routing and UI components
3. Optimize performance
4. Tried deploying to a live server
5. Tried managing a complete frontend project professionally