import Image from "next/image"
import * as motion from "motion/react-client"

import { Lobster } from "next/font/google"


const lobster = Lobster({
  subsets: ['latin'],
  weight: ['400'], // or just "400"
  display: 'swap',        
});

export default function Hero(){
    return(
        <div className={`flex flex-col md:flex-row justify-around items-center text-center md:text-left lg:py-64 lg:px-12 hero md:h-[70vh] lg:h-[90vh] ${lobster.className}`}>
            <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
                Real People.<br />
                Real Solutions.<br /> 
                Right Now.
            </motion.div>
            <motion.div className="mt-8 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2, ease: "anticipate" }}
            >
                <Image 
                src="/techsupport.svg"
                alt="Tech Support"
                width={200}
                height={200}
                className="rounded-xl"
                />
            </motion.div>
        </div>

    )
}