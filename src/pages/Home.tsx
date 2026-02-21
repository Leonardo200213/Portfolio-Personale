import github from "../assets/images/github.png"
import foto from "../assets/images/foto.jpg"

export default function Home() {
    return(
        <>
            <div className="flex justify-center m-5">
                <img src={foto} className="rounded-3xl w-50 m-5"/>
                <h1 className="m-5 max-w-sm md:max-w-xl">
                    Mi sono diplomato presso ITIS Meucci nel 2021.
                    Sin dall' infanzia una forte passione videoludica e per le nuove tecnologie mi porta avanti. Mi definisco un ragazzo tranquillo e riservato per il lavoro in solitaria ma sempre pronto ad imparare e mettermi in gioco.
                </h1>
            </div>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto w-full px-4">
                <div className="flex items-center justify-center border-2 rounded-3xl">
                    linnkedin
                </div>
                <div className="flex items-center justify-left border-0 shadow-xl rounded-3xl bg-white transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 hover:shadow-black/30">
                    <img src={github} className="m-5 mx-8 w-25"/>
                    <div className="flex flex-col">
                        <h1 className="font-bold text-2xl">GitHub</h1>
                        <h1>Progetti e idee</h1>
                    </div>
                </div>
            </div>
        </>
    )
}