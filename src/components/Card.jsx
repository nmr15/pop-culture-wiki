import { Link } from 'react-router-dom'

const Card = ({ route, img, alt, imgStyle, title }) =>
{
  return(
    <>
        <Link to={route}>
            <div className="card">
                <div className="card-top">
                    <img src={img} alt={alt} className={imgStyle} />
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