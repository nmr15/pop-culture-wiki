import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const BobaFett = () =>
{
  useEffect(() =>
  {
    document.title = "Boba Fett - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Concept and development"
            sub={[
              {id: "1.1", title: "Film casting and production", sub2: [
                {id: "1.1.1", title: "Other portrayals"}
              ]}
            ]}
          />

          <Collapse 
            id="6"
            item="Appearances"
            sub={[
              {id: "6.1", title: "Skywalker saga", sub2: [
                {id: "6.1.1", title: "Original trilogy"},
                {id: "6.1.2", title: "Prequel trilogy"}
              ]},
              {id: "6.2", title: "Television", sub2: [
                {id: "6.2.1", title: "The Story of the Faithful Wookiee"},
                {id: "6.2.2", title: "Droids"},
                {id: "6.2.3", title: "The Clone Wars"},
                {id: "6.2.4", title: "The Mandalorian"},
                {id: "6.2.5", title: "The Bad Batch"},
                {id: "6.2.6", title: "Visions"},
                {id: "6.2.7", title: "The Book of Boba Fett"}
              ]},
              {id: "6.3", title: "Other media"},
              {id: "6.4", title: "Legends", sub2: [
                {id: "6.4.1", title: "The Bounty Hunter Wars"},
                {id: "6.4.2", title: "Boba Fett: A Practical Man"}
              ]},
              {id: "6.5", title: "Unproduced works", sub3: [
                {id: "6.5.1", title: "Star Wars 1313"},
                {id: "6.5.2", title: "The Clone Wars"},
                {id: "6.5.3", title: "Standalone film"}
              ]}
            ]}
          />
          <Collapse 
            id="7"
            item="Reception"
            sub={[
              {id: "7.1", title: "In The Clone Wars"},
              {id: "7.2", title: "In The Book of Boba Fett"},
              {id: "7.3", title: "Merchandising"}
            ]}
          />
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Boba Fett</li>
        </ul>
        <div>
          <h1 className="article-heading">Boba Fett</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Boba Fett</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/4/46/BobaFett-SWI206.png" alt="Boba Fett" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Template</th>
              <td className="infobox-data">Template</td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Boba Fett</b> was a human male crime lord and former bounty hunter whose career spanning decades, from the fall of the
            <Link to="/starwars/galactic_republic"> Galactic Republic</Link> to the end of the rule of the <Link to="/starwars/galactic_empire">Galactic Empire</Link>.
            Originally codenamed <b>Alpha</b>, he was an unaltered clone of the famed <Link>Mandalorian</Link> bounty hunter,
            <Link to="/starwars/jango_fett"> Jango Fett</Link>, who raised the boy as his son. Boba emulated his father and genetic donor by wearing a customized suit
            of Mandalorian armor. His personal starship was the <Link>Slave I</Link>, a Firespray-31-class patrol and attack craft that once belonged to Jango.
            Trained in combat and martial skills from a young age, Fett was one of the most feared bounty hunters in the galaxy during the reign of
            <Link to="/starwars/sheev_palpatine"> Emperor Palpatine</Link>. He became a legend over the course of his career, which included contracts from both
            the Empire and the extensive criminal underworld. After living among the <Link>Tusken Raiders</Link> of
            <Link to="/starwars/tatooine"> Tatooine</Link> for a time, he took over the Daimyo of Mos Espa during the era of the <Link>New Republic</Link>.
          </p>
          <p>
            Boba was created on the Wild Space planet of <Link to="/starwars/kamino">Kamino</Link> as a result of an arrangement between the
            <Link to="/starwars/sith"> Sith Lord</Link> <Link to="/starwars/count_dooku">Darth Tyranus</Link> and Jango Fett, a Mandalorian foundling who served as
            the template of the Grand Army of the Republic. Unlike the <Link to="/starwars/clonetrooper">clonetroopers</Link> grown from Jango's DNA, Jango regarded
            Boba as his son. During the last days of the Separatist Crisis, Boba and Jango retreated to <Link to="/starwars/geonosis">Geonosis</Link> where the
            latter was killed in battle by <Link to="/starwars/jedi_master">Jedi Master</Link> <Link to="/starwars/mace_windu">Mace Windu</Link>. Orphaned by
            Jango's death, Boba sought vengeance by attempting to assassinate Windu, although his plan proved unsuccessful. After serving time in prison on
            <Link to="/starwars/coruscant"> Coruscant</Link>, Fett took up his late father's profession as a bounty hunter, working alongside other mercenaries, such
            as Bossk, Dengar, and <Link to="/starwars/asajj_ventress">Asajj Ventress</Link>, while also notably apprenticing himself to his father's infamous brief
            protégée, <Link>Cad Bane</Link>.
          </p>
          <p>
            In the aftermath of the Clone Wars, Boba continued to make a name for himself while working for the gangster
            <Link to="/starwars/jabba_the_hutt"> Jabba the Hutt</Link>, as well as the Sith Lord <Link to="/starwars/anakin_skywalker">Darth Vader</Link>. During
            the <Link to="/starwars/galactic_civil_war">Galactic Civil War</Link>, Boba managed to track down Captain <Link to="/starwars/han_solo">Han Solo</Link>
            to <Link to="/starwars/bespin">Bespin</Link> on a contract for the Galactic Empire, hoping to deliver him to Jabba's palace on Tatooine. During the
            journey, Boba stopped on the moon of Nar Shaddaa in order to make sure Han would survive his time in carbonite, but he lost the smuggler while he was
            away as part of the return of the Crimson Dawn, kicking of the war of the bounty hunters. Ultimately, Boba regained Han and delivered him to the
            impatient Jabba.
          </p>
          <p>
            Boba tried to prevent Han's rescue by the <Link to="/starwars/rebel_alliance">Rebel Alliance</Link>, only to fall into the Great Pit of Carkoon when
            Han accidentally slammed a pole into Boba's jetpack, causing it to malfunction. Although Boba survived his ordeal with the man-eating sarlacc, his armor
            was sold to Cobb Vanth by <Link>Jawa scavengers</Link>. Following a time in the company of a Tusken tribe, Boba eventually regained his armor by
            tracking down and confronting the Mandalorian warrior <Link to="/starwars/din_djarin">Din Djarin</Link> on Tython, who had taken Boba's armor from
            Vanth. After helping Din to rescue the foundling <Link to="/starwars/grogu">Grogu</Link> from the clutches of <Link>Moff Gideon</Link>, the
            ex-bounty hunter returned to Tatooine where he killed <Link>Bib Fortuna</Link> and claimed the late Jabba's throne as Daimyo, with
            <Link> Fennec Shand</Link> by his side. Now the head of his own gotra, Boba intended to rule the territories of Mos Espa by winning the people's
            respect, though he would face several major challenges to his position owed to the two-facedness of mayor Mok Shalz such as the Twins' bid for power
            and the expansion of the Pyke Syndicate's spice trade. Ultimately, though, Boba overcame all obstacles, including a confrontation with his old mentor,
            Cad Bane, and emerged victorious with the help of his associates, gaining the appreciation and approval of Mos Espa's denizens.
          </p>
        </div>
      </main>
    </>
  )
}

export default BobaFett;