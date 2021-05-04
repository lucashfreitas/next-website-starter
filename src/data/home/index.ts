import { FetchData } from '../data.types';
import getGlobalData, { GlobalData } from '../global';
import { SEOData } from '../seo';
import homeData from './home.json';

export interface HomePageData {
  seo: SEOData;
  global: GlobalData;
}

const getHomePageData: FetchData<HomePageData> = async () => {
  const global = await getGlobalData();

  return new Promise<HomePageData>((resolve, reject) =>
    resolve({
      global,
      seo: {
        title: homeData.seo.title,
        description: homeData.seo.description,
      },
    }),
  );
};

export default getHomePageData;
