import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    articles = [
        {
            "source": { "id": "abc-news-au", "name": "ABC News (AU)" },
            "author": "Tim Fernandez",
            "title": "Bradman's 1934 Ashes bat sells for more than $245k in record-breaking auction",
            "description": "The cricket bat used by Sir Donald Bradman in the 1934 Ashes series is now the most expensive bat in the world.",
            "url": "http://www.abc.net.au/news/2021-12-14/bradmans-1934-ashes-bat-sells-for-more-than-245k/100700328",
            "urlToImage": "https://live-production.wcms.abc-cdn.net.au/0920ba587735f2325089c6b9ff4247e9?impolicy=wcms_crop_resize&cropH=940&cropW=1671&xPos=0&yPos=122&width=862&height=485",
            "publishedAt": "2021-12-14T08:21:34Z",
            "content": "The cricket bat used by Sir Donald Bradman in the 1934 Ashes series is now the most expensive bat in the world after selling at auction.\r\nKey points:\r\n<ul><li>The bat was used by Bradman in the 1934 … [+1877 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor() {
        super();
        console.log("Hello I am a constructor from News component");
        this.state = {
            articles: this.articles,
            loading: false,
        }
    }


    render() {
        return (
            <div className='container my-3 mx-5'>
                <h2 >News Live - Top Headlines</h2>
                
                < div className="row my-2" >
                {this.state.articles.map((element)=>{
                   return <div className="col-md-4" key ={element.url}>
                        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,88)} imgUrl={element.urlToImage}
                            newsUrl={element.url}></NewsItem>
                    </div>
                    
                })}
                </div>

                

            </div>
        )
    }
}
