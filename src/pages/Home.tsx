import foto from "../assets/images/foto.jpg";
import CV from "/CV.pdf";
import { images } from "../assets/images";
import CardLink from "../components/CardLink.tsx";

export default function Home() {
  const linkPage = [
    {
      iconImg: images.pdf,
      link: CV,
      title: "Curriculum",
      subtitle: "Scarica il mio CV",
    },
    {
      iconImg: images.github,
      link: "https://github.com/Leonardo200213",
      title: "GitHub",
      subtitle: "I miei progetti in sviluppo",
    },
    {
      iconImg: images.linkedin,
      link: "https://www.linkedin.com/in/leonardo-messeri-21568921a/",
      title: "LinkedIn",
      subtitle: "Profilo professionale e percorso lavorativo",
    },
  ];

  const linkContact = [
    {
      iconImg: images.email,
      link: "mailto:leomesseri98@gmail.com",
      title: "leomesseri98@gmail.com",
      subtitle: "Email",
    },
    {
      iconImg: images.phone,
      link: "tel:+393393592635",
      title: "339 359 2635",
      subtitle: "Cellulare",
    },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto mt-15">
        <h1 className="text-4xl font-bold ml-10 md:ml-0">Chi sono</h1>
        <div className="flex flex-col justify-center items-center md:flex-row md:items-center">
          <img src={foto} className="rounded-3xl w-65 m-3 shadow-xl " />
          <div className="m-5 ml-13 mr-15 max-w-sm md:max-w-xl text-xl text-justify space-y-8">
            <p>
              Mi chiamo <b>Leonardo Messeri</b>, sono una persona curiosa e
              creativa e attento ai dettagli. Sin dall'infanzia nutro forte
              passione verso l'ambito tecnologico e videoludico che mi hanno
              spinto a studiare informatica presso l'istituto ITIS Meucci
              (2021), diplomandomi come Perito Informatico.
            </p>

            <p>
              Dopo la scuola ho ampliato i miei interessi in altri ambiti
              creativi come la scrittura, il disegno e la produzione di video su
              Youtube che mi hanno aiutato a sviluppare immaginazione,
              precisione e capacità di esprimermi al meglio.
            </p>

            <p>
              Ho iniziato a lavorare desideroso di immergermi nel mondo del
              lavoro alla ricerca del percorso adatto a me. Attualmente lavoro
              presso Esaote come operaio metalmeccanico, ma continuo a esplorare
              opportunità nel mio campo di studi, con particolare interesse per
              lo <b>sviluppo front-end</b>.
            </p>
          </div>
        </div>
      </div>

      {/*link */}
      <div className="max-w-4xl mx-auto mt-20">
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto w-full px-4 mb-20">
          {linkPage.map((c, i) => (
            <div
              key={i}
              className={
                i === linkPage.length - 1
                  ? "md:col-span-2 justify-self-center max-w-105.5"
                  : ""
              }
            >
              <CardLink
                key={i}
                icon={c.iconImg}
                link={c.link}
                title={c.title}
                subtitle={c.subtitle}
                size="normal"
              />
            </div>
          ))}
        </div>
      </div>

      {/*contatti */}
      <div className="max-w-4xl mx-auto mt-20">
        <h1 className="text-4xl font-bold ml-15 md:ml-0">Contatti</h1>
        <div className="grid md:grid-cols-2 gap-5 w-full px-4 my-8 mb-15">
          {linkContact.map((c, i) => (
            <CardLink
              key={i}
              icon={c.iconImg}
              link={c.link}
              title={c.title}
              subtitle={c.subtitle}
              size="small"
            />
          ))}
        </div>
      </div>
    </>
  );
}

{
  /*<div className="flex items-center justify-center border-2 rounded-3xl">
    linnkedin
</div>
<div className="flex items-center justify-left border-0 shadow-xl rounded-3xl bg-white transition transform duration-200 ease-in-out cursor-pointer hover:scale-105 hover:shadow-black/30">
    <img src={github} className="m-5 mx-8 w-25"/>
    <div className="flex flex-col">
        <h1 className="font-bold text-2xl">GitHub</h1>
        <h1>Progetti e idee</h1>
    </div>
</div>*/
}
