import React, { useState, useEffect } from 'react';

// Image constants - using your actual Figma images hosted locally
// These are the original images from your Figma design, now properly hosted
const imgImage0011 = "/images/brand/stickergiant-logo.png"; // StickerGiant logo from Figma
const imgGenerateAnImageOfAHandHoldingAnArrayOfStickersFannedOutLikeCardsWithFreshCoolImagesAndTypographiesMakeItOnAWhiteBackground = "/images/hero/hand-holding-stickers.png"; // Hero image from Figma
const imgKey1 = "/images/features/superior-service.png"; // Superior Service icon from Figma
const imgKey2 = "/images/features/simple-customization.png"; // Simple Customization icon from Figma
const imgKey3 = "/images/features/exceptional-quality.png"; // Exceptional Quality icon from Figma
const imgPhotoOfATableFullOfJarsForCandiesAndCbdBudsProductsWithFunQuirkyLabelsLikeSourAlienDieselAndBlueberryKushShowingColorfulCartoonyAnimalsAndAliensAndFruit = "/images/collections/cannabis-collection.png"; // Cannabis collection from Figma
const imgProductInfoCardLgMd = "/images/collections/brewery-collection.png"; // Brewery collection from Figma
const imgRow = "/images/collections/cafe-collection.png"; // Cafe collection from Figma
const imgMakeATextureLikeAHologramOnABlackBackground = "/images/materials/glow-in-dark.png"; // Glow in dark material from Figma
const imgMakeATextureLikeAHologramOnABlackBackground1 = "/images/materials/glitter.png"; // Glitter material from Figma
const imgMakeATextureLikeAHologramOnABlackBackground2 = "/images/materials/holographic.png"; // Holographic material from Figma
const imgMakeATextureLikeAHologramOnABlackBackground3 = "/images/materials/clear.png"; // Clear material from Figma
const imgImageContainer = "/images/materials/showcase-container.png"; // Material showcase container from Figma
const img5 = "/images/blog/article-1.png"; // Blog article 1 from Figma
const img6 = "/images/blog/article-2.png"; // Blog article 2 from Figma  
const img7 = "/images/blog/article-3.png"; // Blog article 3 from Figma
const imgSatisfactionGuaranteed150PxPng = "/images/brand/satisfaction-guaranteed.png"; // Satisfaction guarantee badge from Figma
const imgEveryStickerHasAStory350PxPng = "/images/brand/every-sticker-story.png"; // Brand story logo from Figma
const imgHandHoldingAToGoCoffeeCupWithAMoonCityCoffeeDieCutStickerPrintedByStickerGiantAppliedToTheSide = "/images/hero/coffee-cup-sticker.png"; // Coffee cup sticker from Figma

// SVG icon constants - using your actual Figma SVG files hosted locally
const img = "/images/icons/star.svg"; // Star icon from Figma
const img1 = "/images/icons/star-large.svg"; // Star icon large from Figma
const imgShape = "/images/icons/trustpilot-logo.svg"; // Trustpilot logo from Figma
const imgPolygon1 = "/images/icons/tooltip-arrow.svg"; // Tooltip arrow from Figma
const imgOiDoubleQuoteSerifLeft = "/images/icons/quote.svg"; // Quote icon from Figma
const imgIcon = "/images/icons/chevron-down.svg"; // Chevron down from Figma
const imgIcon1 = "/images/icons/menu.svg"; // Menu icon from Figma
const imgIcon2 = "/images/icons/search.svg"; // Search icon from Figma
const imgIcon3 = "/images/icons/shopping-cart.svg"; // Shopping cart from Figma
const imgIcon4 = "/images/icons/user.svg"; // User icon from Figma
const img2 = "/images/icons/droplet.svg"; // Droplet icon from Figma
const img3 = "/images/icons/sun.svg"; // Sun icon from Figma
const img4 = "/images/icons/shield.svg"; // Shield icon from Figma
const imgSvg = "/images/icons/email.svg"; // Email icon from Figma
const imgSvg1 = "/images/icons/arrow-up.svg"; // Arrow up from Figma
const imgIcon5 = "/images/icons/twitter.svg"; // Twitter from Figma
const imgIcon6 = "/images/icons/facebook.svg"; // Facebook from Figma
const imgIcon7 = "/images/icons/instagram.svg"; // Instagram from Figma
const imgIcon8 = "/images/icons/youtube.svg"; // YouTube from Figma
const imgIcon9 = "/images/icons/discord.svg"; // Discord from Figma
const imgIcon10 = "/images/icons/linkedin.svg"; // LinkedIn from Figma
const imgVector2 = "/images/icons/arrow-shape.svg"; // Arrow shape from Figma


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
function MenuIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative size-full cursor-pointer" onClick={onClick}>
      <div className="absolute bottom-1/4 left-[12.5%] right-[12.5%] top-1/4">
        <div className="absolute inset-[-10.42%_-6.94%]">
          <img alt="menu" className="block max-w-none size-full" src={imgIcon1} />
        </div>
      </div>
    </div>
  );
}

function CloseIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative size-full cursor-pointer" onClick={onClick}>
      <div className="absolute inset-1/4">
        <div className="absolute inset-[-10.417%]">
          <img alt="close" className="block max-w-none size-full" src="/images/icons/close.svg" />
        </div>
      </div>
    </div>
  );
}

function ChevronRightIcon() {
  return (
    <div className="relative size-full">
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
        <div className="absolute inset-[-10%_-20%]">
          <img alt="chevron right" className="block max-w-none size-full" src="/images/icons/chevron-right.svg" />
        </div>
      </div>
    </div>
  );
}

function ChevronLeftIcon({ onClick }: { onClick?: () => void }) {
  return (
    <div className="relative size-full" onClick={onClick}>
      <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4">
        <div className="absolute inset-[-10%_-20%] transform rotate-180">
          <img alt="chevron left" className="block max-w-none size-full" src="/images/icons/chevron-right.svg" />
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

// Hamburger Menu Component
function HamburgerMenu({ isOpen, onClose, onAllProductsClick, onSupportClick }: { isOpen: boolean; onClose: () => void; onAllProductsClick: () => void; onSupportClick: () => void }) {
  return (
    <>
      {/* Menu Panel - Full Screen with Solid White Background */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#ffffff] z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="bg-[#fff] flex flex-row items-center justify-end overflow-clip pb-0 pt-12 px-[13px] w-full">
          <div className="flex flex-row gap-4 items-center justify-start p-0">
            <div className="overflow-clip size-6">
              <CloseIcon onClick={onClose} />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 items-start justify-start pb-0 pt-6 px-6 w-full">
          {/* Main Categories */}
          <div className="flex flex-row items-center justify-start p-0 w-full">
            <div className="flex flex-col gap-2 items-start justify-center p-0">
              <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full">
                <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal text-[#383839] text-[32px] leading-[1.2]">
                  Stickers
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full">
                <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal text-[#383839] text-[32px] leading-[1.2]">
                  Labels
                </div>
              </div>
              <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full">
                <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal text-[#383839] text-[32px] leading-[1.2]">
                  Temporary Tattoos
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full flex items-center justify-center">
            <div className="h-px w-full border-t border-[#bdbec0]" />
          </div>

          {/* Secondary Menu Items */}
          <div className="flex flex-col gap-2 items-start justify-center p-0">
            <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full cursor-pointer" onClick={onAllProductsClick}>
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold text-[#383839] text-[16px] leading-[1.4]">
                All Products
              </div>
              <div className="overflow-clip size-4">
                <ChevronRightIcon />
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full cursor-pointer" onClick={onSupportClick}>
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold text-[#383839] text-[16px] leading-[1.4]">
                Support
              </div>
              <div className="overflow-clip size-4">
                <ChevronRightIcon />
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start p-[8px] rounded-lg w-full">
              <div className="font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold text-[#383839] text-[16px] leading-[1.4]">
                Business Solutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// All Products Menu Component
function AllProductsMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Menu Panel - Full Screen with Solid White Background */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#ffffff] z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start overflow-clip pb-0 pt-12 px-[13px] relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0">
            {/* Left Side - Back Button */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-6">
                <ChevronLeftIcon onClick={onClose} />
              </div>
            </div>
            {/* Center - Title */}
            <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-center text-nowrap">
              <p className="block leading-[1.2] whitespace-pre">All Products</p>
            </div>
            {/* Right Side - Empty for spacing */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 shrink-0" />
          </div>
        </div>

        {/* Content */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px pb-0 pt-6 px-6 relative shrink-0 w-full">
          {/* Navigation Pills List */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Die Cut Stickers</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Sticker Rolls</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Sticker Sheets</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Shape Stickers</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Laminated Labels</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Paper Labels</p>
              </div>
            </div>
          </div>
          <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
            <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
              <p className="block leading-[1.4] whitespace-pre">All Stickers & Labels</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Support Menu Component
function SupportMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <>
      {/* Menu Panel - Full Screen with Solid White Background */}
      <div 
        className={`fixed inset-0 w-screen h-screen bg-[#ffffff] z-[9999] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Header */}
        <div className="bg-[#ffffff] box-border content-stretch flex flex-row items-center justify-start overflow-clip pb-0 pt-12 px-[13px] relative shrink-0 w-full">
          <div className="basis-0 box-border content-stretch flex flex-row grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0">
            {/* Left Side - Back Button */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
              <div className="overflow-clip relative shrink-0 size-6">
                <ChevronLeftIcon onClick={onClose} />
              </div>
            </div>
            {/* Center - Title */}
            <div className="font-['Roboto_Condensed:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#000000] text-[20px] text-center text-nowrap">
              <p className="block leading-[1.2] whitespace-pre">Support</p>
            </div>
            {/* Right Side - Empty for spacing */}
            <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 shrink-0" />
          </div>
        </div>

        {/* Content */}
        <div className="basis-0 box-border content-stretch flex flex-col gap-2 grow items-start justify-start min-h-px min-w-px pb-0 pt-6 px-6 relative shrink-0 w-full">
          {/* Navigation Pills List */}
          <div className="box-border content-stretch flex flex-col gap-2 items-start justify-center p-0 relative shrink-0">
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Help Center</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Contact</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Artwork Setup</p>
              </div>
            </div>
            <div className="box-border content-stretch flex flex-row gap-2 items-center justify-start p-[8px] relative rounded-lg shrink-0 w-full">
              <div className="flex flex-col font-['Roboto_Condensed:SemiBold',_sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#383839] text-[16px] text-left text-nowrap">
                <p className="block leading-[1.4] whitespace-pre">Order status</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Navigation component with scroll-based animation
function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAllProductsOpen, setIsAllProductsOpen] = useState(false);
  const [isSupportOpen, setIsSupportOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleAllProductsOpen = () => {
    setIsAllProductsOpen(true);
  };

  const handleAllProductsClose = () => {
    setIsAllProductsOpen(false);
  };

  const handleSupportOpen = () => {
    setIsSupportOpen(true);
  };

  const handleSupportClose = () => {
    setIsSupportOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen || isAllProductsOpen || isSupportOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen, isAllProductsOpen, isSupportOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen) {
        handleMenuClose();
      }
      if (event.key === 'Escape' && isAllProductsOpen) {
        handleAllProductsClose();
      }
      if (event.key === 'Escape' && isSupportOpen) {
        handleSupportClose();
      }
    };

    if (isMenuOpen || isAllProductsOpen || isSupportOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, isAllProductsOpen, isSupportOpen]);

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
              <div className="bg-[#4d4d4f] box-border content-stretch flex flex-row gap-2 items-center justify-center overflow-clip pb-2 pt-4 px-6 relative shrink-0 w-full">
        <div className="basis-0 font-['Roboto_Condensed:Regular',_sans-serif] font-normal grow leading-[0] min-h-px min-w-px relative shrink-0 text-[#ffffff] text-[16px] text-center">
          <p className="block leading-[1.4]">
            New Pet Backing available for Labels!
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
                <MenuIcon onClick={handleMenuOpen} />
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

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={isMenuOpen} onClose={handleMenuClose} onAllProductsClick={handleAllProductsOpen} onSupportClick={handleSupportOpen} />
      
      {/* All Products Menu */}
      <AllProductsMenu isOpen={isAllProductsOpen} onClose={handleAllProductsClose} />
      
      {/* Support Menu */}
      <SupportMenu isOpen={isSupportOpen} onClose={handleSupportClose} />
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
              <div className="box-border content-stretch flex flex-col gap-[37px] items-start justify-start p-0 relative w-full pt-[153px]">
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