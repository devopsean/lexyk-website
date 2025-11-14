import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import Header2 from "../components/header2";
import { Metadata } from "next";
import { getTranslations } from "@/lib/translations";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read Lexykapp's terms of service for using our vocabulary learning app and language learning platform.",
  openGraph: {
    title: "Terms of Service - Lexykapp",
    description: "Terms of service for using Lexykapp's vocabulary learning platform.",
    url: "https://www.lexykapp.com/terms",
  },
  alternates: {
    canonical: "https://www.lexykapp.com/terms",
  },
};

export default async function Term() {
  const locale = 'en';
  const t = getTranslations(locale);
  
  const filePath = path.join(process.cwd(), "terms.md");
  const markdownContent = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden"
    >
      <Header2 />
      <div className="flex items-center justify-center px-4 sm:px-6">
        <div className="markdown-container text-white p-4 sm:p-6 md:p-8 lg:mx-4 xl:mx-6 my-4 sm:my-6 lg:my-5 xl:my-7 max-w-7xl over-2000:max-w-[70vw] w-full">
          <div className="mb-6 pb-6 border-b border-[#5E4CC9]/30">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#5E4CC9] via-[#7B6FE8] to-[#A29EE8] bg-clip-text text-transparent">
              {t.pages.terms.title}
            </h1>
            <p className="text-gray-300 text-lg">{t.pages.terms.description}</p>
          </div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
