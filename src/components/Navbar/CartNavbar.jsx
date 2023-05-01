import { User } from "react-feather";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const CartNavbar = () => {
  return (
    <header>
      <nav className="container mx-auto px-4 flex justify-between items-center py-6">
        <Link to={"/"}>
          <img className="w-20" src={Logo} alt="" />
        </Link>
        <ul className="flex items-center gap-4 text-[#444444] font-semibold text-base">
          <li>
            <Link to="/orders">Order</Link>
          </li>
          <li>
            <Link to="/ordersreview">Order Review</Link>
          </li>
          <li>
            <Link to="/manage">Manage Inventory</Link>
          </li>
          <li>
            <Link to="/profile">
              {" "}
              <User />{" "}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default CartNavbar;
