import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const lora = Lora({ subsets: ["latin"], variable: '--font-lora', style: ['normal', 'italic'] });

export const metadata: Metadata = {
  title: "Mudit Garg | Software Engineer · Product Builder ",
  description:
    "Five years of shipping consumer products across retail-tech and consumer internet. Software Engineer at Spinny. Targeting a top US MBA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className={`${inter.variable} ${lora.variable} ${inter.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
