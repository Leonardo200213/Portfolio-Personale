import { images } from "../assets/images";
import Card from "../components/Card";

export default function Hobby() {
  const videogames = [
    {
      gameName: images.witness,
      link: "https://store.steampowered.com/app/210970/The_Witness/",
    },
    {
      gameName: images.portal,
      link: "https://store.steampowered.com/app/620/Portal_2/",
    },
    {
      gameName: images.talos,
      link: "https://store.steampowered.com/app/835960/The_Talos_Principle_2/",
    },
    {
      gameName: images.knight,
      link: "https://store.steampowered.com/app/367520/Hollow_Knight/",
    },
    {
      gameName: images.jusant,
      link: "https://store.steampowered.com/app/1977170/Jusant/",
    },
    {
      gameName: images.layton,
      link: "https://www.nintendo.com/it-ch/Notizie/2011/Ora-nei-negozi-Il-professor-Layton-e-il-futuro-perduto-253091.html?srsltid=AfmBOopjsZy8GMaqjw8a_5ZHTIK4Ve-FbzGZv_I2Uy0d7yHR7BCw2n37",
    },
  ];

  const novels = [
    {
      novelName: images.chess,
      link: "https://docs.google.com/document/d/1ao2a7RsWZvqVHe7TZOfRldrnTviyNwiITUnxzKVFd1U/edit?usp=sharing",
    },
    {
      novelName: images.esistenza,
      link: "https://docs.google.com/document/d/1lJEyCRPtICRn8AHjtH9nn5rmr96Hnps-aGBbzZlTUnU/edit?usp=sharing",
    },
    {
      novelName: images.ombra,
      link: "https://docs.google.com/document/d/1G9t9R2zTOQleC4ggFkCQtcXX81tya7QNkydF2kKgOvs/edit?usp=sharing",
    },
  ];

  const video = [
    { videoName: images.classifica, link: "https://youtu.be/yONedb-4qck" },
    { videoName: images.indiekick, link: "https://youtu.be/BxyJvFUrLmI" },
    { videoName: images.indiesedano, link: "https://youtu.be/mrgz2Jr54lE" },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-15">
      <div className="items-center ml-10">
        <h1 className="text-4xl font-bold md:ml-0">Videogiochi</h1>
        <p className="my-5 ml-3 mr-15 text-justify text-xl">
          I <b>videogiochi</b> sono sempre stati il mio passatempo principale
          fin da piccolo. Spazio tra quasi tutti i generi videoludici ma
          preferisco quelli con elementi puzzle ed enigmi, storie coinvolgenti e
          meccaniche originali che mettono alla prova.
        </p>
        <h1 className="text-3xl font-semibold mt-10">I miei preferiti</h1>
        <div className="flex flex-wrap gap-0 items-start justify-center my-2 mr-10 md:mr-0 md:justify-start">
          {videogames.map((c, i) => (
            <Card key={i} name={c.gameName} variant="gameCard" link={c.link} />
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-25">Scrittura</h1>
        <p className="my-5 ml-3 mr-15 text-justify text-xl">
          Con la scrittura ho modo di raccontare storie e dare forma ai
          personaggi e mondi che immagino. Mi piace molto creare
          <b>esperienze coinvolgenti</b> che lascino qualcosa al lettore, con un
          tocco di originalità personale.
        </p>
        <h1 className="text-3xl font-semibold mt-10">I miei racconti</h1>
        <div className="flex flex-wrap gap-1 md:gap-5 justify-center my-2 mr-5 md:justify-start">
          {novels.map((c, i) => (
            <Card key={i} name={c.novelName} variant="bookCard" link={c.link} />
          ))}
        </div>

        <h1 className="text-4xl font-bold mt-25">Editing video</h1>
        <p className="my-5 ml-3 mr-15 text-justify text-xl">
          La creazione e l'editing video sono un modo con cui posso dare forma
          alle mie idee raccontandole in modo visivo. Su <b>Youtube</b> realizzo
          contenuti su videogiochi poco conosciuti, con un approccio informale e
          leggero, che mi ha aiutato ad aprirmi e migliorare la mia parlata.
        </p>
        <h1 className="text-3xl font-semibold mt-10">I miei video</h1>
        <div className="flex flex-wrap md:gap-3 items-start justify-center mt-2 md:justify-start mr-10">
          {video.map((c, i) => (
            <Card
              key={i}
              name={c.videoName}
              variant="videoCard"
              link={c.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /*src = nome comando, name = nome parametro, gameName = nome oggetto passato */
}
