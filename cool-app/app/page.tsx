import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
subsets: ["latin"],
weight: ["400", "700"],
});

export default function HomePage() {
return (
<main
style={{
minHeight: "100vh",
display: "flex",
flexDirection: "column",
justifyContent: "center",
alignItems: "center",
gap: "20px",
color: "#af1a62",
}}
>
<h1
style={{
fontSize: "48px",
color: "#af1a62",
fontWeight: "700",
letterSpacing: "1px",
}}
>
Willkommen in meiner LeseWelt 📚
</h1>

<p
className={playfair.className}
style={{
fontSize: "22px",
color: "#af1a62",
marginTop: "20px",
}}
>
Hier teile ich meine Gedanken. 💭🌙
</p>

{/* BUTTON → zweite Seite */}
<Link
href="/books"
style={{
display: "inline-block",
marginTop: "40px",
padding: "14px 28px",
backgroundColor: "#ef6f12",
color: "#efe8e8",
fontSize: "18px",
borderRadius: "10px",
textDecoration: "none",
fontWeight: "bold",
}}
>
Meine Bücher ⇨
</Link>
</main>
);
}
