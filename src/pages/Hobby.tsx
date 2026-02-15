import witness from "../assets/witness.jpg";
import knight from "../assets/knight.png";
import portal from "../assets/portal2.jpg";
import talos from "../assets/talos2.jpg";
import jusant from "../assets/jusant.jpg";
import Card from "../components/Card";
import chess from "../assets/chess.png";
import esistenza from "../assets/esistenza.png";
import ombra from "../assets/ombra.png";

export default function Hobby() {
    {/**sistemare i link */}
    const videogames = [
        {gameName: witness, link: "https://store.steampowered.com/app/210970/The_Witness/"},
        {gameName: portal, link: "https://store.steampowered.com/app/620/Portal_2/"},
        {gameName: talos, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
        {gameName: knight, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
        {gameName: jusant, link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/"},
    ];

    const novels = [
        {novelName: chess},
        {novelName: esistenza},
        {novelName: ombra},
    ];


  return (
    <>
        <div className="ml-10 md:ml-45 mt-15 text-left"> {/**border-2 border-dark-brown rounded-4xl p-5 w-350 bg-white*/}
            <h1 className="text-4xl font-bold">
                Videogiochi
            </h1>
            <p className="mt-3 ml-3 mr-15 text-justify max-w-sm md:max-w-xl">
                I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
            </p>
            <h1 className="text-2xl font-semibold mt-5">
                I miei preferiti
            </h1>
            <div className="flex flex-wrap gap-0 items-start">
                {videogames.map((c, i) => (
                    <Card key={i} name={c.gameName} variant="gameCard" link={c.link}/>
                ))}
            </div>
        </div>

        <div className="md:mr-45 mt-15 flex flex-col items-end">
            <h1 className="text-4xl font-bold text-right">
                Scrittura
            </h1>
            <p className="mr-3 mt-3 text-right max-w-sm md:max-w-xl">
                I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
            </p>
            <h1 className="text-2xl font-semibold mt-5">
                I miei racconti
            </h1>
            <div className="flex flex-wrap gap-25 items-start">
                {novels.map((c, i) => (
                    <Card key={i} name={c.novelName} variant="bookCard"/>
                ))}
            </div>
        </div>
    </>
  )
}



{/*src = nome comando, name = nome parametro, gameName = nome oggetto passato */}