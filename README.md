# TypeScript MVC User Management Backend

This project is a simple user management backend built with TypeScript, Express, and TypeORM. It demonstrates the MVC architecture and provides CRUD operations for user records stored in a MySQL database.

## Features

- TypeScript for type safety
- Express for HTTP server and routing
- TypeORM for database interaction
- MVC structure (Controllers, Entities, Routes, Modules)
- CRUD endpoints for users

## Requirements

- Node.js (v16+ recommended)
- MySQL server

## Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure the database:**
   - Edit `src/modules/database.ts` with your MySQL credentials and database name.
   - Ensure your database and tables exist.

4. **Run the server:**
   ```bash
   npx ts-node src/app.ts
   ```
   Or use:
   ```bash
   npm run dev
   ```
   *(if you have a script in `package.json`)*

## API Endpoints

| Method | Endpoint      | Description           |
|--------|--------------|-----------------------|
| GET    | `/`          | Get all users         |
| POST   | `/`          | Create a new user     |
| GET    | `/:id`       | Get user by ID        |
| PUT    | `/:id`       | Update user by ID     |
| DELETE | `/:id`       | Delete user by ID     |

## Folder Structure

- `src/controllers` - Business logic for user operations
- `src/entities` - TypeORM entity definitions
- `src/routes` - Route definitions
- `src/modules` - Database connection setup

## License

MIT
