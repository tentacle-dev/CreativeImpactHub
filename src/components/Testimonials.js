export default function Testimonials(){
    return (
        <section className=" mx-auto px-8 md:px-16 py-8 bg-black ">
           <h2 className="text-3xl md:text-7xl  font-bold mb-8 text-center text-[#FE5D26]">Customer Testimonials </h2>
           <div className="flex flex-col w-full md:flex-row flex-wrap gap-6 justify-center  mx-auto ">
                <div className="bg-base-200 p-6 rounded-lg shadow-md max-w-sm flex flex-col justify-between">
                    <p className="text-gray-200 italic">
                    “Creative Impact Hub’s dedication and professionalism made all the difference for our project’s success.”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#FE5D26]">— John Smith, Product Manager</p>
                </div>

                <div className="bg-base-200 p-6 rounded-lg shadow-md max-w-sm flex flex-col justify-between">
                    <p className="text-gray-200 italic">
                    “We were impressed with how seamlessly they integrated new technology into our existing workflows.”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#FE5D26]">— Maria Lopez, Operations Director</p>
                </div>

                <div className="bg-base-200 p-6 rounded-lg shadow-md max-w-sm flex flex-col justify-between">
                    <p className="text-gray-200 italic">
                    “The team at Creative Impact Hub was always available to answer our questions and provide solutions.”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#FE5D26]">— Alex Johnson, CEO</p>
                </div>

                <div className="bg-base-200 p-6 rounded-lg shadow-md max-w-sm flex flex-col justify-between">
                    <p className="text-gray-200 italic">
                    “They truly care about helping businesses thrive and it shows in their excellent service.”
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#FE5D26]">— Sarah Lee, Marketing Manager</p>
                </div>
            </div>

        </section>

    )
}