"use client";

import "./globals.css";
import Link from "next/link";
import { useState } from "react";

import { Playfair_Display } from "next/font/google";
import { Poppins } from "next/font/google";

const poppins = Poppins({
subsets: ["latin"],
weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
subsets: ["latin"],
weight: ["400", "700"],
});

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
const [dark, setDark] = useState(false);

return (
<html lang="de">
<body
className={`${poppins.className} ${dark ? "dark" : ""}`}
style={{ margin: 0 }}
>
{/* DARK MODE BUTTON */}
<button
onClick={() => setDark(!dark)}
className="toggle"
>
{dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

{/* HEADER */}
<header
style={{
padding: "20px",
backgroundColor: "#af1a62",
color: "white",
}}
>
<h2 className={playfair.className}>
📚 Meine Lese Welt
</h2>

<nav style={{ marginTop: "10px" }}>
<Link href="/" style={{ color: "white", marginRight: "15px" }}>
Startseite ⇨
</Link>
<Link href="/books" style={{ color: "white" }}>
Meine Bücher
</Link>
</nav>
</header>

{/* SEITENINHALT */}
<main style={{ padding: "20px" }}>{children}</main>

{/* FOOTER */}
<footer
style={{
padding: "15px",
marginTop: "40px",
textAlign: "center",
backgroundColor: dark ? "#222" : "#dddddd",
color: dark ? "white" : "black",
}}
>
© 2026 Meine Lese Welt
</footer>
</body>
</html>
);
}
