export const metadata = { title: 'MINDflow', description: 'Il tuo viaggio verso la consapevolezza' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <div className="container">
          <header className="header">
            <div className="title">MINDflow</div>
            <div className="subtitle">Il tuo viaggio verso la consapevolezza</div>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
