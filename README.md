## Pokemon Info App

This project is a React application built with TypeScript, Redux Toolkit, and RTK Query to retrieve and display information about Pokemon. 

### Features:

* Fetches a list of Pokemon from the PokéAPI.
* Stores the retrieved Pokemon list persistently.
* Displays a list of Pokemon names.
* Allows clicking on a Pokemon name to display its details.

### Technologies:

* React
* TypeScript
* Redux Toolkit
* RTK Query

### Development Principles:

* **Code Separation:** Components, logic, and styling are kept separate for better organization and maintainability.
* **Clean Code:** The code adheres to principles like readability, meaningful variable names, and proper formatting.
* **Readability:** The code is easy to understand for both developers working on the project.
* **Maintainability:** The code is well-structured and documented to facilitate future modifications and bug fixes.

### API Endpoints Used:

* **GET [https://pokeapi.co/api/v2/pokemon/](https://pokeapi.co/api/v2/pokemon/)** : Retrieves a list of Pokemon.
* **GET [invalid URL removed]** : Retrieves details of a specific Pokemon by its ID. (Replace `:id` with the actual Pokemon ID)

**Note:** This README doesn't include specific code examples, but provides an overview of the project's functionalities and development principles.

### Getting Started:

1. Clone the repository.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. The application should run on `http://localhost:5173/` (default port).

### Unit Tests:

Unit tests are written for both the Pokemon list and detail screens using a suitable testing framework like Jest. These tests ensure that the components behave as expected under different scenarios.

This README provides a high-level overview of the project. Further details about the implementation and testing can be found within the codebase itself.

