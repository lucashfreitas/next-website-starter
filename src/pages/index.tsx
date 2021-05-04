import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import React from 'react';
import getHomeData, { HomePageData } from '../data/home';
import Layout from '../layouts/layout';

export const getServerSideProps: GetServerSideProps<HomePageData> = async (
  context,
) => {
  const data = await getHomeData();
  return {
    props: data,
  };
};

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  data,
) => {
  const { seo, global } = data;
  return (
    <Layout header={global.header} seo={seo}>
      <div>ADASASASASASASA</div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel Logo" />
        </a>
      </footer>
    </Layout>
  );
};

export default Home;
