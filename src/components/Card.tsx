type CardProps = {
  name: string;
  link?: string;
  variant: "gameCard" | "bookCard" | "videoCard";
};

export default function Card({ name, variant, link }: CardProps) {
  const variantClass = {
    gameCard:
      "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-2 w-32 h-43 md:w-35 md:h-50 block shadow-lg hover:shadow-2xl rounded-lg",
    bookCard:
      "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-2 mt-3 w-35 h-45 md:w-54 md:h-64 md:m-3 bg-white rounded-lg block shadow-lg hover:shadow-xl",
    videoCard:
      "transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 m-3 w-60 h-35 md:w-60 md:m-3 block hover:shadow-2xl shadow-lg rounded-lg shadow-black/30",
  };

  return (
    <div
      onClick={() => window.open(link, "_blank")}
      className={`inline-block ${variantClass[variant]}`}
    >
      <img src={name} className="w-full h-full rounded-lg" />
    </div>
  );
}

{
  /**inline-block transition transform duration-200 ease-in-out hover:scale-105 
    m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block hover:shadow-xl*/
}
