import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="p-6">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav>
          <ul className="flex gap-4">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About</li></Link>
          </ul>
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
