import { hash } from 'bcryptjs';

import { NextResponse } from "next/server";
import { sql } from '@vercel/postgres';
// import { z } from 'zod';

export async function POST(req: Request) {
  try {
    const { email, password, answer } = await req.json();
    console.log({email,password,answer})
    
    // const parsedCredentials = z
    //       .object({ email: z.string().email(), password: z.string().min(6), answer: z.string().min(6) })
    //       .safeParse( email, password);
          
    const hashedPassword = await hash(password, 10);

    const response = await sql`
      INSERT INTO users (email, password, answer)
      VALUES (${email}, ${hashedPassword}, ${answer})
    `;
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}