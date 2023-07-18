# PlanetMarket

 > **Warning**
> This app is a work in progress and shouldn't be considered production ready. It uses new technologies that are yet to be stable such as Server Actions and Drizzle ORM.

## Running the app

Follow the below steps to run the app locally:

1. Create a database in PlanetScale.
2. Create a local `.env` file with the variables as per the `.env.example` file.
3. Run `npm install`.
4. Generate a migration with `npx drizzle-kit generate:mysql`. This creates a new folder called `migrations-folder` in the root which contains the SQL queries to create the database tables.
5. Push the migration to PlanetScale with `npx drizzle-kit up:mysql` or `npx drizzle-kit push:mysql`. If this fails (or nothing happens) and your PlanetScale database isn't updated with all the tables, run the SQL queries that were generated in the `migrations-folder` from the previous step manually in the PlanetScale console.
6. Run `npm run dev` to open the app in development mode.

That's it. You should now be able to access the app at `http://localhost:3000`.
