import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import fs from "fs";
import path from "path";
import Header2 from "../components/header2";

export default async function Privacy() {
  // Read the markdown file at runtime
  const filePath = path.join(process.cwd(), "privacy.md");
  const markdownContent = fs.readFileSync(filePath, "utf-8");

  return (
    <div
      id="page-wrapper"
      className="bg-black origin-top-left transition-transform overflow-hidden "
    >
      <Header2/>
      <div className="flex items-center justify-center">
        <div className="markdown-container text-white p-4 lg:mx-4 xl:mx-6 lg:my-5 xl:my-7 font-bold max-w-7xl over-2000:max-w-[70vw] ">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
