import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'
import Error from "./Error";

const News=(props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults]= useState(0);
    const [mode, setMode] = useState('light');
    const [apiStatus, setApiStatus] = useState(true);
  

  const updateNews= async () =>{
     try{ props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}`;
    
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    
    setArticles((parsedData.articles));
    setLoading(false);
    setTotalResults(parsedData.totalResults)
    
    props.setProgress(100);
    setApiStatus(true)
    document.title = `NewsFeed : ${props.category}`;
  }
    catch {
      console.log("API is Down");
      setApiStatus(false)
      return (<Error/>)
  }
  }
  useEffect(() => {
    updateNews();
    props.setProgress(100);
      
  }, [])

  const handleNext = async () => {
      setPage(page+1);
    updateNews();
  };
  const handlePrevious = async () => {

    setPage(page-1);
    
  };
   
  const fetchMoreData = async () => {   
    try{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1) 
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  }
  catch {
    console.log("API is Down");
    setApiStatus(false)
    return (<Error/>)
  }
  }
  

    return (
      <>
        <>
          
            <h2 className={`text-center text-${props.mode==='light'?'dark':'light'}`} style={{ margin: "30px" , marginTop:"80px"}}>
              NewsFeed : Top Stories - {props.category}
            </h2>
            {loading && <Spinner />}

            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length!==totalResults}
              loader={<Spinner/>}
            ><div className="container my-2">
              <div className="row">
                {
                 articles.map((element) => {
                    return (
                      <div className="col-md-4 my-2 " key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : ""}
                          description={
                            element.description ? element.description : ""
                          }
                          imageUrl={
                            element.urlToImage
                              ? element.urlToImage
                              : "https://image.flaticon.com/icons/png/512/21/21601.png"
                          }
                          newsUrl={element.url ? element.url : ""}
                          author={element.author}
                          date={element.publishedAt}
                          source={element.source.name} mode={props.mode}
                        />
                      </div>
                    );
                  })}
              </div>
              </div>
            </InfiniteScroll>
          
        </>

        
      </>
    );
  
}
News.defaultProps = {
  country: 'in',
  pageSize: 8,
  category: 'general',
}

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}

export default News;
