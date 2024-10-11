import Skillset from "./components/Skillset";

const AboutMe = () => {
    
    return(
    <>
    <section className="max-w-screen-lg mx-auto p-4">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-400 mb-4">
                About Me
            </h2>
            <p className="text-lg sm:text-xl mb-4 text-justify">I&apos;m Daniel Lizarazo, an electronic engineer and junior fullstack developer with a strong passion for technology and innovation.
                I would describe myself as a passionate person, self-learning attitude, quick learner, problem solving, resilient, diligent, collaborative and happy. My journey in technology began with electronics, where I learned to build circuits and understand the hardware side of things.
                Over time, I transitioned into software development, where I discovered my enthusiasm for coding and web development.
            </p>
            <p className="text-lg sm:text-xl mb-4 text-justify">
            With over a year of experience in Automation & Control, I specialize in PLC programming, HMI design, Node-RED, industrial communication protocols, PID tuning, and electrical diagrams. In addition, I have experience as a software developer, working with technologies such as React, FastAPI, ExpressJS, SQL, PostgreSQL, SQLite, Google Cloud, and AWS.
            </p>
            <p className="text-lg sm:text-xl mb-4 text-justify">
            Currently working as a freelancer, I am actively seeking opportunities to contribute to a dynamic team where I can leverage my skills and experience. If you&apos;re looking for a dedicated professional to collaborate on projects or join your team, please feel free to reach out. I look forward to exploring how I can contribute to your goals.
            </p>
    </section>
    <Skillset/>
    </>
    );
}
export default AboutMe;
