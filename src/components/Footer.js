import Image from "next/image";

export default function Footer({ title, description, icon }) {
  return (
    <div className="bg-[#FE5D26] px-12 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-4  mx-4 lg:mx-32">
            <div className="hidden lg:inline">
                <Image 
                    src="/techsupport.svg"
                    alt="vercel"
                    width={50}
                    height={50}
                    className="svg-icon rounded-xl self-center"
                />
                <p className="text-black">
                    Embark on a journey of technological empowerment with Creative Impact Hub. 
                    We have the expertise to propel you forward.
                </p>
            </div>
            <div className="text-sm space-y-1 Contact-Footer">
                <p className="text-xl text-gray-200">Company</p>
                <p>
                    <a href="" className=" hover:underline hover:text-white">
                        About
                    </a>
                </p>
                <p>
                    <a href="" className=" hover:underline hover:text-white">
                        Reviews
                    </a>
                </p>
                <p>
                    <a href="" className=" hover:underline hover:text-white">
                        Team
                    </a>
                </p>
            </div>
            <div className="text-sm space-y-1 Contact-Footer">
                <p className="text-xl text-gray-200">Help</p>
                <p>
                    <a href="" className=" hover:underline hover:text-white">
                        FAQ
                    </a>
                </p>
                <p>
                    <a href="" className=" hover:underline hover:text-white">
                        Terms
                    </a>
                </p>
                <p> 
                    <a href="" className=" hover:underline hover:text-white">
                        Privacy Policy
                    </a>
                </p>
                
            </div>
            
            <div className="text-sm space-y-1 Contact-Footer ">
                <p className="text-xl text-gray-200">Contact Us</p>
                <p className="hover:text-white">
                    <a href="mailto:support@creativeimpacthub.com" className=" hover:underline hover:text-white">
                    support@creativeimpacthub.com
                    </a>
                </p>
                <p className="hover:text-white">
                    <a href="tel:+14376559990" className=" hover:underline ">
                    1 437 655 9990
                    </a>
                </p>
            </div>


        </div>

        <div className="text-center text-lg text-white pt-6 pb-3 border-t mt-12">
        &copy; {new Date().getFullYear()} Creative Impact Hub. All rights reserved.
        </div>
    </div>
  );
}
