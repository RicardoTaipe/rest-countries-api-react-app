import Image from "next/image";
import darkMode from "../public/dark-mode-night-moon-svgrepo-com.svg";

function Navbar() {
  return (
    <nav className="bg-primary-1 border-2 ">
      <div className="w-full flex justify-between max-w-7xl mx-auto">
        <p>Where in the world?</p>
        <div className="flex gap-2">
          <Image src={darkMode} alt="dark mode icon" width={16} height={16} />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
