import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google"; // ✅ NEW (built-in)

// Load the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-poppins", // Define CSS variable
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}