import { Link } from 'react-router-dom'

const Card = ({ img, alt, title }) =>
{
  return(
    <>
      <div className="card">
        <div className="card-top">
            <img src={img} alt={alt} className="card-img" />
        </div>
        <div className="card-body">
            <p className="card-text">{title}</p>
        </div>
      </div>
    </>
  )
}

export default Card;