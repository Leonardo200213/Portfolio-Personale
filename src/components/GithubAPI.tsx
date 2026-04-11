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
    <div>
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.html_url}
          className="flex flex-col bg-white rounded-3xl justify-center items-center h-30 m-5"
        >
          <h1 className="font-bold">{project.name}</h1>
          <p>{project.description}</p>
          <div>
            <span>
              <FontAwesomeIcon icon={faFileCode} />
              {project.language}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
