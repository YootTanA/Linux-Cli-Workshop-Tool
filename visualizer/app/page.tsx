import Users from "@/components/Users";

export default async function Home() {
  const quest = process.env.NEXT_PUBLIC_QUEST;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="flex flex-col items-center justify-center gap-20">
        <h1 className="text-7xl capitalize">{quest}</h1>
        <Users />
      </div>
    </main>
  );
}
