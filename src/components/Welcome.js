import Image from "next/image"

export default function Welcome() {
  return (
    <section className="pt-8 bg-black text-white lg:h-[90vh]">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-5xl font-semibold lg:mt-20 leading-tight">
          Welcome to <span className="text-[#FE5D26]">Creative Impact Hub</span> – Your Trusted Tech Support Partner
        </h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 py-12">
        <Image
          src="/Welcome.jpg"
          alt="Team of experts at Creative Impact Hub"
          width={400}
          height={300}
          priority
          className="w-[150px] rounded-lg shadow-lg md:w-full max-w-sm object-cover"
        />

        <p className="text-sm md:text-xl text-center md:text-left leading-relaxed">
          At Creative Impact Hub, we believe in the transformative power of technology.
          In an era where seamless connectivity and efficient managed services are paramount,
          our agency stands as a beacon of support for businesses seeking unparalleled tech assistance.
        </p>
      </div>
    </section>
  )
}
