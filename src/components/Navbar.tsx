import Link from "next/link";
import React from "react";
import { DarkModeToggle } from "./DarkModeToggle";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      {/* Left  */}
      <SidebarTrigger />
      {/* Right  */}
      <div className="flex items-center gap-4">
        <Link href="/"> Dashboard </Link>
        <DarkModeToggle />
        {/*Add avatar for account login and all from clerk*/}
      </div>
    </nav>
  );
};

export default Navbar;
