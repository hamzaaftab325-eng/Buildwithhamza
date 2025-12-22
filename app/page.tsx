import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">Welcome</h1>
        </div>
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-4xl font-bold">Scroll to see navbar animation</h2>
        </div>
      </main>
    </>
  );
}
