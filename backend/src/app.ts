import express, { Application, json } from "express";
import cors from "cors";

import storiesRoutes from "./routes/stories";
import postsRoutes from "./routes/posts";

const app: Application = express();

app.use(json());
app.use(cors());
app.use("/stories/", storiesRoutes);
app.use("/posts/", postsRoutes);

export { app };
