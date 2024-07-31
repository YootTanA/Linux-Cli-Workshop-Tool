import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="grid grid-cols-10 gap-5">
          <div className="w-fit h-fit border-2 border-black items-center flex justify-center p-5 text-base">
            user-1
          </div>
        </div>
      </div>
    </main>
  );
}
