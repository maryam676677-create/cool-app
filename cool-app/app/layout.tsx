"use client";
import {motion} from "framer-motion";
import{usePathname} from "next/navigation";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { Luckiest_Guy, Playfair_Display } from "next/font/google";


const luckiest = Luckiest_Guy({
subsets: ["latin"],
weight: "400",
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
    const pathname = usePathname();
const [dark, setDark] = useState(false);

return (
<html lang="de" className={dark ? "dark" : ""}>
<body
className={"bg-white transition-colors duration-300 " }
style={{ margin: 0 }}
>
<header

   className={playfair.className}
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

<button
onClick={() => setDark(!dark)}
className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-200"
>
{dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
</button>

</header>

{/* SEITENINHALT */}
<main className="min-h-screen text-gray-800 dark:text-white">
<motion.div
key={pathname}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7 }}
>
{children}
</motion.div>
</main>


{/* FOOTER */}
<footer className="footer">
© 2026 Meine Lese Welt
</footer>



</body>
</html>
);
}