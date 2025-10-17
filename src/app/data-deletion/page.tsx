import React from "react";

export default function DataDeletion() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">Data Deletion Instructions – Lexyk</h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            If you would like to delete your Lexyk account and associated personal data, you can do so directly from within the app:
          </p>
          
          <ol className="list-decimal list-inside space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base">
            <li>Open the Lexyk app on your device.</li>
            <li>Go to Settings.</li>
            <li>Scroll to the bottom and tap Delete Account.</li>
            <li>Confirm the deletion when prompted.</li>
          </ol>
          
          <p className="text-base sm:text-lg mb-4 sm:mb-6">
            Once confirmed, your account and personal data will be permanently deleted from our systems. This process cannot be undone.
          </p>
          
          <p className="text-base sm:text-lg mb-6 sm:mb-8">
            If you experience any issues deleting your account, you may contact us at{" "}
            <a 
              href="mailto:support@lexykapp.com" 
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
            >
              support@lexykapp.com
            </a>{" "}
            and we will assist with the deletion.
          </p>
        </div>
      </div>
    </div>
  );
}
