import { images } from "../assets/images";
import Card from "../components/Card";

export default function Hobby() {
    {/**sistemare i link */}
    const videogames = [
        {gameName: images.witness, link: "https://store.steampowered.com/app/210970/The_Witness/"},
        {gameName: images.portal, link: "https://store.steampowered.com/app/620/Portal_2/"},
        {gameName: images.talos, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
        {gameName: images.knight, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
        {gameName: images.jusant, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
    ];

    const novels = [
        {novelName: images.chess},
        {novelName: images.esistenza},
        {novelName: images.ombra},
    ];

    const video = [
        {videoName: images.classifica,},
        {videoName: images.indiekick},
        {videoName: images.indiesedano},
    ];


  return (
    <div className="max-w-5xl mx-auto mt-15 px-6">
        <div className="items-center">
                <h1 className="text-4xl font-bold">
                    Videogiochi
                </h1>
                <p className="mt-3 ml-3 mr-15 text-justify max-w-sm md:max-w-xl text-xl">
                    I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
                </p>
                <h1 className="text-3xl font-semibold mt-5">
                    I miei preferiti
                </h1>
                <div className="flex flex-wrap gap-0 items-start justify-center md:justify-start">
                    {videogames.map((c, i) => (
                        <Card
                            key={i}
                            name={c.gameName}
                            variant="gameCard"
                            link={c.link}/>
                    ))}
                </div>

            <div className="md:mr-45 mt-15 flex flex-col items-end">
                <h1 className="text-4xl font-bold text-right">
                    Scrittura
                </h1>
                <p className="mr-3 mt-3 ml-15 text-justify max-w-sm md:max-w-xl text-xl">
                    I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
                </p>
                <h1 className="text-3xl font-semibold mt-5">
                    I miei racconti
                </h1>
                <div className="flex flex-wrap gap-1 md:gap-5 justify-center md:justify-start">
                    {novels.map((c, i) => (
                        <Card key={i} name={c.novelName} variant="bookCard"/>
                    ))}
                </div>
            </div>

             {/**border-2 border-dark-brown rounded-4xl p-5 w-350 bg-white*/}
            <h1 className="text-4xl font-bold mt-15">
                Editing video
            </h1>
            <p className="mt-3 ml-3 mr-15 text-justify max-w-sm md:max-w-xl text-xl">
                I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
            </p>
            <h1 className="text-3xl font-semibold mt-5">
                I miei video
            </h1>
            <div className="flex flex-wrap md:gap-3 items-start justify-center md:justify-start">
                {video.map((c, i) => (
                    <Card key={i} name={c.videoName} variant="videoCard"/>
                ))}
            </div>
        </div>
    </div>
  )
}



{/*src = nome comando, name = nome parametro, gameName = nome oggetto passato */}