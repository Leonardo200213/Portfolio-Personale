import foto from "../assets/images/foto.jpg"
import { images } from "../assets/images";
import CardLink from "../components/CardLink.tsx"

export default function Home() {

    const linkPage = [
        {
            iconImg: images.linkedin,
            link: "ciao",
            title: "LinkedIn",
            subtitle: "Lorem ipsum dolor",
        },
        {
            iconImg: images.linkedin,
            link: "ciao",
            title: "Indeed",
            subtitle: "Lorem ipsum dolor",
        },
        {
            iconImg: images.pdf,
            link: "ciao",
            title: "Curriculum ",
            subtitle: "Lorem ipsum dolor",
        },
        {
            iconImg: images.github,
            link: "https://github.com/Leonardo200213",
            title: "GitHub",
            subtitle: "I miei progetti e idee",
        },
    ];

    return(
        <>
            <div className="max-w-4xl mx-auto mt-15">
                <h1 className="text-4xl font-bold ml-10 md:ml-0">Chi sono</h1>
                <div className="flex flex-col justify-center items-center md:flex-row md:items-start">
                    <img src={foto} className="rounded-3xl w-50 m-5 shadow-xl"/>
                    <h1 className="m-5 ml-13 mr-15 max-w-sm md:max-w-xl text-xl text-justify">
                        Mi chiamo Leonardo Messeri, sono una persona curiosa e creativa, pronto a imparare cose nuove che mi coinvolgono con entusiasmo e attenzione ai dettagli.
                        Sin dall'infanzia nutro una forte passione per l'ambito tecnologico e videoludico che mi hanno spinto a studiare informatica presso l'istituto ITIS Meucci, diplomandomi nel 2021 come Perito Informatico.
                        Dopo la scuola ho ampliato i miei interessi in altri ambiti creativi come la scrittura, il disegno e la produzione di video su Youtube che mi hanno aiutato a sviluppare
                        immaginazione, precisione e capacità di esprimermi al meglio.
                        Ho iniziato a lavorare immediatamente dopo il diploma, desideroso di immergermi nel mondo del lavoro alla ricerca del percorso giusto per me. Attualmente lavoro presso Esaote come operaio metalmeccanico,
                        ma continuo a esplorare opportunità nel mio campo di studi, con particolare interesse per lo sviluppo front-end.
                        
                        Mi definisco un ragazzo tranquillo e riservato per il lavoro in solitaria ma sempre pronto ad imparare e mettermi in gioco.
                    </h1>
                </div>
            </div>
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold py-5 ml-10 md:ml-0">Contatti</h1>
                <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full px-4 mb-20">
                    {linkPage.map((c, i) => (
                        <CardLink
                            key={i}
                            icon={c.iconImg}
                            link={c.link}
                            title={c.title}
                            subtitle={c.subtitle}
                            />
                    ))}
                </div>
            </div>
        </>
    )
}

{/*<div className="flex items-center justify-center border-2 rounded-3xl">
    linnkedin
</div>
<div className="flex items-center justify-left border-0 shadow-xl rounded-3xl bg-white transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 hover:shadow-black/30">
    <img src={github} className="m-5 mx-8 w-25"/>
    <div className="flex flex-col">
        <h1 className="font-bold text-2xl">GitHub</h1>
        <h1>Progetti e idee</h1>
    </div>
</div>*/}