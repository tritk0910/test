import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="bg-[#111] h-[80px] w-full text-white p-[24px_120px_27px_97px] flex justify-between items-center">
      <Link to={"/"}>
        <img src="/svg/whatHappened.svg" alt="" />
      </Link>
      <div className="text-[11px] flex items-center uppercase space-x-[57px]">
        <a href="#">Introduction</a>
        <a href="#">Solution</a>
        <a href="#">Rate Plan</a>
        <div className="w-[1px] h-[23px] inline-block bg-[#ccc8c6]" />
        <NavLink to={"/login"}>Login</NavLink>
        <a href="#">Apply for free use</a>
      </div>
    </div>
  );
}
