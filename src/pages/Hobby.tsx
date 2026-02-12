import witness from "../assets/witness.jpg"

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
            <h1 className="text-2xl font-semibold mt-3">
                I miei preferiti
            </h1>
            <div className="grid grid-cols-3 md:grid-cols-5">
                <img src={witness} className="m-3 transition transform duration-250 ease-in-out hover:scale-105"/>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
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
