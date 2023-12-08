import CurrentUser from "@/components/CurrentUser";

export default function CustomerHome() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center">
        Welcome to Customer Home Page!
      </h1>

      <CurrentUser />
    </main>
  );
}
