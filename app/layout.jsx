import "./globals.css";
import Navbar from "./components/Navbar";

import { UserContextProvider } from "@/store/UserContext";

export const metadata = {
  title: "Eazy Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <div className="bg-background">
            <Navbar />
            {children}
          </div>
        </UserContextProvider>
      </body>
    </html>
  );
}
