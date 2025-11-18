# Modern Portfolio Template

A clean, responsive, and modern personal portfolio template built with React, TypeScript, Tailwind CSS, and ShadCN UI components. This template is designed to showcase your professional profile with sections for navigation, hero, about, skills/tech stack, experience, education, projects, blogs, upcoming work, and footer—complete with dark/light mode toggle.

***

## Features

- **React + TypeScript:** Strongly typed and scalable codebase for maintainability.
- **Tailwind CSS:** Utility-first styling for rapid and consistent UI development.
- **ShadCN Components:** Beautiful, accessible UI elements built on Radix UI primitives.
- **Layout Sections:**
    - **Navigation Bar:** Responsive top navigation with links to each section.
    - **Hero:** Eye-catching introduction with your name, title, and call to action.
    - **About:** Brief professional summary or bio.
    - **Skills/Tech Stack:** Display of your core technologies and proficiencies.
    - **Experience:** Chronological listing of your work history.
    - **Education:** Relevant academic background.
    - **Projects:** Showcase of your key projects with descriptions and links.
    - **Blogs \& Learning:** Section for your articles, tutorials, or learning journey.
    - **Upcoming:** Highlight upcoming projects, talks, or events.
    - **Footer:** Contact info, social links, copyright, and acknowledgments.
- **Dark/Light Mode:** Seamless theme toggle to match user preference and enhance accessibility.
- **Responsive Design:** Optimized for all screen sizes from mobile to desktop.

***

## Getting Started

### Prerequisites

- Node.js >= v16.x
- npm or yarn package manager


### Installation

```bash
git clone https://github.com/yourusername/modern-portfolio-template.git
cd modern-portfolio-template
npm install
# or
yarn install
```


### Running Locally

```bash
npm run dev
# or
yarn dev
```

This will start a development server at `http://localhost:3000`.

### Building for Production

```bash
npm run build
npm run preview
# or
yarn build
yarn preview
```


***

## Project Structure

- `src/sections`: Reusable React components (Navigation, Hero, About, etc.).
- `src/contexts`: Includes the ThemeContext.tsx respondible for dark and light modes. 
- `src/data`: JSON and TS files containing project info, experience, skills, etc.

***

## Customization

- Update `src/data` files to personalize your projects, experiences, and blogs.
- Modify Tailwind config (`tailwind.config.js`) for theming and extend colors.
- Use the ShadCN UI component library for additional UI elements.
- Adjust dark/light mode settings or customize toggle UI inside layout components.

***

## Dark/Light Mode

The theme toggle is implemented using React context and Tailwind CSS’s dark mode utilities. User’s preference is saved to local storage and applied on page load for persistence.

***

## License

MIT License — feel free to use and modify this template for your personal or professional portfolio. Contributions and suggestions are welcome!

***

## Contact

- GitHub: [https://github.com/yourusername](https://github.com/yourusername)
- LinkedIn: [https://linkedin.com/in/yourprofile](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

***

Showcase your work with style and simplicity using this modern, fully-featured React portfolio template!

