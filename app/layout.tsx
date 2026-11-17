import type { Metadata } from 'next';
import { Montserrat, Noto_Sans_JP } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';

// Fonts
// 1. Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-montserrat',
});
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

// Site Title and Description
export const metadata: Metadata = {
  title: 'たちわざり研究室',
  description: '本当にユーザーに使われるプロダクト・サービスを作り続ける。',
};

// Setting Language
function resolveLang(): string {
  const supportedLangs = 'ja'; // 'ja' or 'en'
  return supportedLangs;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const currentLang = resolveLang();

  return (
    <html
      lang={currentLang}
      className={`${montserrat.variable} ${notoSansJP.variable}`}
    >
      <body>
        {/* main */}
        <div className='site-body'>
          {children}
        </div>
      </body>
    </html>
  );
}
