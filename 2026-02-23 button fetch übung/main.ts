import { Hono, Context } from "hono";
import { serveStatic } from "hono/deno";
import { Database } from "sqlite";

const app = new Hono();
const db = new Database("lieblingsessen.db");

app.use("/*", serveStatic({ root: "./static" }));

app.get("/essen", (c: Context) => {
  const daten = [];

  const rows = db.prepare(`
    SELECT person.name, essen.essen
    FROM person
    JOIN essen ON person.lieblingsessen = essen.id
  `).all();

  for (const row of rows) {
    daten.push({
      name: row.name,
      essen: row.essen
    });
  }

  return c.json(daten);
});

Deno.serve(app.fetch);