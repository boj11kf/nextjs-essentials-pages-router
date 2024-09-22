// our-domain.com/news

import Link from "next/link";

/* 
    <Link>:
    Ha nem ezt, hanem az <a>-taget használjuk, 
    akkor a böngésző mindig re-renderelődik.
    (lsd refresh nyíl icon-nál X jelenik meg)

    Tehát, ezzel SPA (Single page application) -nek hat, 
    viszont mégis tud változni.

*/

const NewsPage = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href={"/news/nextjs-is-a-great-framework"}>
            Next JS is a Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  );
};

export default NewsPage;
