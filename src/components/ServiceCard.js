import Image from "next/image";
import * as motion from "motion/react-client"
export default function ServiceCard({ title, description, icon }) {
  return (
    <motion.div 
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="rounded-xl shadow-md w-11/12  transition border-b-4 hover:shadow-2xl border-solid border-[#FE5D26] px-4 py-2 bg-black text-teal-50 ">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-4 rounded-full bg-[#FE5D26]">
          <h3 className="text-lg font-semibold text-[#FE5D26]">{icon}</h3>
        </div>
        <h3 className="text-lg font-semibold text-[#FE5D26]">{title}</h3>
      </div>
      <div className="text-sm lg:text-xl">
        {description}
      </div>
    </motion.div>
  );
}
