import Head from 'next/head';
import { getPostPaths, getPostData } from '../../lib/posts';

export default function Post({ title, date, contentHtml }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        {date && <time>{date}</time>}
        <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </article>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getPostPaths();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params.category, params.slug);
  return { props: post };
}
