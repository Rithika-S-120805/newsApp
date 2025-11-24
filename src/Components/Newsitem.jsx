import image from '../assets/news.jpg'
import "../App.css";


const Newsitem = ({title, description, src, url }) => {
  return (
    
    <div className="card text-center bg-dark text-light mb-3 d-inline-block my-4 mx-3 px-2 py-2 news-card-hover" 
            style={{maxWidth:"420px"}}>
        <img 
            src={src?src:image} 
           
            style={{height:"250px", width: "400px",objectFit: 'cover'}} 
            className="card-img-top w-100" 
            alt="..." 
        />
        <div className="card-body">
            <h5 className="card-title">{(title || "").slice(0,50)}</h5>
            <p className="card-text">{description?description.slice(0,90):"News currently unavailable"}</p>
            <a href={url} className="btn btn-primary button-hover">Read More</a>
        </div>
    </div>
  );
};

export default Newsitem;