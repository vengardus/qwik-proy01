import { component$ } from "@builder.io/qwik";
import { navigationMenu as options} from "../shared/navbar/data";
import { ProjectCard } from "./ProjectCard";

export const PortafolioList = component$(() => {
  return (
    <div class='container mx-auto flex justify-center'>
      <div class='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {options.filter(x => x.isProject)
          .map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </div>
  )
});