"use client";
import { useState } from "react";
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

/* ===================== */
/* FORM STATE */
/* ===================== */

const [name, setName] = useState("");
const [book, setBook] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);
const [error, setError] = useState(false);

async function handleSubmit(e: React.FormEvent) {
e.preventDefault();

setSuccess(false);
setError(false);

const res = await fetch("/api/contact", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify({ name, book, message }),
});

if (res.ok) {
setSuccess(true);
setName("");
setBook("");
setMessage("");
} else {
setError(true);
}
}

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

{/* Aktuell am Lesen */}
<h2
className={playfair.className}
style={{ color: "#af1a62", marginTop: "60px", marginBottom: "20px" }}
>
📖 Aktuell am Lesen
</h2>

<div style={cardStyle}>
<div style={headerStyle}>
<h3>The 5 AM Club</h3>
<span style={progressBadge}>📖 45%</span>
</div>

<p style={ratingStyle}>★★★★☆</p>

<p>
The 5 AM Club zeigt, wie eine strukturierte Morgenroutine Fokus,
Disziplin und persönliche Entwicklung stärkt.
</p>
</div>
{/* MR BEAST MARQUEE */}
<section style={{ marginTop: "110px" }}>
<div className="marquee">
<div className="marquee-content">
<span className={`${beastFont.className} beast-text`}>
⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE
EMPFEHLUNG ⭐📚
</span>
<span className={`${beastFont.className} beast-text`}>
⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE EMPFEHLUNG ⭐📚 MEINE
EMPFEHLUNG ⭐📚
</span>
</div>
</div>
</section>

{/* BILD LINKS – TEXT RECHTS */}
<section style={{ marginTop: "80px" }}>
{/* Atomic Habits */}
<div className="flex items-start mb-32" style={{ gap: "12px" }}>
<div className="flex-shrink-0">
<img
src="/books/atomic.jpg"
alt="Atomic Habits"
className="w-[280px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-120"
/>
</div>

<div className={`${playfair.className} max-w-xl`}>
<h2 className="text-2xl font-bold mb-4">
<a
href="https://www.amazon.de/s?k=Atomic+Habits"
target="_blank"
rel="noopener noreferrer"
className="hover:underline hover:text-green-500 transition-colors duration-200"
>
🔗 Atomic Habits
</a>
</h2>

<p className="text-gray-800 dark:text-white leading-relaxed">
Ich habe dieses Buch gelesen, weil ich meine Gewohnheiten
verbessern wollte. Es zeigt klar, wie kleine tägliche Schritte
langfristig große Veränderungen bringen.
</p>

<p className="text-gray-800 dark:text-white leading-relaxed">
Besonders wichtig fand ich die Idee, dass gute Systeme wichtiger
sind als reine Motivation.
</p>
</div>
</div>

{/* Deep Work */}
<div className="flex items-start mb-32" style={{ gap: "12px" }}>
<div className="flex-shrink-0">
<img
src="/books/Deep_Work.jpg"
alt="Deep Work"
className="w-[280px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-120"
/>
</div>

<div className={`${playfair.className} max-w-xl`}>
<h2 className="text-2xl font-bold mb-4">
<a
href="https://www.amazon.de/s?k=Deep+Work+Cal+Newport"
target="_blank"
rel="noopener noreferrer"
className="hover:underline hover:text-green-500 transition-colors duration-200"
>
🔗 Deep Work
</a>
</h2>

<p className="text-gray-800 dark:text-white leading-relaxed">
Dieses Buch hat mir geholfen, mich besser zu konzentrieren
und Ablenkungen zu vermeiden.
</p>

<p className="text-gray-800 dark:text-white leading-relaxed">
Es zeigt, wie fokussiertes Arbeiten zu besseren Ergebnissen
und höherer Produktivität führt.
</p>
</div>
</div>
</section>


{/* ===================== */}
{/* FORMULAR GANZ UNTEN */}
{/* ===================== */}

<section style={{ marginTop: "100px", marginBottom: "60px" }}>
<h2
className={playfair.className}
style={{ color: "#af1a62", marginBottom: "20px" }}
>
📩 Buchempfehlung senden
</h2>

<form style={formStyle} onSubmit={handleSubmit}>
<input
type="text"
placeholder="Dein Name"
style={inputStyle}
value={name}
onChange={(e) => setName(e.target.value)}
required
/>

<input
type="text"
placeholder="Buchname"
style={inputStyle}
value={book}
onChange={(e) => setBook(e.target.value)}
required
/>

<textarea
placeholder="Warum empfiehlst du dieses Buch?"
rows={4}
style={inputStyle}
value={message}
onChange={(e) => setMessage(e.target.value)}
required
/>

<button type="submit" style={buttonStyle}>
Absenden
</button>

{success && (
<div style={{
marginTop: "15px",
padding: "12px",
backgroundColor: "#d4edda",
color: "#155724",
borderRadius: "8px",
fontWeight: "bold",
}}>
❤️ Danke für deine Empfehlung!
</div>
)}

{error && (
<div style={{
marginTop: "15px",
padding: "12px",
backgroundColor: "#f8d7da",
color: "#721c24",
borderRadius: "8px",
}}>
❌ Fehler beim Senden. Bitte erneut versuchen.
</div>
)}

</form>
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

const headerStyle = {
display: "flex",
justifyContent: "space-between",
alignItems: "center",
};

const progressBadge = {
backgroundColor: "#f5c518",
color: "black",
padding: "4px 12px",
borderRadius: "20px",
fontWeight: "bold",
fontSize: "14px",
};

const formStyle = {
display: "flex",
flexDirection: "column" as const,
gap: "15px",
};

const inputStyle = {
padding: "12px",
borderRadius: "8px",
border: "1px solid #ccc",
fontSize: "16px",
};

const buttonStyle = {
padding: "12px",
borderRadius: "8px",
border: "none",
backgroundColor: "#7a9f42",
color: "white",
fontSize: "16px",
cursor: "pointer",
};
