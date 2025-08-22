# Digital Library App

A modern, full-featured Angular 20 portfolio project for managing a digital library. This application demonstrates advanced Angular techniques, modular architecture, and integration with a mock REST API using json-server.

## Features

- **Book Search:** Search books by title with live filtering as you type.
- **Book Registration:** Add new books with validation (title, author, year, genre, image URL).
- **Book Edit:** Update book details via a dedicated edit page.
- **Book Delete:** Remove books with confirmation dialogs.
- **Book List:** View all books with thumbnail images and details.
- **Responsive UI:** Built with Bootstrap 5 for a clean, mobile-friendly experience.
- **Mock API:** Uses json-server for local RESTful endpoints and realistic data.

## Technologies & Techniques

- **Angular 20**: Standalone components and modules, signals, reactive forms, dependency injection.
- **TypeScript**: Strong typing, DTOs, models, and service interfaces.
- **Bootstrap 5**: Responsive design and utility classes.
- **json-server**: Local REST API for CRUD operations and rapid prototyping.
- **RxJS**: Observables for async data and reactive programming.
- **Portfolio Quality**: Clean code, modular structure, and best practices for enterprise Angular apps.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ttrefilio/digital-library-app.git
   cd digital-library-app
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Install json-server (for mock API):**
   ```bash
   npm install --save-dev json-server
   ```

## Running the Application

1. **Start the mock API:**

   ```bash
   npx json-server --watch db.json --port 3000
   ```

   The API will be available at `http://localhost:3000/books`.

2. **Start the Angular development server:**
   ```bash
   ng serve
   ```
   The app will be available at `http://localhost:4200/`.

## Project Structure

- `src/app/core/models/` — Book model and DTOs
- `src/app/core/services/` — Book service (API integration)
- `src/app/books/components/` — Book registration, search, and edit components
- `src/app/books/books-routing.module.ts` — Feature routing
- `db.json` — Mock data for json-server

## How It Works

- **Live Search:** Filters books locally as you type in the search field.
- **Validation:** Forms use Angular validators for required fields and value ranges.
- **Image Handling:** Displays book cover images; uses a default image if the URL is invalid.
- **Routing:** Feature modules and lazy loading for scalable architecture.
- **Service Modularization:** BookService provided via CoreModule for clean DI.

## Why This Project?

This app is designed as a portfolio showcase for modern Angular development. It demonstrates:

- Modular and scalable architecture
- Clean separation of concerns
- Integration with REST APIs
- Advanced UI/UX with Bootstrap
- Real-world features like CRUD, search, and validation

## Getting Started

- Fork or clone the repo
- Install dependencies
- Run the mock API and Angular app
- Explore the code and features

## License

MIT

---

**Contact:** Thiago Trefilio · [t.trefilio@gmail.com] · [[linkedin.com/in/thiagotrefilio](https://www.linkedin.com/in/thiagotrefilio)] · [[github.com/ttrefilio](https://github.com/ttrefilio)]

---

_Built with Angular 20, Bootstrap 5, and json-server._
