import NavbarLeft from "./navbarItem/NavbarLeft";
import NavbarRight from "./navbarItem/NavbarRight";

const Navbar = () => {
  return (
    <nav>
      <div className=" max-w-7xl mx-auto my-5">
        <div className="flex items-center justify-around lg:justify-between h-16">
          <NavbarLeft /> <NavbarRight />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
