import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import Header2 from "../../components/header2";

export default async function PrivacyEs() {
  const filePath = path.join(process.cwd(), "privacy-es.md");
  let markdownContent = '';
  try {
    markdownContent = fs.readFileSync(filePath, "utf-8");
  } catch (error) {
    // Fallback to English if Spanish file doesn't exist
    const fallbackPath = path.join(process.cwd(), "privacy.md");
    markdownContent = fs.readFileSync(fallbackPath, "utf-8");
  }

  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden"
    >
      <Header2/>
      <div className="flex items-center justify-center px-4 sm:px-6">
        <div className="markdown-container text-white p-4 sm:p-6 md:p-8 lg:mx-4 xl:mx-6 my-4 sm:my-6 lg:my-5 xl:my-7 max-w-7xl over-2000:max-w-[70vw] w-full">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

