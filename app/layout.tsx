import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "WatchTracker",
  description: "Catat film dan series yang kamu tonton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-linear-to-br from-slate-900 via-blue-900 to-indigo-900 font-sans text-white">
        <Header />
        {children}
      </body>
    </html>
  );
}
