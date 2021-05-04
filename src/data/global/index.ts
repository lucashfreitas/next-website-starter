import { FetchData } from '../data.types';
import getHeaderData, { HeaderData } from './header';

export interface GlobalData {
  header: HeaderData;
}

const getGlobalData: FetchData<GlobalData> = async () => {
  const header = await getHeaderData();

  return { header };
};

export default getGlobalData;
