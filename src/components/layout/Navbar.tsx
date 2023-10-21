import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="md flex w-full flex-col gap-6 bg-blue-950 p-4 md:flex-row md:items-center md:justify-between md:px-8 ">
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
    <nav className="flex items-center gap-4 overflow-scroll whitespace-nowrap md:justify-between">
      <Link href="/schedule">Schedule</Link>
      <Link href="https://smuradiofrequency.mixlr.com/recordings">
        Recordings
      </Link>
      <Link href="/about">About</Link>
      {/* <Link href="/djs">DJs</Link> */}
      <a href="https://docs.google.com/forms/d/1PK8aNZ6NIcGpKPBOPmd4bLNuRgZjwD6Eisbsdzu2k7U/viewform?edit_requested=true">
        Sign Up
      </a>
      <Link href="/connect">Contact</Link>
    </nav>
  );
}
