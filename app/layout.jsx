import "./globals.css";

import { UserContextProvider } from "@/store/UserContext";

export const metadata = {
  title: "Eazy Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>{children}</UserContextProvider>
      </body>
    </html>
  );
}
