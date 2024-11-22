import Link from "next/link";

export default function Header() {
  const linkStyling = "p-1 m-2 text-xl hover:underline";
  return (
    <header className="flex justify-between items-center h-20">
      <h2 className="text-4xl font-semibold p-4">MP-5</h2>
      <p className= "bg-sky-600">(Note: If the URL You entered does not take you to the right address, try to refresh the page and try again.)</p>
      <p className= "bg-sky-600">(Valid URL ex: started with http:// or www. or https://)</p>
      <nav className="p-2 m-4">
        <Link href="/" className={linkStyling}>
          Home
        </Link>
      </nav>
    </header>
  );
}
