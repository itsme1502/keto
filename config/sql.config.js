import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export async function main() {
  // const Name = "Harshit",
  // Email = "Harshit@test2.com",
  // Password = "Harshit_1502",
  // isAdmin = true,
  // MobileNo = "7991592801",
  // RollNo = "IEC2021113"

  // const salt = await bcrypt.genSalt(10);
  // const hashedPassword = await bcrypt.hash(Password,salt);
  // const user = await prisma.user.create({
  //   data: {
  //     name: Name,
  //     email: Email,
  //     password: hashedPassword,
  //     isAdmin: isAdmin,
  //     mobileNo: MobileNo,
  //     rollNo: RollNo,
  //   },
  // });
  // console.log(user);
}

export default async function prismaDB() {
  try {
    await prisma.$connect();
    console.log("connected to sql db");
  } catch (error) {
    console.log(error);
  }
}
export { prisma };
