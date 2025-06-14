// page.tsx is a special Next.js file that exports a React component, and it's required for the route to be accessible.

import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className='page-container'>
        <h1>Test</h1>
        <div>What now?</div>

        {/* Image component offers many optimization features over standard img - resizing, lazy loading, etc */}
        <Image
          src='/hero-mobile.png'
          width={560}
          height={620}
          className='block md:hidden'
          alt='Screenshots of the dashboard project showing mobile version'
        />
        {/* use image actual size (560 x 620) to prevent layout shift */}
      </div>
    </>
  );
}
