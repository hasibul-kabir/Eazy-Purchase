import "./globals.css";

export const metadata = {
  title: "Eazy Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
