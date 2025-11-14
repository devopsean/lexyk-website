import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import Header2 from "../components/header2";
import { Metadata } from "next";
import { getTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn about Lexykapp's privacy policy and how we protect your data while you learn vocabulary and improve your language skills.",
  openGraph: {
    title: "Privacy Policy - Lexykapp",
    description: "Learn about Lexykapp's privacy policy and data protection practices.",
    url: "https://www.lexykapp.com/privacy",
  },
  alternates: {
    canonical: "https://www.lexykapp.com/privacy",
  },
};

export default async function Privacy() {
  const locale = 'en';
  const t = getTranslations(locale);
  
  // Read the markdown file at runtime
  const filePath = path.join(process.cwd(), "privacy.md");
  const markdownContent = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden"
    >
      <Header2/>
      <div className="flex items-center justify-center px-4 sm:px-6">
        <div className="markdown-container text-white p-4 sm:p-6 md:p-8 lg:mx-4 xl:mx-6 my-4 sm:my-6 lg:my-5 xl:my-7 max-w-7xl over-2000:max-w-[70vw] w-full">
          <div className="mb-6 pb-6 border-b border-[#5E4CC9]/30">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#5E4CC9] via-[#7B6FE8] to-[#A29EE8] bg-clip-text text-transparent">
              {t.pages.privacy.title}
            </h1>
            <p className="text-gray-300 text-lg">{t.pages.privacy.description}</p>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
