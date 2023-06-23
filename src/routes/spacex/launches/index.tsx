import { component$, useComputed$ } from '@builder.io/qwik';
import { type DocumentHead, routeLoader$, useLocation, Link } from '@builder.io/qwik-city';
import { SPACEX_LAUNCHES_LIST_LIMIT } from '~/components/spacex/data';
import { LaunchesList } from '~/components/spacex/launchesList';
import { getSmallSpacexLaunch } from '~/helpers/getSmallSpacexLaunch';
import { type ISpacexLaunchSmall } from '~/interface/spacexLaunchSmall';

export const useSpacexLaunchesList = routeLoader$<ISpacexLaunchSmall[]>(async ({ query, redirect, pathname }) => {
  const offset = Number(query.get('offset') || '0')
  console.log('get', offset, pathname)
  if (offset < 0 || isNaN(offset)) {
    console.log('redirect')
    redirect(301, pathname)
    return []
  }
  console.log('get2', offset, typeof(offset))
  return await getSmallSpacexLaunch(offset)
})


export default component$(() => {
  const location = useLocation()
  
  const currentOffset = useComputed$<number>(() => {
    const offSetString = new URLSearchParams(location.url.search)
    console.log('string', offSetString.get('offset'))
    const offSetNumber = Number(offSetString.get('offset') || 0);
    console.log(offSetNumber)
    return (offSetNumber > 0)? offSetNumber : 0
  });

  const launches = useSpacexLaunchesList().value


  return (
    <section class='flex flex-col space-y-3 pb-3 pl-2'>
      <h1 class='text-2xl font-bold'>Launches</h1>
      {
        location.isNavigating
          ? <div>Loading...</div>
          : <LaunchesList launches={launches} />
      }
      <div class='flex mt-4 justify-center w-full space-x-5'>
        <Link href={`http://localhost:5173/spacex/launches/?offset=${currentOffset.value - SPACEX_LAUNCHES_LIST_LIMIT}`}
          class={`btn btn-primary bg-orange-500 text-gray-800 hover:bg-orange-700 hover:text-white 
          ${(currentOffset.value - SPACEX_LAUNCHES_LIST_LIMIT)<0? 'hidden':'block'}`}>
          Anteriores
        </Link>
        <Link href={`http://localhost:5173/spacex/launches/?offset=${currentOffset.value + SPACEX_LAUNCHES_LIST_LIMIT}`}
          class='btn btn-primary bg-orange-500 text-gray-800 hover:bg-orange-700 hover:text-white'>
          Siguientes
        </Link>
      </div>
    </section>
  )
});

export const head: DocumentHead = {
  title: 'Qwik: SpaceX Launches',
  // meta: [
  //   {
  //     name: 'qwik-proy01',
  //     content: 'this is my first app in qwik',
  //   },
  // ],
};