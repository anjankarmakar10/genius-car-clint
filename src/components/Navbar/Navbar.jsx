import { Search, ShoppingBag } from "react-feather";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto px-4 flex justify-between items-center py-6">
        <Link to={"/"}>
          <img className="w-20" src={Logo} alt="" />
        </Link>
        <ul className="flex items-center gap-4 text-[#444444] font-semibold text-base">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <Link to={"/orders"}>
            <ShoppingBag />
          </Link>
          <Search />
          <Link
            to="/appointment"
            className="font-semibold border-2 py-1 px-2 rounded-md border-[#FF3811] text-[#FF3811]"
          >
            Appointment
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
