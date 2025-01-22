import { RetroGrid } from "./components/grid/grid";
import { TextGenerateEffect } from "./components/textgen/text";

export default function Home() {

  
  return (
   <>
   <div className="h-[100vh]">
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden mt-9">
      <span className="pointer-events-none z-10 text-center text-9xl font-bold leading-none  text-white">
        Frxsh
      </span>
      <TextGenerateEffect words="For The Students by the Students"/>
      <RetroGrid  angle={65}
        opacity={0.28} />
    </div>
    </div>
   </>
  );
}
