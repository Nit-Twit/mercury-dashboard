import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "• Mercury | Dashboard",
  description: "Welcome!",
}

export default async function Dashboard() {
    const session = await getServerSession();
    session ? null : redirect('/');
    return (
        <h1>Dashboard Page</h1>
    );
}22