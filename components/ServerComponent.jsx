export default function ServerComponent() {
  console.log("From the server component!");
  return (
    <p className="text-green-700 mt-4 text-lg font-medium">
      Hello from the server component(into a client component)
    </p>
  );
}
