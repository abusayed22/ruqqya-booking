import Link from 'next/link';
import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get('host');
//   const data = await getSiteData(domain);
  return (
    <>
      {/* <h1>Not Found: {data.name}</h1> */}
      <p>Could not find requested resource</p>
      <Link href="/">View all posts</Link>
    </>
  );
}