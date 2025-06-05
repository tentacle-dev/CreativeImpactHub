import Image from "next/image"

import { Lobster } from "next/font/google"


const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'], // or just "400"
  display: 'swap',        
});

export default function Hero(){
    return(
        <div className={`flex justify-around lg:py-64 lg:px-12 hero  lg:h-[90vh] ${lobster.className}`}>
            <div className="lg:text-8xl ">
                Real People. <br />
                Real Solutions.<br /> 
                Right Now.
            </div>
            <div className="self-center text-green-500 ">
                <Image 
                src="/techsupport.svg"
                alt="vercel"
                width={100}
                height={100}
                className="svg-icon rounded-xl"
                />
            </div>
        </div>
    )
}