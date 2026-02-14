import witness from "../assets/witness.jpg";
import knight from "../assets/knight.png";
import portal from "../assets/portal2.jpg";
import talos from "../assets/talos2.jpg";
import jusant from "../assets/jusant.jpg";
import Card from "../components/Card";

export default function Hobby() {
  const videogiochi = [
    {gameName: witness},
    {gameName: portal},
    {gameName: talos},
    {gameName: knight},
    {gameName: jusant},
  ];

  return (
    <>
        <div className="ml-10 md:ml-50 mt-25 text-left">
            <h1 className="text-4xl font-bold">
                Videogiochi
            </h1>
            <p className="mt-3 ml-3 mr-15 text-justify max-w-sm md:max-w-xl">
                I videogiochi sono il mio passatempo preferito fin da piccolo. Adoro i titoli di (quasi) ogni genere ma con particolare interesse verso quelli puzzle e gameplay interessanti e avvincenti.
            </p>
            <h1 className="text-2xl font-semibold mt-5">
                I miei preferiti
            </h1>
            <div className="flex flex-wrap gap-0 items-start cursor-pointer">
                {videogiochi.map((c, i) => (
                    <Card key={i} name={c.gameName} variant="gameCard"/>
                ))}
            </div>
        </div>

        <div className="mr-10 md:mr-50 mt-25 text-right">
            <span className="text-4xl font-bold">
                Scrittura
            </span>
            <p className="mt-3">
                I miei racconti
            </p>
        </div>
    </>
  )
}



{/*src = nome comando, name = nome parametro, gameName = nome oggetto passato */}