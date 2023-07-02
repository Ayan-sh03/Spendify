import "./Main.css";
import NavBar from "../../Utility/NavBar";
import Expense from "./MP-Sections/Expense";
import Analytics from "./MP-Sections/Analytics";

export default function Main() {
  return (
    <>
      <NavBar />
      <Expense />
      <Analytics />
    </>
  );
}
