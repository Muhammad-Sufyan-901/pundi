import * as SQLite from "expo-sqlite";
import { ForgotPasswordFormData, SignInFormData, SignUpFormData } from "../schema/auth.schema";

const database: SQLite.SQLiteDatabase = SQLite.openDatabaseSync("pundi.database");

export const AuthService = {
  init: () => {
    try {
      const query = `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE NOT NULL,
          fullName TEXT NOT NULL,
          password TEXT NOT NULL
        );
      `;

      database.execSync(query);
      console.log("Database initialized");
    } catch (error) {
      console.error("Failed to initialize database", error);
    }
  },

  signUp: async (data: SignUpFormData) => {
    try {
      // Check if user exists
      const selectQuery = `
          SELECT * FROM users WHERE email = ?
      `;
      const existingUser = await database.getFirstAsync(selectQuery, [data.email]);

      if (existingUser) {
        throw new Error("Email sudah terdaftar");
      }

      // Insert new user
      const insertQuery = `
        INSERT INTO users (email, fullName, password) VALUES (?, ?, ?)
      `;
      const result = await database.runAsync(insertQuery, [data.email, data.fullName, data.password]);

      console.log("User created:", result);

      return {
        success: true,
        message: "Pendaftaran berhasil",
      };
    } catch (error) {
      console.error("Sign up error:", error);
      throw error;
    }
  },

  signIn: async (data: SignInFormData) => {
    try {
      const query = `
        SELECT * FROM users WHERE email = ? AND password = ?
      `;
      const result = await database.getFirstAsync(query, [data.email, data.password]);

      if (!result) {
        throw new Error("Email atau password salah");
      }

      console.log("User signed in:", result);

      return {
        success: true,
        message: "Login berhasil",
        user: result,
      };
    } catch (error) {
      console.error("Sign in error:", error);
      throw error;
    }
  },

  forgotPassword: async (data: ForgotPasswordFormData) => {
    try {
      // Mock logic - in real app, send email here
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const checkQuery = `SELECT * FROM users WHERE email = ?`;
      const user = await database.getFirstAsync(checkQuery, [data.email]);

      return {
        success: true,
        message: "Jika email terdaftar, instruksi reset password akan dikirim.",
      };
    } catch (error) {
      console.error("Forgot password error:", error);
      throw error;
    }
  },
};
