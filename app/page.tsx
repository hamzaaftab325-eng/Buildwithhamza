import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="min-h-screen">
        <div className="h-screen flex items-center justify-center bg-gray-50">
          <h2 className="text-4xl font-bold">More content here</h2>
        </div>
      </main>
    </>
  );
}
