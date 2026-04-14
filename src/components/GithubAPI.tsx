import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileCode } from "@fortawesome/free-solid-svg-icons";

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  html_url: string;
  topics?: string[];
}

export default function GithubAPI() {
  const [projects, setProjects] = useState<GithubRepo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Leonardo200213/repos")
      .then((res) => res.json())
      .then((data: GithubRepo[]) => {
        const filtered = data.filter((singleRepo) =>
          singleRepo.topics?.includes("featured"),
        );

        setProjects(filtered);
      });
  }, []); //solo una volta all'aggiornamento del componente

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(384px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(384px,1fr))] gap-5 md:max-w-4xl">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.html_url}
          className="flex flex-col w-full bg-white rounded-3xl justify-center items-center h-30
          shadow-2xl p-5 transition transform duration-200 ease-in-out cursor-pointer hover:scale-103"
        >
          <h1 className="font-semibold text-xl">{project.name}</h1>
          <p className="text-lg">{project.description}</p>
          <div>
            <span className="text-md">
              <FontAwesomeIcon icon={faFileCode} />
              {project.language}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
