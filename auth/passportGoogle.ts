import passport from "passport";
import { Strategy } from "passport-google-oauth20";
import dotenv from "dotenv";
dotenv.config();

const CALLBACK_URL = "http://localhost:4000/api/v1/auth/google/callback";

passport.use(
  new Strategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      callbackURL: CALLBACK_URL,
      scope: ["profile, email"],
      passReqToCallback: true,
    },
    async (req, accessToken, refreshToken, profile, cb) => {
      cb(null, profile);
    }
  )
);

passport.serializeUser((user, cb) => {
  console.log("Serializing user:", user);
  cb(null, user);
});

passport.deserializeUser((profile, cb) => {
  //@ts-ignore
  cb(null, profile);
});
