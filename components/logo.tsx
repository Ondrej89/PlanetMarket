import Image from "next/image";
import PlanetMarket from "@/public/img/global-market.png"

export const Logo = () => {
  return (
    <div className="flex flex-row items-center gap">
    
    <div><Image src={PlanetMarket} width={35} height={35} alt="logo" className="mr-3 "/></div>
    <div>
    <p className="scroll-m-20 text-2xl md:text-3xl font-semibold tracking-tight transition-colors first:mt-0">
     Planet Market
    </p>
    </div>
    </div>
   

  );
};
