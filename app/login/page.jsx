import LoginForm from "./components/LoginForm";

export default function Login() {
  return (
    <main className="min-h-screen bg-background py-8 px-12">
      <h1 className="font-bold text-4xl text-center text-headline">
        Login Page!
      </h1>

      <LoginForm />
    </main>
  );
}
