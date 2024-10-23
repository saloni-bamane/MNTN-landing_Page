import { useState } from "react";
import account from "../assets/images/acc.svg";
import { GiHamburgerMenu } from "react-icons/gi";
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
  return (
    <>
      <header className="absolute z-10 w-full px-20 pt-16">
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
          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="md:hidden"
          >
            <GiHamburgerMenu />
          </button>
        </nav>
      </header>
      {isDrawerOpen && (
        <div className="absolute left-0 top-0 h-screen w-screen bg-white text-black md:hidden">
          <ul className="flex flex-col items-center bg-gray-100 p-4">
            {navlinks.map((nav) => {
              return (
                <li key={nav.label}>
                  <a className="font-gilroy text-lg font-bold" href={nav.href}>
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
      )}
    </>
  );
}

export default Navbar;
