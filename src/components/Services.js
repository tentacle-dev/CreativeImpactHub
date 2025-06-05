import ServiceCard from "@/components/ServiceCard";
import services from "@/data/services";

export default function ServicesPage() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto lg:h-[90vh] flex items-center bg-white">
      <div>
        <h2 className="text-3xl md:text-7xl  font-bold mb-8 text-center text-[#FE5D26]">Our Services</h2>
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
    </section>
  );
}
