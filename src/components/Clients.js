import Image from "next/image";

import * as motion from "motion/react-client"

export default function Clients(){
    return(
    <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="py-12 bg-gray-100 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#FE5D26] mb-12">Our Clients</h2>
        <div className="flex flex-wrap justify-center items-center lg:gap-24 gap-8">
            <Image src="/Clients/client1.svg" width={400} height={100} alt="Atlas Networks" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />

            <Image src="/Clients/client2.png" width={400} height={100} alt="Zetta Serve" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />

            <Image src="/Clients/client3.png" width={400} height={100} alt="Gazelle Communications" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />

            <Image src="/Clients/client4.svg" width={400} height={100} alt="Nemerald" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />

            <Image src="/Clients/client5.png" width={400} height={100} alt="Netone" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />

            <Image src="/Clients/client6.png" width={400} height={100} alt="Nemerald" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />
            
            <Image src="/Clients/client7.webp" width={400} height={100} alt="Nemerald" className="lg:h-36 h-16 object-contain grayscale hover:grayscale-0 transition" />
        </div>
    </motion.section>
    )
}