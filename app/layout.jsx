export const metadata = { title: "MINDflow", description: "Il tuo viaggio verso la consapevolezza" };

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className="bg-black text-zinc-100 min-h-dvh">
        <main className="max-w-md mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}
