type CardProps = {
	name: string;
    link?: string;
    variant: "gameCard" | "bookCard" | "videoCard";
};

export default function Card({ name, variant, link }: CardProps) {

    const variantClass = {
        gameCard: "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-3 w-32 h-30 md:w-35 h-50 block hover:shadow-2xl",
        bookCard: "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-1 mt-3 w-26 border-0 border-black bg-white h-35 md:w-60 md:h-75 md:m-3 rounded-lg block hover:shadow-xl",
        videoCard: "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-3 w-55 h-35 md:w-80 md:h-50 md:m-3 block hover:shadow-2xl shadow-black/80",
    };


	return (
		<div
            onClick={() => window.open(link, '_blank')} 
            className={`inline-block ${variantClass[variant]}`}>
		    <img src={name} className="w-full h-full rounded-lg"/>
		</div>
	);
}



{/**inline-block transition transform duration-200 ease-in-out hover:scale-105 
    m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block hover:shadow-xl*/}