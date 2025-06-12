import Image from "next/image"

import * as motion from "motion/react-client"

export default function Welcome() {
  return (
    <motion.section 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
    
    className="py-12 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-light text-center text-[#fff] mb-12">
          Welcome to <span className="text-[#FE5D26]">Creative Impact Hub</span>
          <br /> Your Trusted Tech Support Partner
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 px-4">
        <div className="flex justify-center">
          <Image
            src="/Welcome.jpg"
            alt="Team of experts at Creative Impact Hub"
            width={400}
            height={400}
            priority
            layout="responsive"
            sizes="(max-width: 768px) 80vw, 50vw"
            className="rounded-xl shadow-xl object-cover w-full max-w-md"
          />

        </div>

        <div className="text-left">
          <p className="text-base md:text-lg leading-relaxed text-gray-300">
            At Creative Impact Hub, we believe in the transformative power of technology.
            In an era where seamless connectivity and efficient managed services are paramount,
            our agency stands as a beacon of support for businesses seeking unparalleled tech assistance.
          </p>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-gray-300">
            With a dedicated team and a commitment to excellence, we help you harness the full potential
            of technology, ensuring that your operations run smoothly and efficiently.
          </p>
        </div>
      </div>
    </motion.section>

  )
}
