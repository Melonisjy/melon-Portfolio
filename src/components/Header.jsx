import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-blue-100 h-12 md:h-20">
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <Link to="/">
          <div>MELON's Portfolio</div>
        </Link>
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>

          <li className="bg-purple-300 btn-style">Portfolio</li>
          <li className="bg-blue-300 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
