import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

const appName = 'frontend';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, id }) {
  const [Nav, setNav] = useState(false);
  const [Search, setSearch] = useState(false);
  return (
    <div className='text-black bg-white text-base m-0 box-border min-h-screen flex flex-col'>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className='sticky top-0 z-[100] bg-white-transparent backdrop-saturate-200 backdrop-blur [&>*]:px-6'>
        <nav className='flex items-center h-16 shadow-inset-bottom justify-around max-w-[1400px]'>
          <ul className='flex flex-1 items-center w-full gap-6 text-[0.875rem] text-neutral-500'>
            <li className='mr-7'>
              <ul className='flex items-center gap-1'>
                <li>
                  <Image
                    priority
                    src="/images/vercel.png"
                    height={22}
                    width={25}
                    alt={appName}
                  />
                </li>
                <li className='text-[2rem] text-neutral-100 px-4'> / </li>
                <li>
                  <Image
                    priority
                    src="/images/nextjs.png"
                    height={18}
                    width={90}
                    alt={appName}
                  />
                </li>
              </ul>
            </li>
            <ul className='flex items-center gap-6 [&>*]:hidden [&>*]:lg:flex'>
              <li className={id === "showcase" ? 'text-link' : 'hover:text-black'}><Link href="/showcase">Showcase</Link></li>
              <li className={id === "docs" ? 'text-link' : 'hover:text-black'}><Link href="/docs">Docs</Link></li>
              <li className={id === "" ? 'text-link' : 'hover:text-black'}><Link href="/">Blog</Link></li>
              <li className={id === "analytics" ? 'text-link' : 'hover:text-black'}><Link href="/analytics">Analytics</Link></li>
              <li className={id === "templates" ? 'text-link' : 'hover:text-black'}><Link href="/templates">Templates</Link></li>
              <li className={id === "contact" ? 'text-link mr-6' : 'hover:text-black mr-6'}><Link href="/contact">Enterprise</Link></li>
            </ul>
          </ul>
          <ul className='flex items-center gap-2 text-[0.875rem] [&>*]:hidden [&>*]:lg:flex'>
            <li><button onClick={() => setSearch(prevSearch => !prevSearch)} className='flex items-center justify-between h-8 whitespace-nowrap bg-neutral-100 hover:bg-neutral-200 rounded-md px-2 text-[0.875rem] text-neutral-700'>
              <div className='hidden xl:block'>Search documentation...</div>
              <div className='xl:hidden'>Search...</div>
              <div className='h-5 leading-5 rounded-md px-1.5 text-[0.75rem] text-black bg-white shadow-box ml-4'>CtrlK</div>
            </button></li>
            <li className='flex items-center h-8 rounded-md px-3 shadow-box hover:bg-neutral-100'><Link href="/solutions">Deploy</Link></li>
            <li className='flex items-center h-8 rounded-md px-3 text-white shadow-box bg-black hover:bg-neutral-500'><Link href="/learn">Learn</Link></li>
          </ul>
          <ul className='flex lg:hidden w-[72px] items-center justify-around'>
            <li>
              <button onClick={() => setSearch(prevSearch => !prevSearch)}>
                <SearchIcon sx={{ fontSize: 28 }}/>
              </button>
            </li>
            <li>
              <button onClick={() => setNav(prevNav => !prevNav)}>
                {Nav ? (<MenuOpenIcon sx={{ fontSize: 28 }}/>) : (<MenuIcon sx={{ fontSize: 28 }}/>)}
              </button>
            </li>
          </ul>
        </nav>
        {Nav && (
          <ul className='mt-2 text-neutral-500 [&>*]:py-2.5'>
            <li className={id === "showcase" ? 'text-black' : 'hover:text-black'}><Link href="/showcase">Showcase</Link></li>
            <li className={id === "docs" ? 'text-black' : 'hover:text-black'}><Link href="/docs">Docs</Link></li>
            <li className={id === "" ? 'text-black' : 'hover:text-black'}><Link href="/">Blog</Link></li>
            <li className={id === "analytics" ? 'text-black' : 'hover:text-black'}><Link href="/analytics">Analytics</Link></li>
            <li className={id === "templates" ? 'text-black' : 'hover:text-black'}><Link href="/templates">Templates</Link></li>
            <li className={id === "contact" ? 'text-black mr-6' : 'hover:text-black mr-6'}><Link href="/contact">Enterprise</Link></li>
          </ul>
        )}
      </header>
      {!Nav && (
        <main className='flex-grow overflow-y-auto px-6'>
          {Search && (
            <div className='text-neutral-500'>
              <div className='bg-white fixed top-[15%] left-[50%] -translate-x-[50%] z-20 w-[640px] rounded-xl shadow-box'>
                <div className='p-4 shadow-inset-bottom'>
                  <div className='flex items-center gap-2 text-[0.75rem] mb-[10px] [&>*]:h-[20px] [&>*]:shadow-box [&>*]:rounded-[4px] [&>*]:px-1 [&>*]:flex [&>*]:items-center'>
                    <button className='bg-blue-200 text-blue-700'>App</button>
                    <button className='hover:bg-neutral-100'>Pages</button>
                  </div>
                  <div className='flex items-center justify-between gap-3'>
                    <input className='h-[28px] text-[18px]' placeholder='Search documentation' />
                    <button className='h-[20px] shadow-box rounded-[4px] px-1 flex items-center'>Esc</button>
                  </div>
                </div>
                <ul className='p-2 max-h-[436px] overflow-y-auto text-[0.875rem] [&>*]:px-2 [&>*]:flex [&>*]:items-center [&>*]:gap-3 [&>*]:rounded-md [&>*:hover]:bg-neutral-100 [&>*]:min-h-[40px]'>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                  <li>
                    <DescriptionOutlinedIcon />
                    <Link href="/docs/introduction">Introduction</Link>
                  </li>
                </ul>
              </div>
              <div className='fixed top-[15%] z-10 w-full h-full bg-white-transparent backdrop-saturate-200 backdrop-blur'></div>
            </div>
          )}
          {id !== "" && (
            <div className='text-sm text-neutral-500 hover:text-inherit mb-16'>
              <Link href="/">← Back to Blog</Link>
            </div>
          )}
          <div className='pb-20 mx-auto max-w-screen-xl'>{children}</div>
        </main>
      )}
    </div>
  );
}