import app from "./app";
import env from "dotenv";
import client from "./db";

env.config();

client.connect(() => {
  try {
    if (process.env.NODE_ENV == "development") {
      console.log(
        `Database Connected and running on PORT:${process.env.PORT_DB} 📡`
      );
    }
  } catch (e) {
    console.error(`🤒 Error connecting database: ${e}`);
  }
});

app.listen({ port: process.env.PORT || 3000 }, () => {
  if (process.env.NODE_ENV == "development") {
    console.log(`Server ready at http://localhost:${process.env.PORT} 🚀`);
  }
});
