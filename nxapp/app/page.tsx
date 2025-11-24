"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Header from "./header";
import Child from "./child/page";
import Products from "./products/page";

export default function Home() {
  const router = useRouter();
  const [states] = useState(["Tozeur", "Gafsa", "Tunis"]);

  return (
    <>
      <Header />

      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <button onClick={() => router.push("/login")}>Login Page</button>
        <button onClick={() => router.push("/contact/123")}>Contact Page</button>
      </div>

      <Child states={states} />
      <Products />
    </>
  );
}
