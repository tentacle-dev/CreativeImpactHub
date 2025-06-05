import { Facebook , Instagram, Linkedin } from "lucide-react"

export default function Social(){
    return(
        <section>
            <ul className="flex justify-center gap-16 my-4">
              <li className="social-icon"><a href=""><Facebook /></a></li>  
              <li className="social-icon"><a href=""><Instagram /></a></li>  
              <li className="social-icon"><a href=""><Linkedin /></a></li>  
            </ul>
        </section>
    )
};