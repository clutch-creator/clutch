import "./globals.css";
import { Inter } from "@next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
