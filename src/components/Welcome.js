import Image from "next/image"

export default function Welcome() {
  return (
    <section className="pt-12 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Welcome to <span className="text-[#FE5D26]">Creative Impact Hub</span>
          <br /> Your Trusted Tech Support Partner
        </h1>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-12 px-4">
        <div className="flex justify-center">
          <Image
            src="/Welcome.jpg"
            alt="Team of experts at Creative Impact Hub"
            width={500}
            height={400}
            priority
            layout="responsive"
            sizes="(max-width: 768px) 100vw, 50vw"
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
          <button className="mt-6 px-6 py-3 bg-[#FE5D26] rounded-md font-semibold text-white hover:bg-[#e3501d] transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>

  )
}
