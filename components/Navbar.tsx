import AuthProviders from "@/components/AuthProviders";
import { NavLinks } from "@/constant";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const session = {};

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="logo" />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session? (
          <>
            userPhoto
            <Link href='/create-project'>
              share your work
            </Link>
          </>
        ): (<AuthProviders />)}
      </div>
    </nav>
  );
};

export default Navbar;
