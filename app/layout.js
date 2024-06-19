import { Josefin_Sans } from "next/font/google";

import Header from "@/app/_components/Header";

import "@/app/_styles/globals.css";
import { ReservationProvider } from "./_context/ReservationProvider";

const josefinFont = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

function RootLayout({ children }) {
  return (
    <html>
      <body
        className={`${josefinFont.className} min-h-screen antialiased text-primary-100 bg-primary-950 flex flex-col`}
        suppressHydrationWarning={true}
      >
        <Header />

        <div className="px-8 py-12 flex-1 grid">
          <main className="w-full max-w-7xl mx-auto">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
