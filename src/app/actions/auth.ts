"use server";

import { SignupFormSchema, FormState } from "../lib/definintions";
import bcrypt from "bcrypt";
import { MongoClient, ServerApiVersion } from "mongodb";

// MongoDB connection setup
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.apkvn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Connect to your database and users collection
async function getUsersCollection() {
  // Always call connect; it's safe and idempotent in recent MongoDB drivers
  await client.connect();
  const db = client.db(`${process.env.DB_NAME}`); // Replace with your DB name
  return db.collection("ChatApp"); // Replace with your collection name
}

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  // Hash the user's password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Get the users collection
    const users = await getUsersCollection();

    // Insert the new user
    const result = await users.insertOne({
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return { success: true, userId: result.insertedId };
  } catch (error) {
    console.error("Error inserting user:", error);
    return { error: "Failed to create user" };
  } finally {
    // Optionally close connection here if you want to, but usually keep it open for server lifetime
    // await client.close();
  }
}
