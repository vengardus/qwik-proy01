import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { Link } from "@builder.io/qwik-city";
import { type IMenuOption } from "../shared/navbar/data";

interface IProps {
  project: IMenuOption
}

export const ProjectCard = component$(({ project }:IProps) => {
  return (
    <Link
      href={project.href}
    >
      <div class='max-w-sm bg-gray-800 rounded-lg overflow-auto 
          shadow-lg my-4 hover:bg-gray-300 h-[40rem]
          text-gray-200 hover:text-gray-800
          '>
        <div class="w-full h-[25rem]">
          <Image 
              class='h-full max-h-[28rem] object-fixed'
              src={`/assets/img/projects/${project.image}`} 
              alt={project.title} 
              width={450}
              height={450}
          />
        </div>
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2 '>{project.title}</div>
          <p class='text-base 1h-[7rem]'>{project.description}</p>
          <p class='text-base italic mt-2 1h-[4rem]'>{project.detail}</p>
        </div>
      </div>
    </Link>
  )
});