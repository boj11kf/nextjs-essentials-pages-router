// our-domain.com/news/<anything>

import { useRouter } from "next/router";

/* 
    [xy].js syntax:
    [newsId].js, ez a file fog megnyitódni a böngészőben,
    akármilyen sringet adunk meg manuálisan az URL-ben 
    a /news/ után 

    useRouter():
    router.query.newsId: lekéri a news/ utáni részt az URL-ből
*/

const DetailPage = () => {
    const router = useRouter();

    const newsId = router.query.newsId;

    // send a request to the backend API
    // to fetch news item with newsId

    return (
        <div>
           <h1>The Detail Page</h1> 
        </div>
    );
};

export default DetailPage;