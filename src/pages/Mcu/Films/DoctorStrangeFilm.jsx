import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableMcu from '../../../components/TableMcu'

const DoctorStrangeFilm = () =>
{
  useEffect(() =>
  {
    document.title = "Doctor Strange (film) - Pop Culture Wiki";
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
              {id: "3.4", title: "Post-production", sub2: [
                {id: "3.4.1", title: "Visual effects"}
              ]}
            ]}
          />
          <li className="sidebar-list-item"><a href="#4">Music</a></li>
          <li className="sidebar-list-item"><a href="#5">Marketing</a></li>
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
              {id: "7.1", title: "Box office"},
              {id: "7.2", title: "Critical response"},
              {id: "7.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#8">Sequel</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/mcu">Marvel Cinematic Universe</Link></li>
          <li>Doctor Strange (film)</li>
        </ul>
        <div>
          <h1 className="article-heading">Doctor Strange (film)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Doctor Strange</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a1/Doctor_Strange_%282016_film%29_poster.jpg" alt="Doctor Strange poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Directed by</th>
              <td className="infobox-data">Scott Derrickson</td>
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
              <td className="infobox-data"><Link to="/mcu/captain_america_civil_war">Captain America: Civil War</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Next MCU project</th>
              <td className="infobox-data"><Link to="/mcu/guardians_of_the_galaxy_vol_2">Guardians of the Galaxy Vol. 2</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Doctor Strange</b> is a 2016 American superhero film based on the <Link to="/marvelcomics">Marvel Comics</Link> character
            <Link to="/marvelcomics/doctor_strange">of the same name</Link>. Produced by <Link>Marvel Studios</Link> and distributed by Walt Disney Studios Motion
            Pictures, it is the 14th film in the <Link to="/mcu">Marvel Cinematic Universe</Link> (MCU). The film was directed by Scott Derrickson from a screenplay
            he wrote with Jon Spaihts and C. Robert Cargill, and stars <Link>Benedict Cumberbatch</Link> as neurosurgeon <Link to="/mcu/stephen_strange">Stephen
            Strange</Link> along with <Link>Chiwetel Ejiofor</Link>, <Link>Rachel McAdams</Link>, <Link>Benedict Wong</Link>, Michael Stuhlbarg, Benjamin Bratt,
            Scott Adkins, <Link>Mads Mikkelsen</Link>, and <Link>Tilda Swinton</Link>. In the film, Strange learns the mystic arts after a career-ending car crashl.
          </p>
          <p>
            Various incarnations of a Doctor Strange film adapatation had been in development since the mid-1980s, until Paramount Pictures acquired the film rights
            in April 2005 on behalf of Marvel Studios. Thomas Dean Donnelly and Joshua Oppenheimer were brought on board in June 2010 to write a screenplay. In June
            2014, Derrickson was hired to direct, with Spalhts re-writing the script. Cumberbatch was chosen for the eponymous role in December 2014, necessitating a
            schedule change to work around his other commitments. This gave Derrickson time to work on the script himself, for which he brought Cargill on to help.
            Principal photography on the film began in November 2015 in Nepal, before moving to England and wrapping up in New York City in April 2016.
          </p>
          <p>
            Doctor Strange had its world premiere in Hong Kong on October 13, 2016, and was released in the United States on November 4, as part of
            <Link> Phase Three</Link> of the MCU. The film grossed $677.8 million worldwide and was met with praise for its cast, visual effects, and musical
            score. The film received an Academy Award nomination for Best Visual Effects. A sequel,
            <Link to="/mcu/doctor_strange_in_the_multiverse_of_madness">Doctor Strange in the Multiverse of Madness</Link> was released in May 2022.
          </p>
        </div>
      </main>
    </>
  )
}

export default DoctorStrangeFilm;