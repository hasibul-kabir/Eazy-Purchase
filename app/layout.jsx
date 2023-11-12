import "./globals.css";

import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "@/store/UserContext";
import TopNavBar from "@/components/Navigations/TopNavBar";

export const metadata = {
  title: "Eazy Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <UserContextProvider>
          <TopNavBar />
          {children}
        </UserContextProvider>

        <Toaster />
      </body>
    </html>
  );
}
