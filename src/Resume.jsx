export default function Resume() {
    return (
        <section className="p-4 rounded-lg max-w-screen-lg mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-400 mb-6">
                Resume
            </h2>
            <div className="relative w-full h-[70vh] lg:h-[80vh] max-h-screen">
                <iframe 
                    src="https://drive.google.com/file/d/1JcJBhsxGrnrJ3cOcOrPY9oLw3hVwK2ym/preview" 
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    allow="autoplay"
                />
            </div>
        </section>
    );
}
