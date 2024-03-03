import {
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import SigninButton from "./SigninButton";
import Link from "next/link";

export default function Appbar() {
  return (
    <Navbar isBordered>
      <NavbarContent
        className="hidden gap-4 sm:flex"
        justify="center"
      >
        <NavbarItem>
          <Link className="hover:text-sky-700" href="/">
            Home
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <SigninButton />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
