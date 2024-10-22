import React from "react";
import account from "../assets/images/acc.svg";
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
  return (
    <>
      <header className="absolute z-10 w-full px-20 pt-16">
        <nav className="flex items-center justify-between">
          <a href="/" className="font-chronicle text-3xl font-bold">
            MNTN
          </a>
          <ul className="flex flex-1 items-center justify-center gap-10">
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
              <span className="font-gilroy text-[17px] font-medium">
                Account
              </span>
            </div>
          </a>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
