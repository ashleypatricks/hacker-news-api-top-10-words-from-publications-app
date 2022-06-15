import { Application } from "express";
import { app } from "./app";

const { PORT } = process.env;
const APP_PORT = PORT ? parseInt(PORT) : 3001;

((expressApp: Application) => {
  try {
    expressApp.listen(APP_PORT, () =>
      console.log("=== App Online === ", APP_PORT)
    );
  } catch (e) {
    console.error("=== App Error ===", e);
  }
})(app);
