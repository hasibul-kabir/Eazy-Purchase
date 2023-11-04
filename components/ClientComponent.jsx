"use client";

export default function ClientComponent({ children }) {
  console.log("From the client component!");
  return (
    <div>
      <p className="text-red-700 mt-4 text-lg font-medium">
        Hello from the client component
      </p>
      {children}
    </div>
  );
}
