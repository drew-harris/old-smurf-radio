import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full justify-between bg-blue-950 p-4 px-8">
      <div>S.M.U.R.F Radio</div>
      <Links />
    </div>
  );
}
function Links() {
  return (
    <div className="flex gap-4">
      <Link href="/schedule">Schedule</Link>
      <Link href="/about">About</Link>
      <Link href="/djs">DJs</Link>
      <Link href="/signup">Sign Up</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}
