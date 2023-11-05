import getData from "@/utils/httpRequests/getData";

export default async function Home() {
  const products = await getData("/products");

  if (products.status !== "success") {
    console.log("Error happens");
  }

  return (
    <main className="bg-background min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center text-headline">
        Welcome Eazy Purchase!
      </h1>
    </main>
  );
}
