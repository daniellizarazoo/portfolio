import { useEffect, useRef, useState } from 'react';

const Skillset = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const containerRef = useRef(null);
    const skills = ['C++', 'JavaScript', 'Python', 'React', 'HTML', 'CSS', 'ExpressJS', 'FastAPI', 'SQL', 'Docker', 'AWS'];

    useEffect(() => {
        const scrollSpeed = 1; 
        const maxScrollWidth = containerRef.current.scrollWidth - containerRef.current.clientWidth;

        const interval = setInterval(() => {
            setScrollPosition((prev) => (prev + scrollSpeed) % (maxScrollWidth)); 
        }, 40); 

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='cursor-default'>
            <h2 className="text-3xl font-bold text-center mb-2">
                Professional <span className="text-teal-400">Skillset</span>
            </h2>
            <div className="relative overflow-hidden">
                <div
                    ref={containerRef}
                    className="flex space-x-4 transition-transform duration-300"
                    style={{ transform: `translateX(-${scrollPosition}px)` }}
                >
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="flex-shrink-0 w-36 border-2 border-teal-400 rounded-lg p-4 text-center bg-slate-800 z-20 hover:bg-teal-400" // Asegúrate de tener un fondo para ver la borde
                        >
                            <span className="text-2xl font-bold text-white">{skill}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skillset;
