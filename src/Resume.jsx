export default function Resume ()  { 
return(
    <section className="p-4 rounded-lg max-w-screen-lg mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-teal-400 mb-11">
            Resume
        </h2>
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                <iframe 
                    src="https://drive.google.com/file/d/1V86XognmKQtC_9UzSY8kvMuktXwwpF06/preview" 
                    className="absolute top-0 left-0 w-full h-full"
                    allow="autoplay"
                />
            </div>
    </section>
    )
        };