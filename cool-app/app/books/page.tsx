import { Playfair_Display, Luckiest_Guy } from "next/font/google";

const playfair = Playfair_Display({
subsets: ["latin"],
weight: ["400", "700"],
});

const beastFont = Luckiest_Guy({
subsets: ["latin"],
weight: ["400"],
});

export default function BooksPage() {
return (
<main
className="fade-in"
style={{
minHeight: "100vh",
padding: "80px 20px",
maxWidth: "900px",
margin: "0 auto",
}}
>
{/* Titel */}
<h1
className={playfair.className}
style={{ color: "#7a9f42", marginBottom: "30px" }}
>
📚 Meine Bücher ansehen
</h1>

{/* Lieblingsbuch */}
<section style={{ marginBottom: "50px" }}>
<h2
className={playfair.className}
style={{ color: "#af1a62", marginBottom: "20px" }}
>
⭐ Lieblingsbuch
</h2>

<div style={cardStyle}>
<h3>Atomic Habits</h3>
<p style={ratingStyle}>★★★★★</p>
<p>
Atomic Habits hat meine Sicht auf Gewohnheiten komplett verändert.
Das Buch zeigt, wie kleine tägliche Verbesserungen langfristig
große Ergebnisse bringen können. Sehr motivierend und praxisnah.
</p>
</div>
</section>

{/* Gelesene Bücher */}
<h2
className={playfair.className}
style={{ color: "#af1a62", marginBottom: "20px" }}
>
📖 Gelesene Bücher
</h2>

<div style={cardStyle}>
<h3>The Alchemist</h3>
<p style={ratingStyle}>★★★★☆</p>
<p>
Eine inspirierende Geschichte über Träume und den eigenen Lebensweg.
Einfach geschrieben, aber mit einer tiefen Botschaft.
</p>
</div>

<div style={cardStyle}>
<h3>Deep Work</h3>
<p style={ratingStyle}>★★★★★</p>
<p>
Dieses Buch hat mir geholfen, Fokus und Konzentration deutlich zu
verbessern. Sehr hilfreich für produktives Arbeiten und Lernen.
</p>
</div>

<div style={cardStyle}>
<h3>Rich Dad Poor Dad</h3>
<p style={ratingStyle}>★★★★☆</p>
<p>
Ein verständlicher Einstieg in finanzielle Bildung und Mindset.
Regt stark zum Nachdenken über Geld und Investitionen an.
</p>
</div>

{/* ============================= */}
{/* MR BEAST MARQUEE */}
{/* ============================= */}

<section style={{ marginTop: "110px" }}>
<div className="marquee">
<div className="marquee-content">
<span className={`${beastFont.className} beast-text`}>
⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚
</span>
<span className={`${beastFont.className} beast-text`}>
⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚
</span>
</div>
</div>
</section>

{/* ============================= */}
{/* WEISSE BUCHKARTEN */}
{/* ============================= */}

<section style={{ marginTop: "60px" }}>
<div className="flex justify-start gap-6 flex-wrap">

{/* Atomic Habits */}
<div className="bg-white rounded-xl shadow-lg p-2 w-30 text-center hover:scale-105 transition">
<img
src="/books/atomic.jpg"
alt="Atomic Habits"
style={{ width: "450px", height: "auto" }}
/>
<h3 className="font-bold text-md text-gray-800">
Atomic Habits
</h3>
</div>



{/* Deep Work */}
<div className="bg-white rounded-xl shadow-lg p-2 w-30 text-center hover:scale-105 transition">
<img
src="/books/Deep_Work.jpg"
alt="Deep Work"
style={{ width: "450px", height: "auto" }}
/>
<h3 className="font-bold text-md text-gray-800">
Deep Work
</h3>
</div>

</div>
</section>

</main>
);
}

/* ========================= */
/* Styles */
/* ========================= */

const cardStyle = {
border: "1px solid #333",
borderRadius: "12px",
padding: "20px",
marginTop: "20px",
backgroundColor: "#111",
color: "white",
};

const ratingStyle = {
color: "#f5c518",
margin: "6px 0",
fontSize: "18px",
};


