import SymfonyIcon from "./icons/symfony-icon";
import RabbitmqIcon from "./icons/rabbitmq-icon";
import PostgresIcon from "./icons/postgres-icon";
import DockerIcon from "./icons/docker-icon";
import GlobeIcon from "./icons/globe-icon";
import GithubIcon from "./icons/github-icon";
import { JSX } from "react";
import JsIcon from "./icons/js-icon";
import NuxtIcon from "./icons/nuxt-icon";
import PhpIcon from "./icons/php-icon";
import TailwindIcon from "./icons/tailwind-icon";
import TsIcon from "./icons/ts-icon";
import MysqlIcon from "./icons/mysql-icon";

type Project = {
  name: string
  description: string
  githubLink?: string
  demoLink?: string
  techStack: (keyof typeof techIcons)[]
}

const techIcons: Record<string, JSX.Element> = {
  Docker: <DockerIcon className="w-8 h-8 md:w-12 md:h-12" />,
  JavaScript: <JsIcon className="w-8 h-8 md:w-12 md:h-12" />,
  MySQL: <MysqlIcon className="w-8 h-8 md:w-12 md:h-12" />,
  Nuxt: <NuxtIcon className="w-8 h-8 md:w-12 md:h-12" />,
  PHP: <PhpIcon className="w-8 h-8 md:w-12 md:h-12" />,
  'Tailwind CSS': <TailwindIcon className="w-8 h-8 md:w-12 md:h-12" />,
  TypeScript: <TsIcon className="w-8 h-8 md:w-12 md:h-12" />,
  Symfony: <SymfonyIcon className="w-8 h-8 md:w-12 md:h-12" />,
  RabbitMQ: <RabbitmqIcon className="w-8 h-8 md:w-12 md:h-12" />,
  PostgreSQL: <PostgresIcon className="w-8 h-8 md:w-12 md:h-12" />,
}

export default function ProjectsCard({project}: {project: Project}) {
  return (
    <div className="bg-black/70 rounded-xl text-center m-1 w-full relative border border-gray-700">
      <div className="p-2">
        <span className="text-xl md:text-2xl">{project.name}</span>
      </div>
      <div className="p-2 md:p-4">
        <span className="text-xs md:text-sm">
          {project.description}
        </span>
      </div>
      <div className="flex flex-row p-1 md:p-2 justify-around flex-wrap">
        {project.techStack.map(tech => (
          <div className="flex flex-col items-center" key={tech}>
            <div>{techIcons[tech]}</div>
            <div><span className="text-[0.6rem] md:text-xs font-thin">{tech}</span></div>
          </div>
        ))}
      </div>
      <div className="flex flex-row justify-around md:justify-end gap-2 p-2 md:absolute md:top-0 md:right-0">
        {project.demoLink && (<a href={project.demoLink} target="_blank">
          <GlobeIcon className="w-12 h-12"/>
        </a>)}
        {project.githubLink && (<a href={project.githubLink} target="_blank">
          <GithubIcon className="w-12 h-12"/>
        </a>)}
      </div>
    </div>
  );
}