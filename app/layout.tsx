import './globals.css';

export const metadata = {
  title: 'Vitrine Pour Tous',
  description: 'Créez et explorez des vitrines d’entreprises facilement',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
        <header style={{ background: '#222', color: 'white', padding: '15px', textAlign: 'center' }}>
          <h1>Vitrine Pour Tous</h1>
        </header>
        <main style={{ minHeight: '80vh', padding: '20px' }}>
          {children}
        </main>
        <footer style={{ background: '#222', color: 'white', textAlign: 'center', padding: '10px' }}>
          <p>© {new Date().getFullYear()} Vitrine Pour Tous - Tous droits réservés</p>
        </footer>
      </body>
    </html>
  );
}
