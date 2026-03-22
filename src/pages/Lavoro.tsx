import { images } from "../assets/images";
import CardWork from "../components/CardWork";
import CardCourse from "../components/CardCourse";

export default function Lavoro() {
  const courses = [
    { title: "TypeScript", hour: 4, year: 2025 },
    { title: "Tailwind CSS", hour: 5, year: 2025 },
    { title: "React", hour: 7, year: 2025 },
    { title: "Python", hour: 4, year: 2024 },
    { title: "Tech Camp Gaming", hour: 6, year: 2024 },
  ];

  return (
    <>
      <div className="max-w-4xl mx-auto mt-15">
        <h1 className="text-4xl font-bold ml-10 md:ml-0">Lavoro</h1>

        <div className="my-10">
          <CardWork
            logo={images.esaote}
            company="Esaote"
            role="Operaio metalmeccanico"
            period="Dal 22/04/2022"
            description="Assemblaggio di sonde biomedicali"
          />
        </div>

        <div className="my-10">
          <CardWork
            logo={images.rgis}
            company="RGIS"
            role="Inventarista"
            period="Dal 04/10/2021 a 28/10/2022"
            description="Addetto al conteggio di prodotti per inventario"
          />
        </div>

        <h1 className="text-4xl font-bold ml-10 md:ml-0 mt-15">Corsi</h1>

        <div className="flex flex-wrap justify-center gap-5">
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

      <div className="max-w-4xl mx-auto mt-15">
        <h1 className="text-4xl font-bold ml-10 md:ml-0">Corsi</h1>
        <div className="justify-center ">
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            Typescript 4 ore
          </h1>
          <h1>2025</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            Tailwind 5 ore
          </h1>
          <h1>2025</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            React 7 ore
          </h1>
          <h1>2025</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            Python 4 ore
          </h1>
          <h1>2024</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            Tech camp gaming 6 ore
          </h1>
          <h1>2024</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            Metodologia 5S e team building
          </h1>
          <h1>2023</h1>
          <h1 className="m-5 ml-13 md:ml-5 mr-15 max-w-sm md:max-w-5xl text-xl">
            PCTO Samsung Let's App 4 ore
          </h1>
          <h1>2020</h1>
        </div>
      </div>
    </>
  );
}
