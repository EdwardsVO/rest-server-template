import { Client } from "pg";
import env from "dotenv";
env.config();

if (process.env.NODE_ENV == "development") {
  const client = new Client({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    port: Number(process.env.PORT_DB),
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
  });
}

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

export default client;
