import Head from 'next/head';
import React from 'react';
import { SEOData, SEOMeta } from '../../data/seo';

type SEOProps = SEOData;

const SEO: React.FunctionComponent<SEOProps> = (props) => {
  const renderMeta = (meta: SEOMeta, key?: string) => {
    return <meta name={meta.name} content={meta.content}></meta>;
  };

  const { title, description, meta } = props;

  return (
    <Head>
      {title && <title>{title}</title>}
      {description && renderMeta({ name: 'description', content: description })}
      {meta && meta.map((m) => renderMeta(m))}
    </Head>
  );
};

export default SEO;
