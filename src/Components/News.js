import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News=(props)=>{

    const [articles, setArticles]=useState([]);
    const [page, setPage]=useState(1);
    const [loading, setLoading]=useState(true);
    const [totalResults, setTotalResults]=useState(0);

    
    // document.title = `${props.category} - News4U`;

   
    //Fetching articles from api using fetch api
    const mount=async()=>{
        props.setProgress(10);
        // console.log("CDM");
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        console.log(parsedData);
        props.setProgress(60);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        // this.updateNews();

        props.setProgress(100);
    }
    useEffect(() => {
        mount();
    }, [])
    
    // async updateNews(){

    //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=0d0ecd1ad057405d905e1e81dfadcabe&page=${this.state.page}&pageSize=${props.pageSize}`;
    //     this.setState({ loading: true })
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     console.log(parsedData);
    //     this.setState({ articles: parsedData.articles })
    //     this.setState({
    //         articles: parsedData.articles,
    //         loading: false
    //     })



    // }


    const fetchMoreData = async() => {

    
        setPage(page+1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        setArticles(articles.concat(parsedData.articles))
        

        
    };
    



    

        // console.log("render")
        return (
            <>
                
                    <h1 className='text-center my-3'>{`News- 4U Top ${props.category} HeadLines`}</h1>
                    {/* {this.state.loading && <Spinner></Spinner>} */}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner></Spinner>}
                    >
                       
                    <div className='container my-3 mx-10'> 
                    < div className="row my-2" >

                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0, 100) : ""} imgUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}></NewsItem>
                            </div>

                        })}
                    </div>

                
                    </div>

                    </InfiniteScroll>


                
            </>

        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 9,
    category: 'General',


}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}

export default News