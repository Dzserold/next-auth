"use server";

import { User } from "@prisma/client";

export async function registerUser(user: Omit<User, "id">) {}
