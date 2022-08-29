import React from "react";
import Nav from "../componentes/nav";
import img from "../imgs/city.jpg"
import img1 from "../imgs/bo2.jpg"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"; 
import { faEnvelope, faHeart } from "@fortawesome/free-regular-svg-icons";



const Inicio =()=>{
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);
    
    return(
        <div className="bg-stone-900 h-screen w-full items-center flex flex-col">
            <Nav/>
            <div className="flex flex-col w-full min-h-[100%] bg-stone-900">
                <div className="w-full h-full flex flex-row items-center justify-center text-white">
                    <h1 className="text-4xl mt-[80px] w-[40%]">Welcome to my web. <br /> You can know about my profesional profile and also personal things that i have the pleasure to share.</h1>
                    <img className="h-[600px] mix-blend-overlay ml-[300px] mt-[100px] rounded-[20px]" src={img1}  />
                </div>
            </div>

            <div className="reveal min-h-[70%] flex flex-row w-full text-white">
                <div id="cont" className="flex flex-col h-full w-full items-center mt-24">
                    <p>CONTACT</p>
                    <a className="reveal hover:bg-indigo-500  h-[85px] w-2/4 border flex flex-row items-center justify-center mt-7" href="https://www.linkedin.com/in/cristian-sanchez-sierra-3a2139230/">
                        <FontAwesomeIcon className="text-white h-12 mr-5" icon={faLinkedin} />
                        <p>LINKEDIN</p>
                    </a>
                    <a className="reveal hover:bg-indigo-500  h-[85px] w-2/4 border flex flex-row items-center justify-center mt-7" href="https://github.com/CristianSanchezSierra">
                        <FontAwesomeIcon className="text-white h-12 mr-5" icon={faGithub} />
                        <p>GITHUB</p>
                    </a>

                    <a className="reveal  hover:bg-indigo-500  h-[85px] h-[85px] w-2/4 border flex flex-row items-center justify-center mt-7" href="mailto:Cristiansr2508@gmail.com">
                        <FontAwesomeIcon className="text-white h-12 mr-5" icon={faEnvelope} />
                        <p>GMAIL</p>
                    </a>

                    <img className="h-[30%] w-full rounded-lg opacity-50 mt-24 drop-shadow-2xl" src={img} />
                </div>
            </div>
                
        </div>
    )

}

export default Inicio;