import Head from 'next/head';
import Layout, { siteTitle } from '@/components/Layout';
import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import Date from '@/components/Date';

export default function Home({ allPostsData }) {
  return (
    <Layout id="">
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='my-6 px-6 py-10'>
        <h2 className='text-[2rem] font-bold leading-[2.5rem]'>Blog</h2>
        <ul className='mt-12 w-full grid grid-cols-auto gap-4'>
          {allPostsData.map(({ id, date, title, description }) => (
            <li className='rounded-xl p-[18px] shadow-box' key={id}>
              <article className='flex flex-col items-stretch justify-start h-full'>
                <div className='text-neutral-500 text-sm leading-6'><Date dateString={date} /></div>
                <div className='text-xl font-semibold leading-8'><Link href={`/posts/${id}`}>{title}</Link></div>
                <div className='mb-[12px] leading-7 text-neutral-500'>{description}</div>
                <div className='h-9 bg-neutral-100 text-neutral-500 hover:text-inherit flex justify-center items-center text-sm font-bold rounded-md mt-auto'><Link href={`/posts/${id}`}>Read More</Link></div>
              </article>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
