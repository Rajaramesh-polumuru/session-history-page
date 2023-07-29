import Image from "next/image";
import arrowLeftIcon from "@/public/assets/arrow-left.svg";
import logo from "@/public/assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-between px-6 py-4 w-full">
      <div className="flex items-center gap-3">
        <button type="button" className="border-none cursor-pointer">
          <Image src={arrowLeftIcon} alt="arrow-left" width={32} height={32} />
        </button>
        <h2 className="text-2xl font-bold font-tomorrow">Instance Name</h2>
      </div>
      <nav className="grid grid-cols-2 gap-4 items-center">
        <div className="grid gap-4 border-r-2 border-slate-500 pr-5">
          <h3 className="text-2xl font-bold w-max font-tomorrow">
            Node Moniker
          </h3>
          <p className="text-md">sent1jqd5s...axu6c</p>
        </div>
        <button className="bg-customGreen hover:bg-customGreen text-white font-bold py-2 px-4 rounded h-fit w-full">
          Start
        </button>
      </nav>
      <div className="flex items-center">
        <Image src={logo} alt="logo" width={150} height={40} />
      </div>
    </header>
  );
};

export default Header;
