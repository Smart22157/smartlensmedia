import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-center px-8 py-4 bg-black text-white">
      {/* Logo on the left */}
      <h1 className="absolute left-8 text-xl font-bold">SmartLens</h1>

      {/* Navigation Links centered */}
      <div className="flex space-x-6">
        <Link href="/">Home</Link>
         <Link href="/portfolio">Gallery</Link> 
        <Link href="/contact">Contact</Link>
         <Link href="/about">About</Link> 
       
      </div>
    </nav>
  );
}
