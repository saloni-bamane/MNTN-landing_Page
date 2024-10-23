import { useState } from "react";
import account from "../assets/images/acc.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
function Navbar() {
  const navlinks = [
    {
      href: "#equipment",
      label: "Equipment",
    },
    {
      href: "#about",
      label: "About Us",
    },
    {
      href: "#blog",
      label: "Blog",
    },
  ];

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    document.body.style.overflow = isDrawerOpen ? "unset" : "hidden";
  };

  return (
    <div>
      <header className="absolute z-30 w-full px-20 pt-16">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-chronicle text-3xl font-bold">
            MNTN
          </a>

          <div className="hidden flex-1 items-center justify-center gap-10 md:flex">
            <ul className="flex flex-1 items-center justify-center gap-10">
              {navlinks.map((nav) => {
                return (
                  <li key={nav.label}>
                    <a
                      className="font-gilroy text-lg font-bold"
                      href={nav.href}
                    >
                      {nav.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <a href="#account">
              <div className="flex items-center gap-2">
                <span>
                  <img src={account} alt="" />
                </span>
                <button className="font-gilroy text-[17px] font-medium">
                  Account
                </button>
              </div>
            </a>
          </div>
          <button onClick={toggleDrawer} className="md:hidden">
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>
      {isDrawerOpen && (
        <div className="absolute right-0 top-0 z-10 h-full w-full translate-x-0 bg-black/50 px-20 pt-16 backdrop-blur-sm transition-all md:hidden md:-translate-x-full">
          <ul className="absolute right-0 top-0 z-50 flex h-screen w-56 flex-col items-center gap-8 bg-gray-100 p-8 text-black">
            <IoCloseOutline
              onClick={toggleDrawer}
              className="mb-8 mt-10 cursor-pointer text-3xl"
            />
            {navlinks.map((nav) => {
              return (
                <li key={nav.label}>
                  <a className="font-gilroy text-lg font-bold" href={nav.href}>
                    {nav.label}
                  </a>
                </li>
              );
            })}
            <a href="#account">
              <div className="flex w-fit items-center justify-end gap-2 rounded-md bg-backgroundColor p-4">
                <span>
                  <img src={account} alt="" />
                </span>
                <button className="font-gilroy text-[17px] font-medium text-white">
                  Account
                </button>
              </div>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
