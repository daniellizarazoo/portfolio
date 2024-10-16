import { useState } from "react";

export default function Projects () {
    

    const [cardBoardVisibility, setCardBoardVisibility] = useState(false);
    const [cardBoardData,setCarboardData] = useState('');

    const dataForCardboards = [
        {
            title: 'CMMS Software',
            techUsed : 'React, Express.js, Zustand, Redux, Postman, Docker, AWS',
            description: (
                <>
                    Currently working on <strong>TECNODM CMMS</strong>, a comprehensive solution for managing maintenance operations. I implemented global state management using tools like <span style={{ color: '#61DBFB' }}><strong>Zustand</strong></span> and <span style={{ color: '#61DBFB' }}><strong>Redux</strong></span> in <span style={{ color: '#61DBFB' }}><strong>React</strong></span>. On the backend, I developed RESTful API using <span style={{ color: '#61DBFB' }}><strong>Express.js</strong></span>, facilitating communication between the frontend and backend. Both the frontend and backend services are deployed in <span style={{ color: '#61DBFB' }}><strong>Docker</strong></span> containers, ensuring a consistent development and production environment. This architecture allows for efficient data handling across the application, ensuring seamless interactions between various components such as work order tracking, equipment maintenance, preventive task scheduling, inventory management, and reporting. This structure ensured optimal performance and a smooth user experience, contributing to the streamlining of maintenance operations and improved reliability of assets.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1BLnynvRiJTRod4WXV8dCf0eRrsF_mqXa','1sQuJcUfDaF1gtgHWzdsz5kRukBPZ47k7','17zp5H9j05_UYhwYLRqk9TeS4Pmzh8vma','1cTjfTQWFzTWFUAw6UlU7N_cJNtk47ipc','1cpJqGw5xejtnzfXN_pFxh3_IaSQPWifC','1JntHms9Tyf6VwHnspBjx61MAmSaRUC-Y']
        },
        {
            title: 'Natural-Is Spa Landing page',
            techUsed: 'React, Docker, AWS',
            description: (
                <>
                    Developed an engaging <strong>Single Page Application (SPA)</strong> for the <strong>Natural-Is Spa</strong> using <span style={{ color: '#61DBFB' }}><strong>React</strong></span> for the frontend. The application was deployed in a <span style={{ color: '#61DBFB' }}><strong>Docker</strong></span> container on a <strong>VPS</strong> (Virtual Private Server), ensuring a consistent and isolated environment. To facilitate continuous integration and deployment, I utilized <span style={{ color: '#61DBFB' }}><strong>GitHub Actions</strong></span> to automate code updates whenever changes are made to the repository. The application is also hosted on <span style={{ color: '#61DBFB' }}><strong>Vercel</strong></span>, enabling fast and efficient performance. Additionally, I configured the domain to point to the VPS’s IP address, ensuring seamless access for users.
                </>
            ),
            link: ['https://natural-is-spa.vercel.app/','https://spa.natural-is-spa.dns-dynamic.net/'],
            imagesGoogleDriveId:['1imgMHODCRIUSIaAdOSfDmwYeGzAQ1bkw','1PP3OQS2zs7IQF53cGlTzTko_87tax1dT','1Mw07FAwhAIUsuGi_JmAWHO5QtSJJQVQ0','16sZMVLU_zW0ljHC5xva0vJJOHVQDs3zn']
        },
        {
            title: 'ANPR GUI App',
            techUsed: 'Python, OpenCV, Pyside6, PyTorch,OpenVino',
            description: (
                <>
                    The ANPR (Automatic Number Plate Recognition) GUI app is a comprehensive software solution designed to efficiently detect and recognize vehicle license plates using advanced computer vision techniques. The application is built with a focus on simplicity, offering a user-friendly graphical interface that allows non-technical users to easily interact with complex image processing and machine learning functionalities.
            
                    The software leverages state-of-the-art image processing algorithms powered by <span style={{ color: '#61DBFB' }}><strong>OpenCV</strong></span> to accurately detect vehicle plates in various conditions, including different lighting and angles. For recognition, it integrates deep learning models utilizing <span style={{ color: '#61DBFB' }}><strong>PyTorch</strong></span> and optimized inference with <span style={{ color: '#61DBFB' }}><strong>OpenVINO</strong></span> for real-time performance. The front-end is built using <span style={{ color: '#61DBFB' }}><strong>PySide6</strong></span>, providing a modern and responsive interface that streamlines user interaction.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['']
        },
        {
            title: 'Modelling and tunning of PID Controllers',
            techUsed: 'Logix Designer Studio 5000, Matlab',
            description: (
                <>
                    Developed an air flow control system for the burners and fan motor of a billet heating furnace to improve combustion efficiency, reduce emissions, and maintain stable air pressure. The project included creating a mathematical model for airflow, tuning <span style={{ color: '#61DBFB' }}><strong>PI/PID controllers</strong></span>, designing a <span style={{ color: '#61DBFB' }}><strong>P&ID diagram</strong></span>, and programming the PLCs using <span style={{ color: '#61DBFB' }}><strong>Studio5000 Logix Designer</strong></span>. I also ran simulations and performed experimental tests for validation.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1iFyPnOMk52PdkvxwNueKgHIgsIXEC0u1','1RW6qaH11Y-cDf8yRMXXKoTkLopsbxgir','1OwV2gMhDyruYE2hZjPSUdAy-2Em28vie','1oMYEdHtNJkEPeK8aYA-oyWeUphcpucsL','1pcswOSPpsgFKITGsj-rTt5kSE-t5P9DD']
        },
        {
            title: 'Automation & Control',
            techUsed: 'PLC, Autocad Electrical...',
            description: (
                <>
                    As an <span style={{ color: '#61DBFB' }}><strong>Electronic Engineer</strong></span>, I have extensive experience in designing solutions across various industries, specializing in <span style={{ color: '#61DBFB' }}><strong>instrumentation</strong></span>, <span style={{ color: '#61DBFB' }}><strong>automation</strong></span>, and <span style={{ color: '#61DBFB' }}><strong>control systems</strong></span>. I have worked with a range of <span style={{ color: '#61DBFB' }}><strong>PLC brands</strong></span>, including <span style={{ color: '#61DBFB' }}><strong>Allen Bradley</strong></span>, <span style={{ color: '#61DBFB' }}><strong>Mitsubishi</strong></span>, and <span style={{ color: '#61DBFB' }}><strong>Siemens</strong></span>, and am skilled in <span style={{ color: '#61DBFB' }}><strong>designing electrical diagrams</strong></span>, <span style={{ color: '#61DBFB' }}><strong>control panels</strong></span>, and handling their complete <span style={{ color: '#61DBFB' }}><strong>wiring</strong></span>.
            
                    Additionally, I have strong expertise in <span style={{ color: '#61DBFB' }}><strong>designing and tuning control loops</strong></span> to optimize system performance. My experience covers the full lifecycle of <span style={{ color: '#61DBFB' }}><strong>control system design</strong></span>, from initial concept to final implementation.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1DcL7X1lKbAq8uBn1JKwWrTU19cpTKcFO','1XgvHhjf9AW_1MTmXgsPk_0uGN-Cryrov','15OHOn8ecIuN77XV7gfy5TpOmphjper8H','1mWBMqz6_PR_ZoKE0HxbupOFHMPhTldJt','1aGHEgMZTzAH9XONazM8TVrQ5KQFBuCR0']
        }
    ];
    

    return(
    <>
        <section className="p-4 rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-400 mb-11">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataForCardboards.map((data,index)=>(
                    <div 
                        key={index} 
                        onClick={() => {
                            setCarboardData(data);
                            setCardBoardVisibility(true);
                        }}
                        className="bg-slate-800 p-6 rounded-lg shadow-lg border-2 border-teal-50 cursor-pointer">
                        <h3 className="text-2xl font-bold mb-4 text-teal-400">{data.title}</h3>
                        <p className="mb-3"><span className="text-teal-400">Tech used</span>: {data.techUsed}</p>
                        <p className="text-teal-400">
                        <span style={{ cursor: "pointer" }}>View details...</span>
                        </p>
            </div>
                ))}
            </div>
        </section>
        {cardBoardVisibility && 
               <div 
               onClick={()=>setCardBoardVisibility(false)}
               className="fixed inset-0 bg-black bg-opacity-50 z-20 overflow-y-auto"
             >
               <div 
                 onClick={(e) => e.stopPropagation()}
                 className="bg-slate-900 p-6 min-h-screen w-full lg:min-h-0 lg:h-[90vh] lg:w-[90vw] lg:mx-auto lg:my-[5vh] lg:rounded-lg relative"
               >
                 <button 
                   onClick={()=>setCardBoardVisibility(false)} 
                   className="absolute top-2 right-2 z-30 text-teal-400 focus:outline-none"
                   aria-label="Close"
                 >
                   X 
                 </button>
                 
                 <div className="flex flex-col lg:flex-row lg:h-full overflow-y-auto">
                   {/* Content Div */}
                   <div className="w-full lg:w-1/2 lg:pr-6 mb-6 lg:mb-0">
                     <h1 className="text-teal-400 text-center text-3xl font-bold mb-7">
                       {cardBoardData.title}
                     </h1>
                     <p className="text-xl text-justify">
                       <span className="text-teal-400 font-bold">Project description: </span> 
                       {cardBoardData.description}
                     </p>
                     {cardBoardData.link.length > 0 && (
                       <p className="mt-7 text-xl">
                         <span className="text-teal-400 font-bold">Links: </span> 
                         {cardBoardData.link.map((linkItem, index) => (
                           <div key={index}>
                             <a 
                               href={linkItem}
                               target="_blank" 
                               rel="noopener noreferrer"
                               className="text-justify text-lg"
                             >
                               {linkItem}
                             </a>
                           </div>
                         ))}
                       </p>
                     )}
                     <p className="mt-7 text-xl">
                       <span className="text-teal-400 font-bold">Tech used: </span> 
                       {cardBoardData.techUsed}
                     </p>
                   </div>
                   
                   {/* Image Div */}
                   <div className="w-full lg:w-1/2">
                     {cardBoardData.title.includes('ANPR') ? (
                       <iframe 
                         src="https://drive.google.com/file/d/1oX_SOoTOnnsSyh2J_FjaaVNJ5D7uFjVH/preview" 
                         width="100%" 
                         height="300" 
                         allow="autoplay" 
                         title="ANPR Project Video"
                         className="rounded p-5"
                       />
                     ) : (
                        cardBoardData.imagesGoogleDriveId.map(id => (
                         <img 
                           key={id}
                           src={`https://lh3.googleusercontent.com/d/${id}?authuser=0`}
                           alt="Project images"
                           className="object-contain rounded p-5 mx-auto w-full"
                           draggable="false" 
                           onContextMenu={(e) => e.preventDefault()}
                         />
                       ))
                     )}
                   </div>
                 </div>
               </div>
             </div> 
        }
    </>
    )
};





import { useState } from "react";

export default function Projects () {
    

    const [cardBoardVisibility, setCardBoardVisibility] = useState(false);
    const [cardBoardData,setCarboardData] = useState('');

    const dataForCardboards = [
        {
            title: 'CMMS Software',
            techUsed : 'React, Express.js, Zustand, Redux, Postman, Docker, AWS',
            description: (
                <>
                    Currently working on <strong>TECNODM CMMS</strong>, a comprehensive solution for managing maintenance operations. I implemented global state management using tools like <span style={{ color: '#61DBFB' }}><strong>Zustand</strong></span> and <span style={{ color: '#61DBFB' }}><strong>Redux</strong></span> in <span style={{ color: '#61DBFB' }}><strong>React</strong></span>. On the backend, I developed RESTful API using <span style={{ color: '#61DBFB' }}><strong>Express.js</strong></span>, facilitating communication between the frontend and backend. Both the frontend and backend services are deployed in <span style={{ color: '#61DBFB' }}><strong>Docker</strong></span> containers, ensuring a consistent development and production environment. This architecture allows for efficient data handling across the application, ensuring seamless interactions between various components such as work order tracking, equipment maintenance, preventive task scheduling, inventory management, and reporting. This structure ensured optimal performance and a smooth user experience, contributing to the streamlining of maintenance operations and improved reliability of assets.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1BLnynvRiJTRod4WXV8dCf0eRrsF_mqXa','1sQuJcUfDaF1gtgHWzdsz5kRukBPZ47k7','17zp5H9j05_UYhwYLRqk9TeS4Pmzh8vma','1cTjfTQWFzTWFUAw6UlU7N_cJNtk47ipc','1cpJqGw5xejtnzfXN_pFxh3_IaSQPWifC','1JntHms9Tyf6VwHnspBjx61MAmSaRUC-Y']
        },
        {
            title: 'Natural-Is Spa Landing page',
            techUsed: 'React, Docker, AWS',
            description: (
                <>
                    Developed an engaging <strong>Single Page Application (SPA)</strong> for the <strong>Natural-Is Spa</strong> using <span style={{ color: '#61DBFB' }}><strong>React</strong></span> for the frontend. The application was deployed in a <span style={{ color: '#61DBFB' }}><strong>Docker</strong></span> container on a <strong>VPS</strong> (Virtual Private Server), ensuring a consistent and isolated environment. To facilitate continuous integration and deployment, I utilized <span style={{ color: '#61DBFB' }}><strong>GitHub Actions</strong></span> to automate code updates whenever changes are made to the repository. The application is also hosted on <span style={{ color: '#61DBFB' }}><strong>Vercel</strong></span>, enabling fast and efficient performance. Additionally, I configured the domain to point to the VPS’s IP address, ensuring seamless access for users.
                </>
            ),
            link: ['https://natural-is-spa.vercel.app/','https://spa.natural-is-spa.dns-dynamic.net/'],
            imagesGoogleDriveId:['1imgMHODCRIUSIaAdOSfDmwYeGzAQ1bkw','1PP3OQS2zs7IQF53cGlTzTko_87tax1dT','1Mw07FAwhAIUsuGi_JmAWHO5QtSJJQVQ0','16sZMVLU_zW0ljHC5xva0vJJOHVQDs3zn']
        },
        {
            title: 'ANPR GUI App',
            techUsed: 'Python, OpenCV, Pyside6, PyTorch,OpenVino',
            description: (
                <>
                    The ANPR (Automatic Number Plate Recognition) GUI app is a comprehensive software solution designed to efficiently detect and recognize vehicle license plates using advanced computer vision techniques. The application is built with a focus on simplicity, offering a user-friendly graphical interface that allows non-technical users to easily interact with complex image processing and machine learning functionalities.
            
                    The software leverages state-of-the-art image processing algorithms powered by <span style={{ color: '#61DBFB' }}><strong>OpenCV</strong></span> to accurately detect vehicle plates in various conditions, including different lighting and angles. For recognition, it integrates deep learning models utilizing <span style={{ color: '#61DBFB' }}><strong>PyTorch</strong></span> and optimized inference with <span style={{ color: '#61DBFB' }}><strong>OpenVINO</strong></span> for real-time performance. The front-end is built using <span style={{ color: '#61DBFB' }}><strong>PySide6</strong></span>, providing a modern and responsive interface that streamlines user interaction.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['']
        },
        {
            title: 'Modelling and tunning of PID Controllers',
            techUsed: 'Logix Designer Studio 5000, Matlab',
            description: (
                <>
                    Developed an air flow control system for the burners and fan motor of a billet heating furnace to improve combustion efficiency, reduce emissions, and maintain stable air pressure. The project included creating a mathematical model for airflow, tuning <span style={{ color: '#61DBFB' }}><strong>PI/PID controllers</strong></span>, designing a <span style={{ color: '#61DBFB' }}><strong>P&ID diagram</strong></span>, and programming the PLCs using <span style={{ color: '#61DBFB' }}><strong>Studio5000 Logix Designer</strong></span>. I also ran simulations and performed experimental tests for validation.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1iFyPnOMk52PdkvxwNueKgHIgsIXEC0u1','1RW6qaH11Y-cDf8yRMXXKoTkLopsbxgir','1OwV2gMhDyruYE2hZjPSUdAy-2Em28vie','1oMYEdHtNJkEPeK8aYA-oyWeUphcpucsL','1pcswOSPpsgFKITGsj-rTt5kSE-t5P9DD']
        },
        {
            title: 'Automation & Control',
            techUsed: 'PLC, Autocad Electrical...',
            description: (
                <>
                    As an <span style={{ color: '#61DBFB' }}><strong>Electronic Engineer</strong></span>, I have extensive experience in designing solutions across various industries, specializing in <span style={{ color: '#61DBFB' }}><strong>instrumentation</strong></span>, <span style={{ color: '#61DBFB' }}><strong>automation</strong></span>, and <span style={{ color: '#61DBFB' }}><strong>control systems</strong></span>. I have worked with a range of <span style={{ color: '#61DBFB' }}><strong>PLC brands</strong></span>, including <span style={{ color: '#61DBFB' }}><strong>Allen Bradley</strong></span>, <span style={{ color: '#61DBFB' }}><strong>Mitsubishi</strong></span>, and <span style={{ color: '#61DBFB' }}><strong>Siemens</strong></span>, and am skilled in <span style={{ color: '#61DBFB' }}><strong>designing electrical diagrams</strong></span>, <span style={{ color: '#61DBFB' }}><strong>control panels</strong></span>, and handling their complete <span style={{ color: '#61DBFB' }}><strong>wiring</strong></span>.
            
                    Additionally, I have strong expertise in <span style={{ color: '#61DBFB' }}><strong>designing and tuning control loops</strong></span> to optimize system performance. My experience covers the full lifecycle of <span style={{ color: '#61DBFB' }}><strong>control system design</strong></span>, from initial concept to final implementation.
                </>
            ),
            link: '',
            imagesGoogleDriveId:['1DcL7X1lKbAq8uBn1JKwWrTU19cpTKcFO','1XgvHhjf9AW_1MTmXgsPk_0uGN-Cryrov','15OHOn8ecIuN77XV7gfy5TpOmphjper8H','1mWBMqz6_PR_ZoKE0HxbupOFHMPhTldJt','1aGHEgMZTzAH9XONazM8TVrQ5KQFBuCR0']
        }
    ];
    

    return(
    <>
        <section className="p-4 rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-400 mb-11">
                Projects
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {dataForCardboards.map((data,index)=>(
                    <div 
                        key={index} 
                        onClick={() => {
                            setCarboardData(data);
                            setCardBoardVisibility(true);
                        }}
                        className="bg-slate-800 p-6 rounded-lg shadow-lg border-2 border-teal-50 cursor-pointer">
                        <h3 className="text-2xl font-bold mb-4 text-teal-400">{data.title}</h3>
                        <p className="mb-3"><span className="text-teal-400">Tech used</span>: {data.techUsed}</p>
                        <p className="text-teal-400">
                        <span style={{ cursor: "pointer" }}>View details...</span>
                        </p>
            </div>
                ))}
            </div>
        </section>
        {cardBoardVisibility && 
            <div 
                onClick={() => setCardBoardVisibility(false)}
                className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center overflow-y-auto">
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className="bg-slate-900 rounded-lg p-6 w-[100%] h-[100%] lg:w-[90%] lg:h-[90%] flex flex-col lg:flex-row relative">
                    <button 
                            onClick={() => setCardBoardVisibility(false)} 
                            className="absolute -top-2 right-1 z-30 text-teal-400 text-2xl focus:outline-none"
                        >
                            &times;
                    </button>
                    <div className="flex-grow lg:w-[50%] lg:pr-6 lg:mb-0 overflow-y-auto no-scrollbar h-[70%] lg:h-auto">
                        <h1 className="text-teal-400 text-center text-3xl font-bold mb-7">
                            {cardBoardData.title}
                        </h1>
                        <p className="text-xl text-justify">
                            <span className="text-teal-400 font-bold">Project description: </span> 
                            {cardBoardData.description}
                        </p>
                            {cardBoardData.link && 
                        <p className="mt-7 text-xl">
                            <span className="text-teal-400 font-bold">Links: </span> 
                            {cardBoardData.link.map((link, index) => (
                                <div key={index}>
                                    <a 
                                        href={link}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-justify text-lg"
                                    >
                                        {link}
                                    </a>
                                </div>
                            ))}
                        </p>
                            }
                        <p className="mt-7 text-xl">
                            <span className="text-teal-400 font-bold">Tech used: </span> 
                            {cardBoardData.techUsed}
                        </p>
                    </div>
                    <div className="h-[30%] lg:w-full overflow-y-auto custom-scrollbar items-center justify-center lg:h-auto">
                        {cardBoardData.title.includes('ANPR') && (
                            <iframe 
                                src="https://drive.google.com/file/d/1oX_SOoTOnnsSyh2J_FjaaVNJ5D7uFjVH/preview" 
                                width="640" 
                                height="480" 
                                allow="autoplay" 
                                title="ANPR Project Video"
                                className="object-contain rounded p-5 items-center justify-center mx-auto"
                            />)
                        }
                        {!cardBoardData.title.includes('ANPR') && cardBoardData.imagesGoogleDriveId.map(id=>
                                <img 
                                    src={`https://lh3.googleusercontent.com/d/${id}?authuser=0`}
                                    alt="Project images"
                                    className=" object-contain rounded p-5 items-center justify-center mx-auto"
                                    key={id}
                                    draggable="false" 
                                    onContextMenu={(e) => e.preventDefault()}
                                />)
                        }
                    </div>
                </div>
            </div>
        }
    </>
    )
};

