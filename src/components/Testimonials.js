import testimonials from "@/data/testimonials";
import * as motion from "motion/react-client"

export default function Testimonials(){
    return (
        <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className=" mx-auto px-8 md:px-16 py-8 bg-white"
        id="testimonials"
        >
           <h2 className="text-3xl md:text-5xl font-extrabold text-center text-[#FE5D26] mb-12">Customer Testimonials </h2>
           <div className="flex flex-col w-full md:flex-row flex-wrap gap-6 justify-center  mx-auto ">

            {
                testimonials.map((testimonial) => {
                    return(
                            <div className="bg-gray-800 p-6 rounded-lg shadow-md max-w-sm flex flex-col justify-between" key={testimonial.id}>
                                <p className="text-gray-200 italic hover:text-[#FE5D26]">
                               
                               {testimonial.description}
                                </p>
                                <p className="mt-4 text-sm font-semibold text-[#FE5D26] hover:text-white">— {testimonial.name}, <br />{testimonial.title}</p>
                            </div>
                    )
                })
            }
            </div>

        </motion.section>

    )
}