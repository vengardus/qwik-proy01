import { component$ } from "@builder.io/qwik";
import { type ISpacexLaunchSmall } from "~/interface/spacexLaunchSmall";
import { LaunchesItem } from "./launchesItem";

interface IProps {
    launches: ISpacexLaunchSmall[]
}

export const LaunchesList = component$(({launches}:IProps) => {
  return (
    <>
      {/* header */}
      <div class='flex items-center bg-gray-800 text-gray-200 py-2'>
        <div class='w-1/12 text-center hidden  md:block'># vuelo</div>
        <div class='w-3/12 whitespace-pre-wrap '>Nombre misión</div>
        <div class='w-3/12 md:w-2/12'>Año lanzam.</div>
        <div class='w-3/12'>Nombre Cohete</div>
        <div class='w-2/12 flex justify-center'>Logo</div>
      </div>
      {/* Items */}
      <div class="flex flex-col space-y-7">
        {
          launches.map((launch) => (
            <LaunchesItem key={launch.flight_number} launch={launch} />
          ))
        }
      </div>

    </>
  )
});