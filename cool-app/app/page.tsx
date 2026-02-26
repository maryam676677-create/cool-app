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
alignItems: "stretch",
gap: "20px",
position: "relative",
background: "url('/books/Hintergrund.jpg') center/cover no-repeat",
}}
>
{/* Overlay */}

<div
style={{
position: "absolute",
inset: 0,
backgroundColor: "rgba(0, 0, 0, 0.45)",
}}
/>

{/* Inhalt */}
<div
style={{
position: "relative",
zIndex: 1,
textAlign: "center",
color: "white",
padding: "0 20px",
}}
>
<h1 className={playfair.className}
style={{
fontSize: "48px",
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
marginTop: "20px",
}}
>
Hier teile ich meine Gedanken. 💭🌙
</p>

<Link
href="/books"
style={{
display: "inline-block",
marginTop: "40px",
padding: "14px 28px",
backgroundColor: "#0e8c97",
color: "white",
fontSize: "18px",
borderRadius: "10px",
textDecoration: "none",
fontWeight: "bold",
}}
>
Meine Bücher ⇨
</Link>
</div>
</main>
);
}
