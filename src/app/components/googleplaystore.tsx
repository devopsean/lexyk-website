import React from "react";

function Googleplaystore() {
  return (
    <a
      href="https://play.google.com/store/apps/details?id=com.lexyk.lexyk" 
      target="_blank" 
      rel="noopener noreferrer"
      className="relative z-50 flex w-48 h-14 md:min-w-4 lg:w-64 lg:h-16 bg-black text-white rounded-xl over-2000:rounded-[0.8vw] items-center justify-center border border-white over-2000:min-w-[15vw] over-2000:h-auto over-2000:pb-3 over-2000:pt-2"
    >
      <div className="mr-3">
        <svg viewBox="30 336.7 120.9 129.2" width="30" className="over-2000:w-[2.2vw] over-2000:h-auto">
          <path
            fill="#FFD400"
            d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
          />
          <path
            fill="#FF3333"
            d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
          />
          <path
            fill="#48FF48"
            d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
          />
          <path
            fill="#3BCCFF"
            d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
          />
        </svg>
      </div>
      <div>
        <div className="text-xs over-2000:text-[0.8vw]/[1vw]">GET IT ON</div>
        <div className="text-xl over-2000:text-[1.4vw]/[1.2vw] font-semibold font-sans -mt-1">Google Play</div>
      </div>
    </a>
  );
}

export default Googleplaystore;
