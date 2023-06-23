import { component$, useSignal, $ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';
import { type ISpacexLaunchSmall } from "~/interface/spacexLaunchSmall";
import { Modal } from "../shared/modal/modal";


interface IProps {
  launch: ISpacexLaunchSmall
}


export const LaunchesItem = component$(({ launch }: IProps) => {
  const showModal = useSignal(false)

  const showModalCallback = $(() => {
    showModal.value = true
  });

  const closeModalCallback = $(() => {
    showModal.value = false
  });


  return (

    <>
      <div
        class='flex items-center hover:bg-gray-700'
        onClick$={() => { showModalCallback() }}>
        <div class='w-1/12 text-center hidden md:block'>{launch.flight_number}</div>
        <div class='w-3/12'>{launch.mission_name}</div>
        <div class='w-3/12 md:w-2/12'>{launch.launch_year}</div>
        <div class='w-3/12'>{launch.rocket_name}</div>
        <div class='w-2/12 flex justify-center '>
          <Image
            src={launch.link_mission_patch_small}
            alt={'img'}
            width={45}
            height={45}
            class='round-50 cover'
          />
        </div>
      </div>

      <Modal
        showModal={showModal.value}
        closeModal={closeModalCallback}
        size='w-8/12 md:w-6/12'
      >
        <span q:slot='title' class='text-blue-700'>Launch</span>

        <div q:slot='content' class='flex flex-col w-full'>
          {/* Logo and title */}
          <div class="flex flex-row items-center space-x-3">
            <div class="w-[45%] h-28 flex ">
              <Image
                class=''
                alt={'img'}
                height={100}
                priority={false}
                src={launch.link_mission_patch_small}
                width={100}
              />
            </div>
            <div class="w-[55%] text-xl md:text-3xl font-bold flex uppercase ">
              {launch.mission_name}
            </div>
          </div>

          {/* datos y video */}
          <div class="flex flex-col md:flex-row mt-3 space-y-3 md:space-x-3 ">
            {/* video */}
            <div class="w-full md:w-[45%]">
              {
                <video src={launch.video_link} controls={true} />
              }

            </div>

            {/* datos */}
            <div class="w-full md:w-[55%] text-md text-left text-gray-800">
              <div class="flex space-x-2">
                <div class='w-2/5'>Flight number:</div>
                <div class="w-3/5">{launch.flight_number}</div>
              </div>
              <div class="flex space-x-2">
                <div class='w-2/5'>Nombre Misión:</div>
                <div class='w-3/5'>{launch.mission_name}</div>
              </div>
              <div class="flex space-x-2">
                <div class='w-2/5'>Lanzamiento:</div>
                <div class='w-3/5'>{launch.launch_year}</div>
              </div>
              <div class="flex space-x-2">
                <div class='w-2/5'>Cohete:</div>
                <div class='w-3/5'>{launch.rocket_name}</div>
              </div>
            </div>

          </div>
        </div>

      </Modal>
    </>
  )
})