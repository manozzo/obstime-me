import { PT_Serif } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = PT_Serif({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Obstime-me',
  description: 'A cada reload, uma nova frase de fracasso para humorizar o seu dia.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
