import Image from "next/image";

export default function Footer({ title, description, icon }) {
  return (
    <div className="bg-[#FE5D26] px-12 pt-12">
        <div className="grid grid-cols-3 justify-items-center  mx-4 lg:mx-32">
            <div>
                <Image 
                    src="/techsupport.svg"
                    alt="vercel"
                    width={50}
                    height={50}
                    className="svg-icon rounded-xl self-center"
                />
                <p className="text-black">
                    Technology that works. 
                    <br />
                    Support that cares.
                </p>
            </div>
            <div className="Social">
                <p className="text-xl text-black">Our Social</p>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </div>
            <div className="text-sm space-y-1 Contact-Footer">
                <p className="text-xl text-black">Contact Us</p>
                <p>
                    <span className="font-medium">Email:</span>{' '}
                    <a href="mailto:support@creativeimpacthub.com" className=" hover:underline">
                    support@creativeimpacthub.com
                    </a>
                </p>
                <p>
                    <span className="font-medium">Phone:</span>{' '}
                    <a href="tel:+1300000000" className=" hover:underline">
                    1-300 000 000
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
