import TopHeader from "./TopHeader";
import MiddleHeader from "./MiddleHeader";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <div className="header__component">
      <TopHeader />
      <MiddleHeader />
      <Navbar />
   </div>
  );
}
