import Link from "next/link";

export default function Header() {
  return (
    <div className="headerCss">
      <Link href="/">Home</Link>
      <Link href="/login">Login</Link>
      <Link href="/contact/123">Contact</Link>
    </div>
  );
}
