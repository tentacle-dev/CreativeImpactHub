'use client'
import { MessageCircle, Wrench, Cog, ShieldCheck } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    icon: <MessageCircle className="w-8 h-8 text-white" />,
    description:
      "We begin with a detailed consultation to understand your business goals and challenges.",
    color: "from-[#FE5D26] to-orange-400",
  },
  {
    title: "Custom Solutions",
    icon: <Wrench className="w-8 h-8 text-white" />,
    description:
      "Based on your unique needs, we craft tailored solutions that align with your objectives.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Implementation",
    icon: <Cog className="w-8 h-8 text-white" />,
    description:
      "Our team ensures a seamless integration of our services into your existing framework.",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Support & Maintenance",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    description:
      "Ongoing support and maintenance guarantee that your systems remain optimized and secure.",
    color: "from-purple-500 to-pink-500",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-24 text-center">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#FE5D26] mb-12">
          🌟 How We Work
        </h2>

        <div className="border-l-4 border-dashed border-[#FE5D26] pl-6 lg:pl-12 space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
              // If using Framer Motion, uncomment and wrap in <motion.div>
              // initial={{ opacity: 0, x: -50 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div
                className={`min-w-[40px] h-10 lg:w-10 lg:h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}
              >
                {step.icon}
              </div>

              <div className="text-left">
                <h3 className="text-sm lg:text-2xl font-semibold mb-2">
                  {step.title}
                </h3>
                <p className="text-xs lg:text-lg leading-relaxed text-white">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
