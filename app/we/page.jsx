import CurrentUser from "@/components/CurrentUser";

export default function OwnerHome() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center">
        Welcome Owner Home Page!
      </h1>
      <CurrentUser />
    </main>
  );
}
