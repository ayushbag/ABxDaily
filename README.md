# Personal Blogging Website

This repository contains the source code for a personalized blogging website built using Vite and React. The website fetches and displays blog posts stored as Markdown (`.md`) files in a GitHub repository using the GitHub REST API. It features a responsive design styled with Tailwind CSS and operates entirely as a front-end application, without any back-end.

## Features

- **Markdown-based Blog Posts**: Blog content is written and stored as `.md` files in a GitHub repository.
- **GitHub API Integration**: The app fetches blog content directly from GitHub.
- **Vite + React**: Utilizes Vite for fast development and React for a modern UI framework.
- **Tailwind CSS**: Enables rapid and responsive styling.
- **No Back-End**: Pure front-end application with all data fetched via the GitHub API.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-blog.git
   cd personal-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following variables:
   ```env
   VITE_GITHUB_TOKEN=your-github-api-token
   ```
   - Generate a [GitHub Personal Access Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token) to access the repository if it is private.

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the app in your browser at [http://localhost:5173](http://localhost:5173).

## Usage

1. Write your blog posts in Markdown format and store them in a GitHub repository.
2. Ensure the `.md` files follow a consistent naming and structure (e.g., include metadata like title and date in the frontmatter).
3. The app fetches the Markdown files, parses them, and displays them as blog posts.

## Dependencies

- **React**: For building the UI.
- **Tailwind CSS**: For styling.
- **Axios**: For making API requests to the GitHub REST API.
- **Marked**: For parsing Markdown content.

## Deployment

To deploy the application:

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the contents of the `dist/` folder to your preferred hosting platform, such as:
   - [Vercel](https://vercel.com/)
   - [Netlify](https://www.netlify.com/)
   - [GitHub Pages](https://pages.github.com/)

## Contributing

Contributions are welcome! If you have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [GitHub REST API](https://docs.github.com/en/rest)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

