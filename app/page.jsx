import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center">Welcome Eazy Purchase!</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </main>
  );
}
