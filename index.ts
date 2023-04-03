import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import { mainRouter } from "./routes";
import cookieSession from "cookie-session";
//google auth strategy
import "./auth/passportGoogle";

dotenv.config();

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: process.env.CLIENT_BASE_URL,
    credentials: true,
  })
);
app.use(
  cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SECRET_COOKIE || ""],
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
  console.log(`Express dservssssssser isdss listening at ${PORT}`);
});
