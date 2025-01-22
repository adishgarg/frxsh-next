import { RetroGrid } from "./components/grid/grid";
import { TextGenerateEffect } from "./components/textgen/text";
import { TypewriterEffect } from "./components/typewriter/typewriter";
import { ParallaxScroll } from "./components/parallax/effect";
import { Products } from "./components/products";

export default function Home() {
  const images = [
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/customize.webp",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/women/4.jpg",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/jean/jean jacket.webp",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/FamilyTee.webp",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/T-shirt/whiskyHelpsTshirt.webp",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/1.jpg",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/5.webp",
    "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/sneaker/7.webp",
     "https://w16manik.blr1.cdn.digitaloceanspaces.com/assets/jean/jean jacket.webp",
  ]

  const words = [
    {
      text: "Helping",
    },{
      text: "Young",
    },{
      text: "Entrepreneurs"
    }
    ,{
      text: "Grow!"
    },
  ]
  
  return (
   <>
   <div className="h-[100vh]">
    
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden mt-9">
      <span className="pointer-events-none z-10 text-center text-[10vw] font-bold leading-none  text-white">
        Frxsh
      </span>
      <TextGenerateEffect words="For The Students by the Students" className="text-2xl"/>
      <RetroGrid  angle={65}
        opacity={0.28} />
    </div>
    </div>
    <div className="flex items-center justify-center text-9xl text-white flex-col gap-9">
      <TypewriterEffect words={words}/>
      <ParallaxScroll images={images} className="no-scrollbar"/>
    </div>
    <Products/>
   </>
  );
}
