import witness from "../assets/witness.jpg"
import knight from "../assets/knight.png"
import portal from "../assets/portal2.jpg"
import talos from "../assets/talos2.jpg"
import jusant from "../assets/jusant.jpg"

export default function Hobby() {
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
            <div className="flex flex-wrap gap-0 items-start cursor-pointer">      {/*per disporre affiancate le card e metterle a capo dinamicamente*/}
                <div className="inline-block transition transform duration-200 ease-in-out hover:scale-105">
                    <img src={witness} className="m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block"/>
                </div>
                <div className="inline-block transition transform duration-200 ease-in-out hover:scale-105">
                    <img src={portal} className="m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block"/>
                </div>
                <div className="inline-block transition transform duration-200 ease-in-out hover:scale-105">
                    <img src={talos} className="m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block"/>
                </div>
                <div className="inline-block transition transform duration-200 ease-in-out hover:scale-105">
                    <img src={knight} className="m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block"/>
                </div>
                <div className="inline-block transition transform duration-200 ease-in-out hover:scale-105 last:mx-16 md:last:mx-0">
                    <img src={jusant} className="m-3 w-26 h-35 md:w-35 md:h-50 rounded-md block"/>
                </div>
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
