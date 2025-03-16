import Content from "./component/content";
import Menu from "./component/menu";
import { Poppins } from "next/font/google"; // ✅ NEW (built-in)
import Task from "./component/task";

// Load the font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], // Adjust weights as needed
  variable: "--font-poppins", // Define CSS variable
});
export default function Home() {
  return (
    <>
    {/* ${poppins.classname} */}
      <div className={` font-sans p-3 flex h-screen items-center`}>
        <Menu />
        <Content/>
        <Task/>
      </div>
    </>
  );
}
