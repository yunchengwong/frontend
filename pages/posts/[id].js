import Layout from '@/components/Layout';
import { getAllPostIds, getPostData } from '@/lib/posts';
import Head from 'next/head';
import Date from '@/components/Date';

export default function Post({ postData }) {
  return (
    <Layout id="posts">
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article className='max-w-[860px]'>
        <div className='text-neutral-500 text-[0.875rem] leading-4'>
          <Date dateString={postData.date} />
        </div>
        <h1 className='text-[1.75rem] leading-[1.2] font-bold mt-6 pb-12 border-b-[1px] border-neutral-100 mb-8'>
          {postData.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}