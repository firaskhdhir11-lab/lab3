"use client";
import Header from "@/app/header";
import { useParams } from "next/navigation";

export default function Contact() {
  const params = useParams();
  return (
    <>
      <Header />
      <div style={{ padding: 16 }}>
        <div>Contact Page</div>
        <h2>Contact ID: {params?.id}</h2>
      </div>
    </>
  );
}
