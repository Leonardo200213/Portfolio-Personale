type CardProps = {
	name: string;
    variant: "gameCard" | "bookCard" | "videoCard";
};

export default function Card({ name, variant }: CardProps) {

    const variantClass = {
        gameCard: "transition transform duration-200 ease-in-out hover:scale-105 m-3 w-26 h-35 md:w-35 h-50 block hover:shadow-xl",
        bookCard: "transition transform duration-2000 ease-in-out hover:scale-105 m-3 w-26 h-35 md:w-80 md:h-50 rounded-md block hover:shadow-xl",
        //videocard e bookcard da sistemare, solo placeholder
        videoCard: "transition transform duration-5000 ease-in-out hover:scale-105 m-3 w-26 h-35 md:w-80 md:h-50 rounded-md block hover:shadow-xl",
    };


	return (
		<div className={`inline-block ${variantClass[variant]}`}>
		    <img src={name} className="w-full h-full rounded-md hover:shadow-xl"/>
		</div>
	);
}



{/**inline-block transition transform duration-200 ease-in-out hover:scale-105 
    m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block hover:shadow-xl*/}