"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Luckiest_Guy } from "next/font/google";

const luckiest = Luckiest_Guy({
subsets: ["latin"],
weight: "400",
});

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
const [dark, setDark] = useState(false);

return (
<html lang="de" className={dark ? "dark" : ""}>
<body
className={` bg-white dark:bg-gray-900 transition-colors duration-300`}
style={{ margin: 0 }}
>
<header
style={{
backgroundColor: "#af1a62",
color: "white",
padding: "20px",
display: "flex",
justifyContent: "space-between",
alignItems: "flex-start",
}}
>
<div>
<h2 style={{ color: "white" }}>📚 Meine Lese Welt</h2>

<nav style={{ marginTop: "10px" }}>
<Link href="/" style={{ color: "white", marginRight: "15px" }}>
Startseite ⇨
</Link>

<Link href="/books" style={{ color: "white" }}>
Meine Bücher
</Link>
</nav>
</div>

<button onClick={() => setDark(!dark)}>
{dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>
</header>

{/* SEITENINHALT */}
<main className="p-5 min-h-screen">
{children}
</main>

{/* FOOTER */}
<footer className="footer">
© 2026 Meine Lese Welt
</footer>



</body>
</html>
);
}
