import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./fontawesome.min.css";
import "./styles.scss";

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin', 'latin-ext'],
  variable: '--font-google-montserrat',
})

export const metadata: Metadata = {
  title: "Farkhad Maten, Software Engineer",
  description: "Personal portfolio website",
  keywords:
    "Farkhad Maten, JavaScript, DevOps, Cloud, Python, Azure, Node.js, Terraform, Go Lang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="sr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
