import { FetchData, LangMeta } from '../../data.types';
import headerData from './header.json';

export interface HeaderData {
  menu: Array<MenuItem>;
  logo: string;
}

export interface MenuItem {
  label: LangMeta;
  link?: string;
  sub?: Array<MenuItem>;
}

const convertToMenuItem: (menu: Array<any>) => Array<MenuItem> = (
  menu: Array<any>,
) =>
  menu.map((x) => ({
    link: x.link || null,
    label: x.label || null,
    sub: x.sub ? convertToMenuItem(x.sub) : null,
  }));

const getHeaderData: FetchData<HeaderData> = async () =>
  new Promise<HeaderData>((resolve, reject) =>
    resolve({
      logo: headerData.logo,
      menu: convertToMenuItem(headerData.menu),
    }),
  );

export default getHeaderData;
