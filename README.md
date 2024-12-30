# The Binding of Isaac Platinum Remake - Frontend

This is the **frontend** for *The Binding of Isaac Platinum Remake*. Built with **Vue.js**, this application provides a user interface to browse, search, and interact with items from the game. It integrates with the REST API for data and offers a modern, responsive design.

## Technologies Used

- **Vue.js**: Progressive JavaScript framework for building the UI.
- **Tailwind CSS**: For utility-first and responsive styling.
- **Vue Router**: For client-side routing and navigation.
- **Vue Toast Notification**: For displaying notifications.
- **Axios**: To interact with the REST API.

## Features

- Browse items from the game with a clean, responsive design.
- Search for specific items dynamically.
- View item details in a modal.
- Integrates seamlessly with the REST API.

## Prerequisites

- **Node.js** (16.x or higher)
- **npm** or **yarn**

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/tboi-platinum-remake-frontend.git
cd tboi-platinum-remake-frontend
```

## Install Dependencies

```bash
npm install
```

## Configure Environment Variables

Create a ```.env``` file in the root directory and add the following variables:

```bash
VITE_API_URL=http://127.0.0.1:8000
```
Replace the value with the base URL of your API.

## Run the Application

Start the development server:

```bash
npm run dev
```
The application will be available at http://localhost:5173.

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
