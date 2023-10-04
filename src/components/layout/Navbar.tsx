import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="md flex w-full flex-col md:items-center md:justify-between gap-6 bg-blue-950 p-4 md:px-8 md:flex-row ">
      <Link href="/" className="flex items-center gap-5">
        <Image src="/circle.png" alt="Logo" width={40} height={40}></Image>
        <Image
          src="/wide.png"
          alt="Student Managed Radio Frequency"
          className="hidden md:block"
          width={400}
          height={20}
        />
      </Link>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <nav className="flex md:justify-between items-center gap-6 overflow-scroll whitespace-nowrap">
      <Link href="/schedule">Schedule</Link>
      <Link href="/about">About</Link>
      <Link href="/djs">DJs</Link>
      <a href="https://docs.google.com/forms/d/1PK8aNZ6NIcGpKPBOPmd4bLNuRgZjwD6Eisbsdzu2k7U/viewform?edit_requested=true">
        Sign Up
      </a>
      <Link href="/connect">Contact</Link>
    </nav>
  );
}
