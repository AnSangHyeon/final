import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">home</Link>&nbsp;|&nbsp;
          <Link href="/blog">blog</Link>
        </header>
        {children}
      </body>
    </html>
  );
}
