import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <img className="w-[14px] h-[18px] cursor-pointer" src={appleImg} alt="Apple logo" />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => {
            return <div className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" key={nav}>{nav}</div>;
          })}
        </div>

        <div className="flex items-baseline gap-7 max-sm: justify-end max-sm:flex-1">
          <img className="size-18 cursor-pointer" src={searchImg} alt="search" />
          <img className="size-18 cursor-pointer" src={bagImg} alt="bag" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
