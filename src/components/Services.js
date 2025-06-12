import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";
import * as motion from "motion/react-client"


export default function ServicesPage() {
  return (
    <motion.section 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="px-[10%] py-12  mx-auto lg:h-[90vh] flex items-center bg-white">
      <div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#FE5D26] mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-4 justify-items-center ">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}
