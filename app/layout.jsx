import "./globals.css";

import { Toaster } from "react-hot-toast";

import { UserContextProvider } from "@/store/UserContext";
import TopNavBar from "@/components/Navigations/TopNavBar";
import QueryProvider from "@/components/Providers/QueryProvider";

export const metadata = {
  title: "Eazy Purchase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <UserContextProvider>
            <TopNavBar />
            {children}
          </UserContextProvider>
        </QueryProvider>

        <Toaster />
      </body>
    </html>
  );
}
