import { CheckCircle } from "lucide-react";
import * as motion from "motion/react-client"

const features = [
  {
    title: "Expertise",
    description:
      "Our team comprises seasoned professionals with a wealth of experience in telecom and managed services.",
  },
  {
    title: "Tailored Solutions",
    description:
      "We understand that one size does not fit all. Our solutions are customized to meet the unique needs of your business.",
  },
  {
    title: "Reliability",
    description:
      "Count on us for reliable, 24/7 support. Your business continuity is our priority.",
  },
  {
    title: "Innovation",
    description:
      "Stay ahead in the tech game with our innovative solutions designed to future-proof your operations.",
  },
];

export default function WhyChooseUs() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: -50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="bg-gradient-to-r from-white to-gray-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#FE5D26] mb-12">
          🤝 Why Choose Creative Impact Hub?
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex items-start gap-4 transition hover:shadow-2xl"
            >
              <CheckCircle className="text-[#FE5D26] w-8 h-8 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
