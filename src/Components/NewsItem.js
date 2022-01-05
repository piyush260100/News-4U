import React from 'react'

const NewsItem=(props)=> {
    
        let { title, description, imgUrl, newsUrl, author, date, source,} = props;
        let d = new Date(date);


        return (
            <div>
                <div className="card" style={{ width: "22rem", margin: "10px" }}>
                    <img src={imgUrl ? imgUrl : ".//public/logo192.png"} className="card-img-top" alt="..." style={{ width: "22rem", height: "14rem" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
                            {source}
                            <span className="visually-hidden">unread messages</span>
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <h6 className='card-text' style={{color:"#d9534f"}}><small>By {author ? author : "unknown"} | On {d.toGMTString()}</small></h6>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItem
