import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Next Template",
  description: "Base template for web and app development"
};

export default function RootLayout(props: { children: ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <div className="flex min-h-screen flex-col">
          <header className="border-b border-slate-800 bg-slate-900/70 backdrop-blur">
            <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
              <div className="text-sm font-semibold tracking-wide text-slate-100">
                Next Template
              </div>
              <span className="text-xs text-slate-400">
                Next.js + TypeScript + Tailwind + Devcontainer
              </span>
            </div>
          </header>

          <main className="flex-1">
            <div className="mx-auto max-w-5xl px-4 py-8">
              {children}
            </div>
          </main>

          <footer className="border-t border-slate-800 bg-slate-900/70">
            <div className="mx-auto max-w-5xl px-4 py-3 text-xs text-slate-500">
              Built with Next.js, TypeScript and Tailwind
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
