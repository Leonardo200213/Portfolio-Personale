import { images } from "../assets/images";
import CardWork from "../components/CardWork";
import CardCourse from "../components/CardCourse";
import GithubAPI from "../components/GithubAPI";

export default function Lavoro() {
  const courses = [
    { title: "TypeScript", hour: 4, year: 2025 },
    { title: "Tailwind CSS", hour: 5, year: 2025 },
    { title: "React", hour: 7, year: 2025 },
    { title: "Python", hour: 4, year: 2024 },
    { title: "Tech Camp Gaming", hour: 6, year: 2024 },
    { title: "Metodologia 5S e team building", hour: 6, year: 2023 },
    { title: "PCTO Samsung Let's App", hour: 6, year: 2020 },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto mt-15">
        <h1 className="text-4xl font-bold ml-10 md:ml-0">Lavoro</h1>

        <div className="my-8">
          <CardWork
            logo={images.esaote}
            company="Esaote"
            role="Operaio metalmeccanico"
            period="Dal 22/04/2022"
            description="Assemblaggio di sonde biomedicali"
            link="https://www.esaote.com/it-IT/"
          />
        </div>

        <div className="my-8">
          <CardWork
            logo={images.rgis}
            company="RGIS"
            role="Inventarista"
            period="Dal 04/10/2021 a 28/10/2022"
            description="Addetto al conteggio di prodotti per inventario"
            link="https://www.rgis.it"
          />
        </div>

        <h1 className="text-4xl font-bold ml-10 md:ml-0 mt-20">Progetti</h1>
        <GithubAPI />

        <h1 className="text-4xl font-bold ml-10 md:ml-0 mt-20">Corsi</h1>
        <div className="flex flex-wrap justify-center gap-5 mt-8 text-center">
          {courses.map((courses, i) => (
            <CardCourse
              key={i}
              title={courses.title}
              hour={courses.hour}
              year={courses.year}
            />
          ))}
        </div>
      </div>
    </>
  );
}
