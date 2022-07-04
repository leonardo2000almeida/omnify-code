import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(
  express.urlencoded({ extended: true }),
  express.json(),
  cors(),
  helmet(),
  morgan("tiny")
);

app.listen(PORT, () => console.log(`Server is listen on port: ${PORT}`));
