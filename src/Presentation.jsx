import TypeWritter from "./components/TypeWritter";
import { Linkedin, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
import guyProgrammingImage from "./assets/guy.webp";

const Presentation = () => {
    const nav = useNavigate();

    const handleResumeDownload = () => {
        const resumeUrl = 'https://drive.google.com/uc?export=download&id=1V86XognmKQtC_9UzSY8kvMuktXwwpF06';
        window.open(resumeUrl, '_blank');
    };

    return (
        <main className="relative z-10 container mt-12 md:mt-36 flex flex-col md:flex-row justify-between items-center px-4 lg:px-16">
            <div className="max-w-lg cursor-default font-mono text-center lg:text-left">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl  mb-4 font-mono">
                    Hi! 
                </h1>
                {/* <span className="animate-wave inline-block text-7xl">🤖</span> */}
                <h2 className="text-4xl mb-6 lg:whitespace-nowrap">
                    I&apos;m <span className="font-bold text-teal-400">Daniel Lizarazo</span>
                </h2>
                <TypeWritter
                    data={['Electronic Engineer', 'Junior Fullstack Developer', 'Instrumentation, Automation & Control', '+1 year of experience']}
                    speed={50}
                />
                <button 
                    className="mt-6 text-lg sm:text-2xl text-white bg-teal-400 p-3 rounded-2xl transition-transform duration-300 hover:bg-teal-600"
                    onClick={()=> handleResumeDownload()}
                    // onClick={() => nav('/about')}
                >
                    Download resume
                    {/* Get to know me */}
                </button>
                <div className="flex gap-6 mt-5 mx-2 justify-center lg:justify-start">
                    <a href="https://www.linkedin.com/in/daniellizarazoo" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={32} className="text-teal-400 hover:text-teal-600 transition-colors" />
                    </a>
                    <a href="https://github.com/daniellizarazoo" target="_blank" rel="noopener noreferrer">
                        <Github size={32} className="text-teal-400 hover:text-teal-600 transition-colors" />
                    </a>
                </div>
            </div>
            <div className="mt-10 md:mt-0">
                {/* <img 
                    src={guyProgrammingImage}
                    alt="Illustration" 
                    className="w-96 h-auto"
                /> */}
                <img 
                    src="https://lh3.googleusercontent.com/d/1s67l-OhO1jfXJxvuOjYnlhxGPYZ9c_QU?authuser=0" 
                    alt="Mujer presentando su negocio Natural-Is Spa Sogamoso"
                    className="w-96 h-auto object-cover rounded"
                    onContextMenu={(e) => e.preventDefault()}
                    />
            </div>
        </main>
    );
};

export default Presentation;
