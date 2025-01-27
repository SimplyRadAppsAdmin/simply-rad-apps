import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/ui/navbar/navbar";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Simply Rad Apps",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
            {/* Global Margin Wrapper */}
            <div>
              {/* Navbar */}
              <Navbar />

              {/* Main Content */}
              <div>{children}</div>

              {/* Footer */}
              <footer className="w-full flex items-center justify-center mx-auto text-center text-xs gap-8 py-16">
                <p>
                  <a
                    href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 300,
                      fontSize: 16,
                    }}
                  >
                    LEGAL NOTICES
                  </a>
                </p>
                {/* <ThemeSwitcher /> */}
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
