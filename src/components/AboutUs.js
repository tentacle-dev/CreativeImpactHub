import * as motion from "motion/react-client"

export default function AboutUs() {
  return (
    <motion.section
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-[#FE5D26]   shadow-lg py-16 px-6 md:px-12 lg:px-24" id="about">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#fff] mb-12">
          About Us
        </h2>
        <p className="sm:text-lg lg:text-xl md:text-2xl text-gray-700 leading-relaxed">
          We are a dynamic team of tech enthusiasts and experts dedicated to providing top-notch telecom support and managed services to businesses of all sizes. 
          With a relentless commitment to excellence, we have positioned ourselves as a leading agency on Upwork, ready to elevate your technological capabilities.
        </p>
      </div>
    </motion.section>
  );
}
