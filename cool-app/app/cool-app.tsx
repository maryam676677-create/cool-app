import "./globals.css";

export const metadata = {
title: "My Books App",
description: "My personal book website",
};

export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body>
{children}
</body>
</html>
);
}



