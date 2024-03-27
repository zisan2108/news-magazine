import { useEffect, useState } from "react"
import NewsItems from "./NewsItems";


const NewaBoard = () => {
    const [articles, setArticles] =useState([])
    useEffect(()=>{
        // let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.}';
        let url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=0bf8b48177764deb8bbcbed2bbb6103c';
        fetch(url).then(response=>response.json()).then(data=> setArticles(data.articles));
    },[])

  return (
    <div>
        <h2 className="text-center">Latest <span className="">News</span></h2>
       
        {articles.map((news,index)=>{
            return <NewsItems key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        })}

    </div>
  )
}

export default NewaBoard