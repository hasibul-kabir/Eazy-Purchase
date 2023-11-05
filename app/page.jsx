import Banner from "./components/Banner";
import PopularProductsSec from "./components/PopularProductsSec";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Banner />
      <PopularProductsSec />
    </main>
  );
}
