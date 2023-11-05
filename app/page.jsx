import Banner from "./components/Banner";
import PopularProductsSec from "./components/PopularProductsSec";

export default function Home() {
  return (
    <main className="bg-background min-h-screen flex flex-col justify-center items-center gap-y-6">
      <Banner />
      <PopularProductsSec />
    </main>
  );
}
