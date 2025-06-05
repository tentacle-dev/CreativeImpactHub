import Image from "next/image"

import { Lobster } from "next/font/google"


const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'], // or just "400"
  display: 'swap',        
});

export default function Hero(){
    return(
        <div className={`flex flex-col md:flex-row justify-around items-center text-center md:text-left lg:py-64 lg:px-12 hero md:h-[70vh] lg:h-[90vh] ${lobster.className}`}>
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                Real People.<br />
                Real Solutions.<br /> 
                Right Now.
            </div>
            <div className="mt-8 md:mt-0">
                <Image 
                src="/techsupport.svg"
                alt="Tech Support"
                width={200}
                height={200}
                className="rounded-xl"
                />
            </div>
        </div>

    )
}