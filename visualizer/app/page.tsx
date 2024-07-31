import UserBox from "@/component/UserBox";
import Image from "next/image";
import { promises as fs } from "fs";

async function getUsers() {
  try {
    const file = await fs.readFile("../../user.json", "utf8");
    return JSON.parse(file);
  } catch {
    return {};
  }
}

export default async function Home() {
  const data = await getUsers();
  console.log(data);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid grid-cols-10 gap-5"></div>
      </div>
    </main>
  );
}
