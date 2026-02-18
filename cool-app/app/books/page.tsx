export default function BooksPage() {
return (
<main
style={{
minHeight: "100vh",
padding: "60px 20px",
color: "white",
maxWidth: "900px",
margin: "0 auto",
}}
>
<h1 style={{ marginBottom: "40px" }}>📚 Meine Bücher ansehen</h1>

{/* Lieblingsbuch */}
<section style={sectionStyle}>
<h2>⭐ Lieblingsbuch</h2>

<div style={cardStyle}>
<h3>Atomic Habits</h3>
<p style={ratingStyle}>★★★★★</p>
<p>
Atomic Habits hat meine Sicht auf Gewohnheiten komplett verändert.
Das Buch zeigt, wie kleine tägliche Verbesserungen langfristig große
Ergebnisse bringen können. Sehr motivierend und praxisnah.
</p>
</div>
</section>

{/* Gelesene Bücher */}
<section style={sectionStyle}>
<h2>📖 Gelesene Bücher</h2>

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
</section>
</main>
);
}

/* ===== Styles ===== */

const sectionStyle = {
marginBottom: "50px",
};

const cardStyle = {
border: "1px solid #333",
borderRadius: "12px",
padding: "20px",
marginTop: "15px",
backgroundColor: "#111",
};

const ratingStyle = {
color: "#f5c518",
margin: "6px 0",
fontSize: "18px",
};







