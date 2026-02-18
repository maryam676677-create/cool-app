import Link from "next/link";

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
color: "white",
}}
>
<h1>📚 Willkommen in meiner Lesewelt</h1>
<p>Hier teile ich meine Gedanken.</p>

{/* BUTTON → zweite Seite */}
<Link
href="/books"
style={{
display: "inline-block",
marginTop: "40px",
padding: "14px 28px",
backgroundColor: "#7a1fa2",
color: "white",
fontSize: "18px",
borderRadius: "10px",
textDecoration: "none",
fontWeight: "bold",
}}
>
Meine Bücher
</Link>
</main>
);
}



