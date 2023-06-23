import { type ISpacexLaunchListResponse } from '~/interface/spacexLaunchListResponse';
import { type ISpacexLaunchSmall } from '~/interface/spacexLaunchSmall';
import { SPACEX_LAUNCHES_LIST_LIMIT } from '~/components/spacex/data';

const URL_BASE = 'https://api.spacexdata.com/v3/launches'


export const getSmallSpacexLaunch= async(offset:number=0, limit:number=SPACEX_LAUNCHES_LIST_LIMIT): Promise<ISpacexLaunchSmall[]> => {
  console.log('getSmall', offset)
  const resp = await fetch(`${URL_BASE}?limit=${limit}&offset=${offset}`)
  const data = await resp.json() as ISpacexLaunchListResponse[]
  // console.log(data.length)

  return data.map(launch => {
    return {
      flight_number: launch.flight_number,
      launch_year: launch.launch_year,
      mission_name: launch.mission_name,
      rocket_name: launch.rocket.rocket_name,
      link_mission_patch_small: launch.links.mission_patch_small,
      video_link: launch.links.video_link
    }
  })
}