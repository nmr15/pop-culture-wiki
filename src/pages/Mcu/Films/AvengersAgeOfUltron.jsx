import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const AvengersAgeOfUltron = () =>
{
  useEffect(() =>
  {
    document.title = "Avengers: Age of Ultron - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Plot</a></li>
          <li className="sidebar-list-item"><a href="#2">Cast</a></li>
          <Collapse 
            id="3"
            item="Production"
            sub={[
              {id: "3.1", title: "Development"},
              {id: "3.2", title: "Pre-production"},
              {id: "3.3", title: "Filming"},
              {id: "3.4", title: "Post-production"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <Collapse 
            id="5"
            item="Marketing"
            sub={[
              {id: "5.1", title: "Promotion"},
              {id: "5.2", title: "Merchandise"}
            ]}
          />
          <Collapse 
            id="6"
            item="Release"
            sub={[
              {id: "6.1", title: "Theatrical"},
              {id: "6.2", title: "Home media"}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "Box office", sub2: [
                {id: "7.1.1", title: "United States and Canada"},
                {id: "7.1.2", title: "Other territories"}
              ]},
              {id: "7.2", title: "Critical reception"},
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequels</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Avengers: Age of Ultron</li>
        </ul>
        <div>
          <h1 className="article-heading">Avengers: Age of Ultron</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Avengers: Age of Ultron</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="/mcu/avengers_age_of_ultron" alt="Avengers: Age of Ultron" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data"><Link>Joss Whedon</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Projects</th>
              <td className="infobox-data"><Link>List of MCU projects</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link to="/mcu/characters">List of MCU character</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Previous MCU project</th>
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_film">Guardians of the Galaxy</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/antman_film">Ant-Man</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          
        </div>
         <div>
          <Heading2 id={1} title={"Plot"} />
          <div>
            <p>
              <b>Avengers: Age of Ultron</b> is a 2015 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> superhero team
              the <Link>Avengers</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion Pictures. It is the sequel
              to <Link to="mcu/the_avengers_film">The Avengers</Link> (2012) and the 11th film in the <Link to="/mcu">Marvel Cinematic Universe</Link>
              (MCU). Written and directed by <Link>Joss Whedon</Link>, the film features an ensemble cast including <Link>Robert Downey Jr.</Link>,
              <Link> Chris Hemsworth</Link>, <Link>Mark Ruffalo</Link>, <Link>Chris Evans</Link>, <Link>Scarlett Johansson</Link>, <Link>Jeremy
              Renner</Link>, <Link>Don Cheadle</Link>, <Link>Aaron Taylor-Johnson</Link>, <Link>Elizabeth Olsen</Link>, <Link>Paul Bettany</Link>,
              <Link> Cobie Smulders</Link>, <Link>Anthony Mackie</Link>, <Link>Hayley Atwell</Link>, <Link>Idris Elba</Link>, <Link>Linda Cardellini</Link>,
              <Link>Stellan Skarsgård</Link>, <Link>James Spader</Link>, and <Link>Samuel L. Jackson</Link>. In the film, the <Link>Avengers</Link>
              fight <Link>Ultron</Link> (Spader), an artifical intelligence created by <Link to="/mcu/tony_stark">Tony Stark</Link> (Downey) and
              <Link to="/mcu/bruce_banner"> Bruce Banner</Link> (Ruffalo), who plans to bring about world peace by causing human extinction.
            </p>
            <p>
              A sequel was announced in May 2012 after the successful release of The Avengers, with Whedon set to return as writer and director in August.
              He updated Ultron's origin for the film to invlove the MCU's Avengers team and introduced the characters
              <Link to="/mcu/piertro_maximoff">Pietro</Link> (Taylor-Johnson) and <Link to="/mcu/wanda_maximoff">Wanda Maximoff</Link> (Olsen), to whom
              Marvel shared the rights with 20th Century Fox. Casting began in June 2013 with Downey re-signing. Second unit filming began in February 2014
              in South Africa, with principal photography taking place between March and August, primarily at Shepperton Studios in Surrey, England.
              Additional footage was filmed in Italy, South Korea, Bangladesh, the state of New York, and around England. With an estimated net production
              budget of $365 million, the film is one of the most expensive ever made.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Production"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Development</h3>

            <h3 className="article-heading-3" id="3.2">Pre-production</h3>

            <h3 className="article-heading-3" id="3.3">Filming</h3>

            <h3 className="article-heading-3" id="3.4">Post-production</h3>

          </div>
        </div>
        <div>
          <Heading2 id={4} title={"Music"} />
          <div>
            
          </div>
        </div>
        <div>
          <Heading2 id={5} title={"Marketing"} />
          <div>
            <h3 className="article-heading-3" id="5.1">Promotion</h3>

            <h3 className="article-heading-3" id="5.2">Merchandise</h3>
          </div>
        </div>
        <div>
          <Heading2 id={6} title={"Release"} />
          <div>
            <h3 className="article-heading-3" id="6.1">Theatrical</h3>

            <h3 className="article-heading-3" id="6.2">Home media</h3>
          </div>
        </div>
        <div>
          <Heading2 id={7} title={"Reception"} />
          <div>
            <h3 className="article-heading-3" id="7.1">Box office</h3>
            <h4 className="article-heading-4" id="7.1.1">United States and Canada</h4>

            <h4 className="article-heading-4" id="7.1.2">Other territories</h4>

            <h3 className="article-heading-3" id="7.2">Critical reception</h3>
          </div>
        </div>
        <div>
          <Heading2 id={8} title={"Sequels"} />
          <div>
            
          </div>
        </div>
        <div>
          <TableMcu />
        </div>
      </main>
    </>
  )
}

export default AvengersAgeOfUltron;