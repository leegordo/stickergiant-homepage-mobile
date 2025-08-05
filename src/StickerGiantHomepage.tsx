import React, { useState, useEffect } from 'react';

// Image constants - using placeholder images and web-safe URLs
const imgImage0011 = "https://via.placeholder.com/150x100/BB3526/FFFFFF?text=StickerGiant+Logo";
const imgGenerateAnImageOfAHandHoldingAnArrayOfStickersFannedOutLikeCardsWithFreshCoolImagesAndTypographiesMakeItOnAWhiteBackground = "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop&crop=center";
const imgKey1 = "https://via.placeholder.com/60x50/4A90E2/FFFFFF?text=Service";
const imgKey2 = "https://via.placeholder.com/60x50/7ED321/FFFFFF?text=Custom";
const imgKey3 = "https://via.placeholder.com/60x50/F5A623/FFFFFF?text=Quality";
const imgPhotoOfATableFullOfJarsForCandiesAndCbdBudsProductsWithFunQuirkyLabelsLikeSourAlienDieselAndBlueberryKushShowingColorfulCartoonyAnimalsAndAliensAndFruit = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop&crop=center";
const imgProductInfoCardLgMd = "https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&h=600&fit=crop&crop=center";
const imgRow = "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=400&fit=crop&crop=center";
const imgMakeATextureLikeAHologramOnABlackBackground = "https://via.placeholder.com/100x100/333333/FFFFFF?text=Glow";
const imgMakeATextureLikeAHologramOnABlackBackground1 = "https://via.placeholder.com/100x100/FFD700/000000?text=Glitter";
const imgMakeATextureLikeAHologramOnABlackBackground2 = "https://via.placeholder.com/100x100/FF69B4/FFFFFF?text=Holo";
const imgMakeATextureLikeAHologramOnABlackBackground3 = "https://via.placeholder.com/100x100/E0E0E0/000000?text=Clear";
const imgImageContainer = "https://images.unsplash.com/photo-1600298881974-6be191ceeda1?w=720&h=720&fit=crop&crop=center";
const img5 = "https://via.placeholder.com/200x200/4A90E2/FFFFFF?text=Blog+1";
const img6 = "https://via.placeholder.com/200x200/7ED321/FFFFFF?text=Blog+2";
const img7 = "https://via.placeholder.com/200x200/F5A623/FFFFFF?text=Blog+3";
const imgSatisfactionGuaranteed150PxPng = "https://via.placeholder.com/150x100/BB3526/FFFFFF?text=Satisfaction+Guaranteed";
const imgEveryStickerHasAStory350PxPng = "https://via.placeholder.com/350x75/FFFFFF/000000?text=Every+Sticker+Has+A+Story";

// SVG icon placeholders - using simple data URIs
const img = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";
const img1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'/%3E%3C/svg%3E";
const imgShape = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23000'%3E%3Cpath d='M16 0L20 12H32L24 20L28 32L16 24L4 32L8 20L0 12H12L16 0Z'/%3E%3C/svg%3E";
const imgPolygon1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='M0 0L12 12L24 0Z' fill='%231f2a37'/%3E%3C/svg%3E";
const imgOiDoubleQuoteSerifLeft = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 17h3l2-4V7H5v6h3M17 17h3l2-4V7h-6v6h3' fill='%23666'/%3E%3C/svg%3E";
const imgIcon = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5z' fill='%23666'/%3E%3C/svg%3E";
const imgIcon1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' fill='%23666'/%3E%3C/svg%3E";
const imgIcon2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27A6.5 6.5 0 1 0 13 15.5l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z' fill='%23666'/%3E%3C/svg%3E";
const imgIcon3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M7 18c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2z' fill='%23666'/%3E%3C/svg%3E";
const imgIcon4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z' fill='%23666'/%3E%3C/svg%3E";
const img2 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2c1.1 0 2 .9 2 2 0 .74-.4 1.38-1 1.73v.27h1c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h1v-.27c-.6-.35-1-.99-1-1.73 0-1.1.9-2 2-2z' fill='%23383839'/%3E%3C/svg%3E";
const img3 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79c-1.73.84-2.84 2.6-2.84 4.58 0 2.76 2.24 5 5 5 1.78 0 3.37-.81 4.42-2.08L20 21.84l1.41-1.41L6.76 4.84zM12 9c.83 0 1.5.67 1.5 1.5 0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5c0-.83.67-1.5 1.5-1.5z' fill='%23383839'/%3E%3C/svg%3E";
const img4 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16.5V16H7.5V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,10V11H13.5V10C13.5,8.7 12.8,8.2 12,8.2Z' fill='%23383839'/%3E%3C/svg%3E";
const imgSvg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' fill='%23000'/%3E%3C/svg%3E";
const imgSvg1 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z' fill='%23fff'/%3E%3C/svg%3E";
const imgIcon5 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M24 4.56c-.88.39-1.83.65-2.83.77 1.02-.61 1.8-1.58 2.17-2.73-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.59-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .39.04.76.13 1.12-4.08-.2-7.7-2.16-10.12-5.13-.42.73-.67 1.58-.67 2.48 0 1.7.87 3.21 2.19 4.09-.81-.03-1.57-.25-2.23-.62v.06c0 2.39 1.7 4.38 3.95 4.83-.41.11-.85.17-1.29.17-.32 0-.63-.03-.93-.08.63 1.96 2.45 3.39 4.6 3.43-1.69 1.32-3.82 2.11-6.14 2.11-.4 0-.79-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.01-.63.96-.69 1.8-1.56 2.46-2.55z' fill='%234A90E2'/%3E%3C/svg%3E";
const imgIcon6 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M24 12.07C24 5.41 18.63.07 12 .07S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.48 0-1.94.93-1.94 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07' fill='%234267B2'/%3E%3C/svg%3E";
const imgIcon7 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.66-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07zM12 0C8.74 0 8.33.01 7.05.07 2.77.26.26 2.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.19 4.28 2.7 6.79 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.28-.19 6.79-2.7 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.74 2.77 21.23.26 16.95.07 15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 105.84 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z' fill='%23E4405F'/%3E%3C/svg%3E";
const imgIcon8 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.45 7.32c-.03-.12-.06-.25-.1-.37-.23-1.61-1.09-2.85-2.7-3.09C15.88 3.66 12 3.66 12 3.66s-3.88 0-5.65.2c-1.61.24-2.47 1.48-2.7 3.09-.04.12-.07.25-.1.37C3.34 9.07 3.34 12 3.34 12s0 2.93.21 4.68c.03.12.06.25.1.37.23 1.61 1.09 2.85 2.7 3.09C8.12 20.34 12 20.34 12 20.34s3.88 0 5.65-.2c1.61-.24 2.47-1.48 2.7-3.09.04-.12.07-.25.1-.37.21-1.75.21-4.68.21-4.68s0-2.93-.21-4.68zM9.9 15.17V8.83L15.82 12 9.9 15.17z' fill='%23FF0000'/%3E%3C/svg%3E";
const imgIcon9 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M20.32 6.21c-.16-.77-.63-1.35-1.23-1.46C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.09.25c-.6.11-1.07.69-1.23 1.46C3.5 7.6 3.5 10.5 3.5 10.5s0 2.9.18 4.29c.16.77.63 1.35 1.23 1.46 1.39.25 7.09.25 7.09.25s5.7 0 7.09-.25c.6-.11 1.07-.69 1.23-1.46.18-1.39.18-4.29.18-4.29s0-2.9-.18-4.29zM9.75 13.5V7.5L15.5 10.5l-5.75 3z' fill='%235865F2'/%3E%3C/svg%3E";
const imgIcon10 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M18.9 8.1c0-.4-.1-.8-.4-1.1-.3-.3-.7-.4-1.1-.4H6.6c-.4 0-.8.1-1.1.4-.3.3-.4.7-.4 1.1v7.8c0 .4.1.8.4 1.1.3.3.7.4 1.1.4h10.8c.4 0 .8-.1 1.1-.4.3-.3.4-.7.4-1.1V8.1zm-1.5 3.9l-5.4 2.7V9.3l5.4 2.7z' fill='%230A66C2'/%3E%3C/svg%3E";


// Component interfaces
interface StarsProps {
  rating?: "5" | "4.5" | "4" | "2.5" | "2" | "1.5" | "3.5" | "1" | "3";
}

interface ButtonProps {
  label?: string;
  variant?: "Primary" | "Secondary";
  onClick?: () => void;
}

interface TrustpilotStarterProps {
  tooltip?: boolean;
}

interface TrustpilotReviewCardProps {
  type?: "Landscape" | "Portrait" | "Summary landscape" | "Summary portrait";
}

interface ChevronDownProps {
  size?: "20" | "24" | "32" | "40" | "48" | "16";
}

// Stars component for Trustpilot rating
function Stars({ rating = "5" }: StarsProps) {
  return (
    <div className="box-border content-stretch flex flex-row gap-0.5 items-start justify-start p-0 relative size-full">
      {[1, 2, 3, 4, 5].map((star) => (
        <div key={star} className="bg-[#219653] box-border content-stretch flex flex-col items-start justify-start p-[3px] relative shrink-0">
          <div className="relative shrink-0 size-3.5">
            <img alt="star" className="block max-w-none size-full" src={img} />
          </div>
        </div>
      ))}
    </div>
  );
}

// Button component
function Button({ label = "Button", variant = "Primary", onClick }: ButtonProps) {
  const baseClasses = "box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip px-3 py-4 relative w-full cursor-pointer";
  const primaryClasses = "bg-[#bb3526] border border-[#bb3526]";
  const secondaryClasses = "bg-[#e3e3e3] border-0 border-[#767676]";
  
  const textClasses = variant === "Primary" 
    ? "font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#f1f2f2] text-[16px] text-left text-nowrap"
    : "font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap";

  return (
    <div 
      className={`${baseClasses} ${variant === "Primary" ? primaryClasses : secondaryClasses}`}
      onClick={onClick}
    >
      <div className={textClasses}>
        <p className="block leading-none whitespace-pre">{label}</p>
      </div>
    </div>
  );
}

// Trustpilot Starter component
function TrustpilotStarter({ tooltip = false }: TrustpilotStarterProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative size-full">
      <div className="box-border content-stretch flex flex-row gap-2 items-start justify-start p-0 relative shrink-0">
        {[1, 2, 3, 4, 5].map((star) => (
          <div key={star} className="bg-[#219653] box-border content-stretch flex flex-col items-center justify-center p-[3px] relative shrink-0 size-10">
            <div className="relative shrink-0 size-7">
              <img alt="star" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        ))}
      </div>
      <div className="box-border content-stretch flex flex-row gap-1 items-center justify-center p-0 relative shrink-0">
        <div className="h-[29.714px] relative shrink-0 w-8">
          <img alt="trustpilot logo" className="block max-w-none size-full" src={imgShape} />
        </div>
        <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[20px] text-left text-nowrap">
          <p className="block leading-[26px] whitespace-pre">Trustpilot</p>
        </div>
      </div>
      {tooltip && (
        <div className="absolute bg-[#1f2a37] box-border content-stretch flex flex-col-reverse h-[60px] items-center justify-center left-[38px] p-0 rounded-lg top-[102px] w-[156px]">
          <div className="absolute h-[13px] left-[67px] order-2 top-[-7px] w-[23px]">
            <div className="absolute bottom-1/4 left-[19.3%] right-[19.3%] top-[6.15%]">
              <img alt="tooltip arrow" className="block max-w-none size-full" src={imgPolygon1} />
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start order-1 p-0 relative shrink-0">
            <div className="bg-[#ebf5ff] h-3 shrink-0 w-[109px]" />
            <div className="bg-[#ebf5ff] h-3 shrink-0 w-[88px]" />
          </div>
        </div>
      )}
    </div>
  );
}

// Trustpilot Review Card component
function TrustpilotReviewCard({ type = "Portrait" }: TrustpilotReviewCardProps) {
  return (
    <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-[20px] relative shadow-[0px_2px_4px_0px_rgba(7,4,146,0.1),0px_24px_60px_0px_rgba(6,47,125,0.05),0px_12px_24px_0px_rgba(27,59,119,0.05)] size-full">
      <div className="relative shrink-0 size-10">
        <img alt="quote" className="block max-w-none size-full" src={imgOiDoubleQuoteSerifLeft} />
      </div>
      <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[0] min-w-full relative shrink-0 text-[#000000] text-[18px] text-left">
        <p className="block leading-[26px]">Best on the market</p>
      </div>
      <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-start p-0 relative shrink-0 w-full">
        <Stars />
        <div className="font-['Roboto:Light',_sans-serif] font-light leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
          <p className="block leading-[26px] whitespace-pre">2 days ago</p>
        </div>
      </div>
      <div className="font-['Roboto:Light',_sans-serif] font-light leading-[0] min-w-full relative shrink-0 text-[#000000] text-[14px] text-left">
        <p className="block leading-[22px]">
          I love this product because the support is great. Ple ...
        </p>
      </div>
      <div className="bg-[#d9d9d9] h-px shrink-0 w-[60px]" />
      <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[14px] text-left text-nowrap">
        <p className="block leading-[22px] whitespace-pre">Worldtraveler</p>
      </div>
    </div>
  );
}

// Chevron Down Icon
function ChevronDown({ size = "20" }: ChevronDownProps) {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]">
        <div className="absolute inset-[-20%_-10%]">
          <img alt="chevron down" className="block max-w-none size-full" src={imgIcon} />
        </div>
      </div>
    </div>
  );
}

// Icon components
function MenuIcon() {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-10.42%_-6.94%]">
          <img alt="menu" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[12.5%]">
        <div className="absolute inset-[-6.944%]">
          <img alt="search" className="block max-w-none size-full" src={imgIcon2} />
        </div>
      </div>
    </div>
  );
}

function ShoppingCartIcon() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[4.17%_4.17%_8.33%_4.17%]">
        <div className="absolute inset-[-5.95%_-5.68%]">
          <img alt="cart" className="block max-w-none size-full" src={imgIcon3} />
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-[12.5%_16.67%]">
        <div className="absolute inset-[-6.94%_-7.81%]">
          <img alt="user" className="block max-w-none size-full" src={imgIcon4} />
        </div>
      </div>
    </div>
  );
}

// Navigation component with scroll-based animation
function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 100; // Start hiding after 100px scroll

      if (currentScrollY > scrollThreshold) {
        // Scrolling down - hide navigation
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        }
        // Scrolling up - show navigation
        else if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        }
      } else {
        // Near top of page - always show navigation
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  return (
    <div 
      className={`box-border content-stretch flex flex-col items-start justify-start p-0 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out bg-[#fff] ${
        isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-[#4d4d4f] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip pb-2 pt-12 px-6 relative shrink-0 w-full">
        <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[16px] text-center">
          <p className="block leading-[1.4]">
            New Pet Backing available for Matte & Glossy Labels!
          </p>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="box-border content-stretch flex flex-col items-start justify-start px-0 py-2 relative shadow-[0px_1px_4px_0px_rgba(12,12,13,0.1),0px_1px_4px_0px_rgba(12,12,13,0.05)] shrink-0 w-full">
        <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start overflow-clip p-[13px] relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0">
            {/* Left Side Icons */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-6">
                <MenuIcon />
              </div>
              <div className="overflow-clip relative shrink-0 size-6">
                <SearchIcon />
              </div>
            </div>

            {/* Logo */}
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-[49.111px]">
              <div 
                className="aspect-[1728/1128] bg-center bg-cover bg-no-repeat shrink-0 w-full"
                style={{ backgroundImage: `url('${imgImage0011}')` }}
              />
            </div>

            {/* Right Side Icons */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-6">
                <ShoppingCartIcon />
              </div>
              <div className="overflow-clip relative shrink-0 size-6">
                <UserIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-center overflow-clip p-[13px] relative shrink-0 w-full">
        <div className="[flex-flow:wrap] basis-0 box-border content-center flex gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative rounded-lg shrink-0">
            <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">Stickers</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative rounded-lg shrink-0">
            <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">Labels</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-[8px] relative rounded-lg shrink-0">
            <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">Temporary Tattoos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Hero Section component
function HeroSection() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start relative shrink-0 w-full">
      {/* Hero Image */}
      <div 
        className="bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-row items-center justify-start p-0 relative shrink-0 w-full h-[317px]"
        style={{
          backgroundImage: `url('${imgGenerateAnImageOfAHandHoldingAnArrayOfStickersFannedOutLikeCardsWithFreshCoolImagesAndTypographiesMakeItOnAWhiteBackground}')`,
        }}
      />

      {/* Hero Content */}
      <div className="box-border content-stretch flex flex-col items-center justify-center p-6 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
          {/* Headlines */}
          <div className="box-border content-stretch flex flex-col gap-2 items-end justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-left w-full">
            <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-1.44px] w-full">
              <p className="block leading-none">Custom Stickers & Labels</p>
            </div>
            <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
              <p className="block leading-[1.2]">
                Expert support. <br />
                Satisfaction guaranteed.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full">
            <Button label="Shop Labels" variant="Primary" />
            <Button label="Shop Stickers" variant="Secondary" />
          </div>

          {/* Trustpilot Rating */}
          <div className="box-border content-stretch flex flex-row gap-[13px] items-center justify-center p-0 relative shrink-0 w-full">
            <div className="font-['Roboto:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[12px] text-left text-nowrap">
              <p className="block leading-[26px] whitespace-pre">Excellent</p>
            </div>
            <Stars />
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Advantages component
function ProductAdvantages() {
  const advantages = [
    {
      icon: imgKey1,
      title: "Superior Service",
      subtitle: "Our customers love us"
    },
    {
      icon: imgKey2,
      title: "Simple Customization", 
      subtitle: "Make your stickers online"
    },
    {
      icon: imgKey3,
      title: "Exceptional Quality",
      subtitle: "Don't worry, our stickers last"
    }
  ];

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-6 items-start justify-center px-0 py-8 relative shrink-0 w-full">
      {advantages.map((advantage, index) => (
        <div key={index} className="box-border content-stretch flex flex-row gap-6 items-center justify-start min-w-60 p-0 relative shrink-0 w-full">
          <div 
            className="bg-center bg-contain bg-no-repeat h-[50px] shrink-0 w-[57.776px]"
            style={{ backgroundImage: `url('${advantage.icon}')` }}
          />
          <div className="basis-0 box-border content-stretch flex flex-col gap-6 grow items-start justify-start min-h-px min-w-40 p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] p-0 relative shrink-0 text-left w-full">
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold relative shrink-0 text-[#383839] text-[24px] tracking-[-0.48px] w-full">
                <p className="block leading-[1.2]">{advantage.title}</p>
              </div>
              <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal relative shrink-0 text-[#8a8c8e] text-[16px] w-full">
                <p className="block leading-[1.4]">{advantage.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Collection Cards Section
function CollectionCards() {
  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
      {/* Cannabis Collection */}
      <div 
        className="aspect-[804/804] bg-[#0000004d] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] box-border content-stretch flex flex-col gap-4 items-start justify-start min-h-60 min-w-60 p-0 relative shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-full"
        style={{
          backgroundImage: `url('${imgPhotoOfATableFullOfJarsForCandiesAndCbdBudsProductsWithFunQuirkyLabelsLikeSourAlienDieselAndBlueberryKushShowingColorfulCartoonyAnimalsAndAliensAndFruit}')`,
        }}
      >
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end px-6 py-8 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[48px] text-center tracking-[-0.96px]">
              <p className="block leading-[1.2]">Cannabis Collection</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[32px] text-center">
              <p className="block leading-[1.2]">
                We've been helping the Colorado cannabis industry
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Brewery Collection */}
      <div 
        className="aspect-[528/528] bg-[#0000004d] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] box-border content-stretch flex flex-col gap-4 items-start justify-start min-h-60 min-w-60 p-0 relative shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-full"
        style={{ backgroundImage: `url('${imgProductInfoCardLgMd}')` }}
      >
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end px-6 py-8 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[48px] text-center tracking-[-0.96px]">
              <p className="block leading-[1.2]">Brewery Collection</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[32px] text-center">
              <p className="block leading-[1.2]">Try our matte labels. They're super tough, even in a cooler full of ice.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cafe Collection */}
      <div 
        className="bg-[#0000004d] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] box-border content-stretch flex flex-col gap-4 items-center justify-start min-h-[108.382px] min-w-60 p-0 relative shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-full"
        style={{ backgroundImage: `url('${imgRow}')` }}
      >
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-end px-6 py-8 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Bold',_sans-serif] font-bold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[48px] text-center tracking-[-0.96px]">
              <p className="block leading-[1.2]">Cafe Collection</p>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
            <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#f3f3f3] text-[32px] text-center">
              <p className="block leading-[1.2]">
                Let your coffee and cafe brand breathe with custom stickers and labels made specifically for your industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// VIP Treatment Section
function VIPTreatmentSection() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-12 items-center justify-center px-0 py-12 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-center w-full">
        <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          <p className="block leading-[1.2]">Get the VIP treatment</p>
        </div>
        <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal relative shrink-0 text-[32px] w-full">
          <p className="block leading-[1.2]">
            Already have an account or need to login to an existing one?
          </p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full">
        <Button label="Create an Account" variant="Primary" />
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip p-[8px] relative shrink-0 w-full">
          <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
            <p className="block leading-none whitespace-pre">Login</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Material Explorer Section
function MaterialExplorerSection() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start px-0 py-8 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-center leading-[0] px-4 py-3 relative shrink-0 text-[#000000] text-center w-full">
        <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          <p className="block leading-[1.2]">Explore our Materials</p>
        </div>
        <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
          <p className="block leading-[1.2]">Use the material explorer to find your look and feel.</p>
        </div>
      </div>
      
      {/* Material Selector */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col items-center justify-start overflow-clip p-[8px] relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-center justify-center px-0 py-4 relative shrink-0 w-full">
          {/* Tabs */}
          <div className="box-border content-stretch flex flex-row items-start justify-start overflow-clip p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row items-center justify-center px-3 py-1 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 border-b border-[#303030]">
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#383839] text-[24px] text-left text-nowrap tracking-[-0.48px]">
                <p className="block leading-[1.2] whitespace-pre">Stickers</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row items-center justify-center px-3 py-1 relative rounded-tl-[4px] rounded-tr-[4px] shrink-0 border-b border-[#b2b2b2]">
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#767676] text-[24px] text-left text-nowrap tracking-[-0.48px]">
                <p className="block leading-[1.2] whitespace-pre">Labels</p>
              </div>
            </div>
          </div>
          
          {/* Material Options Row 1 */}
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-center justify-center min-h-px min-w-px overflow-clip p-0 relative shrink-0">
              <div 
                className="bg-[#00000033] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] h-[96.84px] opacity-60 relative rounded-[9999px] shrink-0 w-[96.199px] border-4 border-[#b2b2b2]"
                style={{
                  backgroundImage: `url('${imgMakeATextureLikeAHologramOnABlackBackground}')`,
                }}
              />
              <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] min-w-full relative shrink-0 text-[#9d9fa1] text-[20px] text-center">
                <p className="block leading-[1.2]">Glow in The Dark</p>
              </div>
            </div>
            <div className="flex flex-row items-center self-stretch">
              <div className="box-border content-stretch flex flex-col gap-2 h-full items-center justify-center overflow-clip p-0 relative shrink-0 w-[160.5px]">
                <div 
                  className="bg-[#00000033] bg-[position:0%_0%,_50%_50%] bg-size-[auto,contain] opacity-60 relative rounded-[9999px] shrink-0 size-[97px] border-4 border-[#b2b2b2]"
                  style={{
                    backgroundImage: `url('${imgMakeATextureLikeAHologramOnABlackBackground1}')`,
                  }}
                />
                <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#9d9fa1] text-[20px] text-left text-nowrap">
                  <p className="block leading-[1.2] whitespace-pre">Glitter</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Material Options Row 2 */}
          <div className="box-border content-stretch flex flex-row items-center justify-center p-0 relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-center justify-center min-h-px min-w-px overflow-clip p-0 relative shrink-0">
              <div 
                className="bg-[#00000033] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] relative rounded-[9999px] shrink-0 size-[97px] border-4 border-[#b2b2b2]"
                style={{
                  backgroundImage: `url('${imgMakeATextureLikeAHologramOnABlackBackground2}')`,
                }}
              />
              <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#383839] text-[20px] text-left text-nowrap">
                <p className="block leading-[1.2] whitespace-pre">Holographic</p>
              </div>
            </div>
            <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
              <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow h-full items-center justify-center min-h-px min-w-px overflow-clip p-0 relative shrink-0">
                <div 
                  className="bg-[#00000033] bg-[position:0%_0%,_50%_50%] bg-size-[auto,cover] opacity-60 relative rounded-[9999px] shrink-0 size-[97px] border-4 border-[#b2b2b2]"
                  style={{
                    backgroundImage: `url('${imgMakeATextureLikeAHologramOnABlackBackground3}')`,
                  }}
                />
                <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#9d9fa1] text-[20px] text-left text-nowrap">
                  <p className="block leading-[1.2] whitespace-pre">Clear</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Material Image Container */}
        <div 
          className="aspect-[720/720] bg-center bg-cover bg-no-repeat box-border content-stretch flex flex-col items-center justify-end overflow-clip p-[6px] relative shrink-0 w-full"
          style={{ backgroundImage: `url('${imgImageContainer}')` }}
        >
          <div className="basis-0 box-border content-stretch flex flex-col grow items-end justify-start min-h-px min-w-px p-0 relative shrink-0 w-full">
            <div className="bg-[rgba(255,255,255,0.8)] box-border content-stretch flex flex-col gap-2 items-center justify-center p-[8px] relative rounded-lg shrink-0 w-[147px] border border-[#bdbec0] shadow-[0px_4px_4px_-1px_rgba(12,12,13,0.1),0px_4px_4px_-1px_rgba(12,12,13,0.05)]">
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[11.21%_16.65%_8.3%_16.69%]">
                      <div className="absolute inset-[-6.21%_-7.5%]">
                        <img alt="droplet" className="block max-w-none size-full" src={img2} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#383839] text-[15px] text-left">
                    <p className="block leading-[1.4]">Water-resistant</p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[4.167%]">
                      <div className="absolute inset-[-5.45%]">
                        <img alt="sun" className="block max-w-none size-full" src={img3} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#383839] text-[15px] text-left">
                    <p className="block leading-[1.4]">UV Resistant</p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center p-0 relative shrink-0">
                  <div className="overflow-clip relative shrink-0 size-4">
                    <div className="absolute inset-[8.33%_16.67%]">
                      <div className="absolute inset-[-6%_-7.5%]">
                        <img alt="shield" className="block max-w-none size-full" src={img4} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-center min-h-px min-w-px p-0 relative shrink-0">
                  <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#383839] text-[15px] text-left">
                    <p className="block leading-[1.4]">Scratch-Resistant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
            <Button label="Order Glow in The Dark Stickers" variant="Primary" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Brands Trust Section
function BrandsTrustSection() {
  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-12 items-center justify-center px-0 py-8 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start p-0 relative shrink-0 w-full">
        <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold leading-[0] relative shrink-0 text-[#000000] text-[48px] text-center tracking-[-0.96px] w-full">
          <p className="block leading-[1.2]">Brands that Trust Us</p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
        {/* Brand Logo Grid */}
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="box-border content-stretch flex flex-row gap-6 items-start justify-center p-6 relative shrink-0 w-full">
            <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
              <div className="bg-[#d9d9d9] h-[81.019px] shrink-0 w-full" />
            </div>
            <div className="basis-0 bg-[#d9d9d9] grow h-[81.019px] min-h-px min-w-px shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}

// Human Treatment Section
function HumanTreatmentSection() {
  return (
    <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center px-0 py-8 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-3 items-center justify-start leading-[0] p-0 relative shrink-0 text-[#000000] text-center w-full">
        <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          <p className="block leading-[1.2]">
            In a world of AI we treat you like a human.
          </p>
        </div>
        <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal relative shrink-0 text-[20px] w-full">
          <p className="block leading-[1.2]">
            Sticker giant has some of the best customer service in the
            game. Ask trust pilot, our customers love us.
          </p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0">
        <TrustpilotStarter tooltip={false} />
      </div>
      <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center p-0 relative shrink-0 w-full">
        <Button label="20% off Custom Stickers" variant="Primary" />
        <Button label="20% off Custom Labels" variant="Secondary" />
      </div>
      
      {/* Customer Testimonials */}
      <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-12 items-start justify-start p-[24px] relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0">
          <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold leading-[0] relative shrink-0 text-[#383839] text-[24px] text-left tracking-[-0.48px] w-full">
            <p className="block leading-[1.2]">Our Customers Love Us</p>
          </div>
        </div>
        <div className="[flex-flow:wrap] box-border content-start flex gap-6 h-[1002px] items-start justify-start p-0 relative shrink-0 w-full">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="basis-0 bg-[#ffffff] box-border content-stretch flex flex-col gap-2 grow items-start justify-center min-h-px min-w-[300px] p-[20px] relative shadow-[0px_2px_4px_0px_rgba(7,4,146,0.1),0px_24px_60px_0px_rgba(6,47,125,0.05),0px_12px_24px_0px_rgba(27,59,119,0.05)] shrink-0">
              <TrustpilotReviewCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Blog Articles Section
function BlogArticlesSection() {
  const articles = [
    {
      image: img5,
      title: "Blog Article #1",
      description: "For a sleek, modern look, Custom Matte Labels offer a smooth, non-glare finish that."
    },
    {
      image: img6,
      title: "Blog Article #2", 
      description: "Try our matte labels. They're super tough, even in a cooler full of ice."
    },
    {
      image: img7,
      title: "Blog Article #3",
      description: "Try our matte labels. They're super tough, even in a cooler full of ice."
    }
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-6 items-start justify-end px-0 py-8 relative shrink-0 w-full">
      {articles.map((article, index) => (
        <div key={index} className="bg-[#ffffff] box-border content-stretch flex flex-col gap-4 items-center justify-start min-h-[336px] min-w-60 p-[16px] relative shadow-[0px_16px_32px_-4px_rgba(12,12,13,0.1),0px_4px_4px_-4px_rgba(12,12,13,0.05)] shrink-0 w-full">
          <div 
            className="aspect-[208/208] bg-center bg-cover bg-no-repeat shrink-0 w-full"
            style={{ backgroundImage: `url('${article.image}')` }}
          />
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
              <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#383839] text-[32px] text-left">
                <p className="block leading-[1.2]">{article.title}</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row items-start justify-start p-0 relative shrink-0 w-full">
              <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#8a8c8e] text-[15px] text-left">
                <p className="block leading-[1.4]">{article.description}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    "Are Die Cut Stickers the Same as Labels?",
    "How Fast Can I Get My Die Cut Stickers?",
    "What Materials Are Used for Die Cut Stickers?",
    "What Are the Benefits of Die Cut Stickers?",
    "How Do I Order Custom Die Cut Stickers from StickerGiant?"
  ];

  return (
    <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start leading-[0] p-0 relative shrink-0 text-[#383839] text-left w-full">
        <div className="font-['Roboto_Condensed:Bold',_sans-serif] font-bold relative shrink-0 text-[48px] tracking-[-0.96px] w-full">
          <p className="block leading-[1.2]">Curious Minds Want to Know</p>
        </div>
        <div className="flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[16px] w-full">
          <p className="block leading-[1.4]">
            Raise a glass to branding that sticks. StickerGiant helps breweries bring their personality to life with custom stickers and labels built to last—from cans and bottles to company swag and merchandise. Whether you're preparing for a busy festival season or need a fresh batch of custom bottle labels for your latest release, we've got you covered. Discover how brewery stickers and labels can elevate your brand!
          </p>
        </div>
      </div>
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#ffffff] box-border content-stretch flex flex-row items-start justify-start pb-8 pt-4 px-4 relative shrink-0 w-full border-b border-[#bdbec0]">
              <div className="basis-0 box-border content-stretch flex flex-row gap-2 grow items-center justify-start min-h-px min-w-px p-0 relative shrink-0">
                <div className="basis-0 font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#383839] text-[24px] text-left tracking-[-0.48px]">
                  <p className="block leading-[1.2]">{faq}</p>
                </div>
                <div className="overflow-clip relative shrink-0 size-5">
                  <ChevronDown size="20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Footer component
function Footer() {
  return (
    <div className="bg-[#1e1e1e] box-border content-stretch flex flex-col items-start justify-start overflow-clip pb-10 pt-0 px-5 relative shrink-0 w-full">
      {/* Satisfaction Guaranteed Logo */}
      <div className="box-border content-stretch flex flex-col items-center justify-center pb-0 pt-4 px-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col h-[94px] items-center justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-row items-start justify-start pb-0 pt-0.5 px-0 relative shrink-0">
            <div 
              className="bg-center bg-cover bg-no-repeat h-[91.814px] max-w-[250px] shrink-0 w-[100px]"
              style={{
                backgroundImage: `url('${imgSatisfactionGuaranteed150PxPng}')`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col gap-[5px] items-center justify-center p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col h-[98px] items-start justify-start p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start pb-[20.705px] pt-[19.25px] px-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.705px] p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Roboto_Condensed:Bold',_sans-serif] font-bold justify-center leading-[0] max-h-[35.1px] relative shrink-0 text-[#fafafb] text-[26px] text-left w-full">
                      <p className="block leading-[35px]">Get 20% Off Your First Order!</p>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-start mb-[-0.705px] p-0 relative shrink-0 w-full">
                    <div className="flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal justify-center leading-[21.6px] relative shrink-0 text-[#fafafb] text-[16px] text-left w-full">
                      <p className="block mb-0">Sign up for our email list and be the first to learn</p>
                      <p className="block">about deals, new product drops, and more.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Email Signup Form */}
              <div className="box-border content-stretch flex flex-col h-[198px] items-start justify-start px-0 py-2.5 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-center justify-start px-0 py-2.5 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col h-[65px] items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-col items-center justify-start p-0 relative shrink-0 w-full">
                        <div className="[flex-flow:wrap] box-border content-start flex gap-0 items-start justify-center p-0 relative shrink-0 w-full">
                          <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[15px] px-0 relative shrink-0 w-[176.8px]">
                            <div className="box-border content-stretch flex flex-row h-[50px] items-start justify-start p-0 relative shrink-0 w-full">
                              <div className="bg-[#fafafb] box-border content-stretch flex flex-row h-full items-center justify-start pb-[14.3px] pt-[14.29px] px-[11.2px] relative shrink-0">
                                <div className="relative shrink-0 size-4">
                                  <img alt="email icon" className="block max-w-none size-full" src={imgSvg} />
                                </div>
                              </div>
                              <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                                <div className="bg-[#fafafb] box-border content-stretch flex flex-row h-[50px] items-start justify-center overflow-clip pl-0 pr-[12.79px] py-[12.8px] relative shrink-0 w-full">
                                  <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px overflow-clip p-0 relative shrink-0">
                                    <div className="flex flex-col font-['Roboto_Condensed:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#bababb] text-[16px] text-left w-full">
                                      <p className="block leading-[normal]">email</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="box-border content-stretch flex flex-col items-start justify-start pb-0 pt-[15px] px-0 relative shrink-0 w-[113.2px]">
                            <div className="bg-[#c53029] box-border content-stretch flex flex-row items-center justify-center max-w-[113.2px] px-[17px] py-[15px] relative shrink-0 w-full">
                              <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-center max-w-[113.2px] min-h-px min-w-px p-0 relative shrink-0">
                                <div className="box-border content-stretch flex flex-col items-center justify-start max-w-[79.2px] p-0 relative shrink-0">
                                  <div className="box-border content-stretch flex flex-col items-center justify-start max-w-[49.2px] overflow-clip p-0 relative shrink-0">
                                    <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[14.4px] text-center text-nowrap tracking-[0.5px] uppercase">
                                      <p className="block leading-[18px] whitespace-pre">Submit</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="box-border content-stretch flex flex-col h-5 items-start justify-start pl-2.5 pr-0 py-0 relative shrink-0 w-[30px]">
                                  <div className="relative shrink-0 size-5">
                                    <img alt="submit arrow" className="block max-w-none size-full" src={imgSvg1} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Privacy Policy Checkbox */}
                    <div className="box-border content-stretch flex flex-col h-[92.48px] items-start justify-start px-0 py-5 relative shrink-0 w-full">
                      <div className="box-border content-stretch flex flex-row-reverse items-start justify-start p-0 relative rounded-[5px] shrink-0 w-full">
                        <div className="bg-[#ffffff] order-2 relative rounded-[5px] shrink-0 size-[18px] border border-[#505051]" />
                        <div className="box-border content-stretch flex flex-row items-center justify-start order-1 pl-2.5 pr-0 py-0 relative self-stretch shrink-0">
                          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
                            <div className="h-[52.48px] relative shrink-0 w-[262px]">
                              <div className="absolute flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-0 text-[#fafafb] text-[13px] text-left top-[8.5px] translate-y-[-50%] w-[157.052px]">
                                <p className="block leading-[17.5px]">By signing up you agree to our</p>
                              </div>
                              <div className="absolute box-border content-stretch flex flex-row items-start justify-start left-[156.73px] p-0 top-[-0.5px]">
                                <div className="flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#b4b4d0] text-[13px] text-left text-nowrap">
                                  <p className="block leading-[17.5px] whitespace-pre">Privacy Policy</p>
                                </div>
                              </div>
                              <div className="absolute flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal h-[18px] justify-center leading-[0] left-[227.8px] text-[#fafafb] text-[13px] text-left top-[8.5px] translate-y-[-50%] w-[22.221px]">
                                <p className="block leading-[17.5px]"> and</p>
                              </div>
                              <div className="absolute flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal h-[35px] justify-center leading-[17.5px] left-0 text-[#fafafb] text-[13px] text-left top-[34.73px] translate-y-[-50%] w-[260.457px]">
                                <p className="block mb-0">receiving a few marketing emails a month. You can</p>
                                <p className="block">unsubscribe at any time.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links and Logo */}
      <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
        {/* Footer Links Sections */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0">
              {/* Footer Link Categories */}
              {[
                {
                  title: "Sticker Types",
                  links: ["Clear Stickers", "Glitter Stickers", "Glow in the Dark Stickers", "Holographic Stickers", "Kiss Cut Stickers", "Kiss Cut Holographic Stickers"]
                },
                {
                  title: "Label Types", 
                  links: ["Clear Labels", "Glossy Labels", "Glossy Paper Labels", "Holographic Labels", "Kraft Paper Labels", "Matte Labels", "Matte Recycled Paper Labels"]
                },
                {
                  title: "Sticker Shapes",
                  links: ["Bumper Stickers", "Circle Stickers", "Custom Shape Stickers", "Oval Stickers", "Rectangle Stickers", "Square Stickers"]
                },
                {
                  title: "Industries & Uses",
                  links: ["Logo Stickers", "Bottle Labels", "Breweries", "CBD & Cannabis Labels", "Coffee Shops & Roasters", "Makers & DIY", "Outdoor Recreation", "Quick Rolled Stickers", "To-Go Food Labels"]
                },
                {
                  title: "About StickerGiant",
                  links: ["About Us", "Podcast", "Sustainability", "Pick up in Longmont, CO", "Careers"]
                },
                {
                  title: "Customer Service",
                  links: ["Contact Us", "Order Status", "Shipping and Delivery", "Returns"]
                },
                {
                  title: "Resources",
                  links: ["Coupons", "Help Center", "Artwork Setup", "Printing Process", "Sample Packs"]
                }
              ].map((section, index) => (
                <div key={index} className="box-border content-stretch flex flex-col items-start justify-start pb-4 pt-0 px-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Roboto_Condensed:Bold',_sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left w-full">
                        <p className="block leading-[17.6px]">{section.title}</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-0 px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col gap-[3.4px] items-start justify-start pb-[1.39px] pt-0.5 px-0 relative shrink-0 w-full">
                      {section.links.map((link, linkIndex) => (
                        <div key={linkIndex} className="box-border content-stretch flex flex-row items-start justify-start opacity-[0.795] pb-[3px] pt-0.5 px-0 relative shrink-0">
                          <div className="flex flex-col font-['Roboto_Condensed:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f0f0f0] text-[14px] text-left text-nowrap">
                            <p className="block leading-[14px] whitespace-pre">{link}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Every Sticker Has a Story Logo */}
        <div className="box-border content-stretch flex flex-col items-start justify-center p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col h-[207.13px] items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start pb-5 pt-[50px] px-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-start justify-start pl-[60px] pr-[50px] py-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-row items-start justify-start pb-[5.5px] pt-0.5 px-0 relative shrink-0 w-full">
                  <div 
                    className="bg-center bg-cover bg-no-repeat h-[70.63px] max-w-[350px] shrink-0 w-60"
                    style={{
                      backgroundImage: `url('${imgEveryStickerHasAStory350PxPng}')`,
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Social Media Icons */}
            <div className="box-border content-stretch flex flex-col items-center justify-center pb-0 pt-5 px-0 relative shrink-0 w-full">
              <div className="[flex-flow:wrap] box-border content-start flex gap-2.5 items-start justify-center p-0 relative shrink-0 w-full">
                {[imgIcon5, imgIcon6, imgIcon7, imgIcon8, imgIcon9, imgIcon10].map((icon, index) => (
                  <div key={index} className="box-border content-stretch flex flex-col h-[39px] items-start justify-start pb-[5px] pl-0 pr-px pt-0 relative shrink-0 w-[35px]">
                    <div className="bg-[#cfcccd] box-border content-stretch flex flex-row items-center justify-center opacity-[0.795] overflow-clip p-[10px] relative rounded-[50px] shrink-0 size-[34px]">
                      <div className="basis-0 box-border content-stretch flex flex-col grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0">
                        <div className="flex items-center justify-center relative shrink-0">
                          <div className="flex-none scale-y-[-100%]">
                            <div className="relative size-3.5">
                              <img alt="social icon" className="block max-w-none size-full" src={icon} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
          <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
            <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col items-center justify-start pb-[25.5px] pt-5 px-0 relative shrink-0 w-full">
                <div className="h-px relative shrink-0 w-full border-t border-[#cecece]" />
              </div>
            </div>
            <div className="box-border content-stretch flex flex-col items-start justify-center pb-[0.75px] pt-0 px-0 relative shrink-0 w-full">
              <div className="box-border content-stretch flex flex-col h-[98.8px] items-start justify-center mb-[-0.75px] pl-[50px] pr-0 py-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col h-[98.8px] items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-[22.4px] items-start justify-start pb-[22.4px] pt-0 px-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-col items-start justify-start opacity-[0.795] pb-[3px] pt-[5px] px-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Roboto_Condensed:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f0f0f0] text-[14px] text-left w-full">
                        <p className="block leading-[14px]">Terms and Conditions</p>
                      </div>
                    </div>
                    <div className="box-border content-stretch flex flex-col items-start justify-start opacity-[0.795] pb-[3px] pt-[5px] px-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-['Roboto_Condensed:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#f0f0f0] text-[14px] text-left w-full">
                        <p className="block leading-[14px]">Privacy Policy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex flex-col h-[33.15px] items-start justify-start mb-[-0.75px] p-0 relative shrink-0 w-full">
                <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                  <div className="flex flex-col font-['Roboto_Condensed:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#a8a8a8] text-[14px] text-left w-full">
                    <p className="block leading-[22.4px]">
                      Copyright © 2025 StickerGiant.com Inc. All rights reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Homepage component
export default function StickerGiantHomepage() {
  return (
    <div className="bg-[#ffffff] relative min-h-screen w-full">
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content - Add top padding to account for fixed navigation */}
      <div className="box-border content-stretch flex flex-col gap-[37px] items-start justify-start p-0 relative w-full pt-[216px]">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Mouse Enter Content */}
        <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start px-6 py-2 relative shrink-0 w-full">
          <ProductAdvantages />
          <CollectionCards />
          <VIPTreatmentSection />
          <MaterialExplorerSection />
          <BrandsTrustSection />
          <HumanTreatmentSection />
          <BlogArticlesSection />
          <FAQSection />
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}