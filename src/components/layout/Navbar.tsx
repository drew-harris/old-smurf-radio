import Link from "next/link";

export default function Navbar() {
  return (
    <div className="md flex w-full flex-col justify-between gap-6 bg-blue-950 p-4 px-8 md:flex-row md:items-end">
      <div className="flex items-center gap-5">
        <div>Logo HERE</div>
        <div className="text-xs md:text-sm">
          Student Managed <br />
          University Radio Frequency
        </div>
      </div>
      <Links />
    </div>
  );
}

function Links() {
  return (
    <nav className="flex justify-between gap-6 overflow-auto whitespace-nowrap">
      <Link href="/schedule">Schedule</Link>
      <Link href="/about">About</Link>
      <Link href="/djs">DJs</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
