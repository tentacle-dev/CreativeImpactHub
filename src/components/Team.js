import Image from "next/image"

const Teams = [
    {
        id :1,
        name : "Shiroan Pathmanathan",
        title : "Founder",
        description : "Shiroan Pathmanathan is a driven and visionary founder with a passion for creating innovative solutions. With a deep understanding of entrepreneurship and a commitment to making a positive impact, Shiroan leads initiatives that bring ideas to life and drive growth.",
        path : "/avatar1.webp",
    },
    // {
    // id: 2,
    // name: "Thanush Seelan",
    // title: "Lead Developer",
    // description: "Thanush Seelan is a talented and innovative developer dedicated to crafting high-quality software solutions. With a keen eye for detail and a strong commitment to excellence, Thanush transforms complex ideas into intuitive digital experiences that empower users",
    // path: "/avatar1.webp"
    // }

]

export default function Team(){
    return(
        <section className="team mx-8 md:mx-16 ">
           <h2 className="text-3xl md:text-7xl  font-bold mb-8 text-center text-[#FE5D26]">Our Team</h2>
           <div>
            {
                Teams.map((team) => {
                    return (
                        <div className="md:mt-8 text-center flex flex-col md:flex-row justify-between gap-2 px-8 text-left" key={team.id}>
                            <div className="flex ">
                                <Image src={team.path} width={150} height={150} className="rounded-2xl self-center" alt={`${team.name}'s photo`} />
                            </div>
                            <div className="text-right mb-8">
                                <h3 className="text-3xl font-semibold">{team.name}</h3>
                                <h4 className="text-lg text-[#FE5D26]">{team.title}</h4>
                                <p className="text-md ">{team.description}</p>
                            </div>
                        </div>
                        
                    )
                })
            }

                
           </div>
        </section>
    )
}