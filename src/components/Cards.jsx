import { Link } from 'react-router-dom'

const Card = ({ route, key, img, alt, title }) =>
{
  return(
    <>
        <Link to={route}>
            <div className="card" key={key}>
                <div className="card-top">
                    <img src={img} alt={alt} className="card-img" />
                </div>
                <div className="card-body">
                    <p className="card-text">{title}</p>
                </div>
            </div>
        </Link>
    </>
  )
}

export default Card;