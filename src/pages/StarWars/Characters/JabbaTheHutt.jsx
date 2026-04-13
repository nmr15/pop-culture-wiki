import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'

const JabbaTheHutt = () =>
{
  useEffect(() =>
  {
    document.title = "Jabba the Hutt - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Creation and portrayal"
            sub={[
              {id: "1.1", title: "Star Wars"},
              {id: "1.2", title: "Return of the Jedi"},
              {id: "1.3", title: "A New Hope - 1997 Special Edition"}
            ]}
          />
          <Collapse 
            id="2"
            item="Biography"
            sub={[
              {id: "2.1", title: "Tatooine crime lord"},
              {id: "2.2", title: "The High Republic", sub2: [
                {id: "2.2.1", title: "The Hynestian Treaty"}
              ]},
              {id: "2.3", title: "Later years of the Republic", sub2: [
                {id: "2.3.1", title: "Boonta Eve Classic"},
                {id: "2.3.2", title: "Alliance with the Republic"},
                {id: "2.3.3", title: "Eliminating Ziro"},
                {id: "2.3.4", title: "Forced into the Shadow Collective"}
              ]},
              {id: "2.4", title: "Age of the Empire", sub2: [
                {id: "2.4.1", title: "Crime amid tyranny"},
                {id: "2.4.2", title: "The thirteen crates"},
                {id: "2.4.3", title: "Tusken wine affair"},
                {id: "2.4.4", title: "Getting back at Han Solo"},
                {id: "2.4.5", title: "The only leader"},
                {id: "2.4.6", title: "Discovering a spy"},
                {id: "2.4.7", title: "Slaying of the Hutt"}
              ]},
              {id: "2.5", title: "Legacy"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#3">Personality and traits</a></li>
          <Collapse 
            id="4"
            item="Appearances"
            sub={[
              {id: "3.1", title: "Films"},
              {id: "3.2", title: "The Clone Wars"},
              {id: "3.3", title: "Other"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Star Wars Legends</a></li>
          <li className="sidebar-list-item"><a href="#6">Reception</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Jabba the Hutt</li>
        </ul>
        <div>
          <h1 className="article-heading">Jabba the Hutt</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Jabba the Hutt</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://static.wikia.nocookie.net/starwars/images/f/fe/Jabba_MMSWCA.png" alt="Jabba the Hutt" />
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
            <b>Jabba Desilijic Tiure</b>, more commonly referred to as <b>Jabba the Hutt</b> or simply <b>Jabba</b>, and formally styled as <b>His Excellency
            Jabba Desilijic Tiure of Nal Hutta, Eminence of Tatoonie</b>, was a <Link>Hutt</Link> male gangster and crime lord, as well as a leading member of the
            Grand Hutt Council and influential leader of the Hutt Clan, who operated and led a criminal empire from his palace on the <Link>Outer Rim</Link> world of
            <Link> Tatooine</Link>. Jabba was a major figure on Tatooine, where he controlled the bulk of the piracy, slavery, and trafficking in illegal goods that
            generated most of the planet's wealth. He was also highly influential in the entire Outer Rim as one of the most powerful crime lords.
          </p>
          <p>
            During the <Link>Clone Wars</Link>, Jabba's influence and power over the Outer Rim, specifically its hyperlanes, was sought by both the
            <Link> Galactic Republic</Link> and the <Link>Confederacy of Independent Systems</Link>, who both courted Jabba's approval. When Rotta, Jabba's son, was
            kidnapped, the crime lord promised his support to whoever returned his son. When the Separatists were revealed to have orchestrated Rotta's kidnapping,
            Jabba pledged his support to the Republic.
          </p>
          <p>
            Jabba continued to operate in the Outer Rim after the end of the Clone Wars and the rise of the <Link>Galactic Empire</Link>, preserving his power base,
            despite the interference of <Link to="/starwars/sheev_palpatine">Darth Sidious</Link>, the Galactic Empire. After the destruction of the <Link>Death
            Star</Link> by the <Link>Rebel Alliance</Link>, the Emperor sent <Link to="/starwars/anakin_skywalker">Darth Vader</Link> to negotiate a deal with Jabba
            to secure raw materials for Imperial military production. Jabba's alliance with the Empire allowed him and the Hutts to resist the Imperial crackdown
            against criminal elements in the Outer Rim, as well as rid the Hutt of his competitors.
          </p>
          <p>
            After the smuggler <Link to="/starwars/han_solo">Han Solo</Link> failed to repay him for lost cargo, Jabba placed a high price on his head. Solo was
            eventually delivered to him by one of his bounty hunters, <Link to="/starwars/boba_fett">Boba Fett</Link>, as a gift from Darth Vader. However, this
            capture brought him to the attention of <Link>Jedi Knight</Link> <Link to="/starwars/luke_skywalker">Luke Skywalker</Link>, who sought to rescue his
            friend from Jabba's imprisonment. As he attempted to execute the Jedi and his allies in the Great Pit of Carkoon, Jabba was choked to death by
            <Link to="/starwars/leia_organa">Leia Organa</Link>. With the Hutts unable to decidewho wuld inherit Jabba's criminal ventures, many of his slaves,
            including Niktos, were free, and his palace was occupied by his former Majordomo Bib Fortuna, who took his palace as Daimyo of Tatooine until Fett
            killed and usurped him. Fett sought to rebuild Jabba's criminal empire in his own image, intending to rule with respect rather than the fear that the
            Hutt instilled in his followers.
          </p>
        </div>
        <div>
          <Heading2 id={2} title={"Biography"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Tatooine crime lord</h3>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/6/6a/JabbasPalace-TCWfilm.png" alt="Jabba's palace" />
              <p>Jabba ruled over the planet Tatooine as its Daimyo from his palace.</p>
            </div>
            <p>
              Jabba was a Hutt who hailed from <Link>Nal Hutta</Link>. He was born in 600 BBY. He was the grandson of Mama and Papa the Hutts, and the nephew of
              Ziro and Ebor, as they were the siblings of his father. His mother left enough of a mark on him that, years later, he would force the Askajian dancer
              Yarna d'al; Gargan to wear special makeup to make her look more like his genitrix. He also had a cousin named Crakka and a nephew named Gorga.
            </p>
            <p>
              Several centuries before the <Link>Galactic Civil War</Link>, he became the reigning crime lord in the <Link>Outer Rim</Link>, owning several criminal
              enterprises which included smuggling, glitterstim spice dealing, slave trading, assassination and piracy. At some point, Jabba became affiliated with
              the Crymorah Syndicate. As a result of his collaboration with the Crymorah, he gained a position on the Grand Hutt Council. As a crime lord, Jabba based
              his illicit operation out of his palace in the Northern Dune Sea of the desert world Tatooine, from where he spread his operations and influence across
              the Outer Rim by employing a network of sumgglers who moved his goods across the galaxy.
            </p>
            <p>
              Forming a powerful criminal empire, his operations grew to include slavery, arms dealing, spice smuggling, and gambling. Gambling was a prominent
              feature of the Mos Espa Grand Arena, where Jabba controlled the gambling and conessions during the popular podraces. The spice trade was a major part
              of Jabba's empire, becoming one of the primary ways he made money. To those who respected his authority, very few, he was formally styled as
              "His Excellency Jabba Desilijic Tiure of Nal Hutta, Eminence of Tatooine."
            </p>

            <h3 className="article-heading-3" id="2.2">The High Republic</h3>
            <h4 className="article-heading-4" id="2.2.1">The Hynestian Treaty</h4>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/c/c1/StellanAndVernestra-FirstMission.png" alt="" />
              <p>Jabba worked with other Hutts to incite a skirmish on Hypnestia, though they were stopped by the Jedi.</p>
            </div>
            <p>
              Years before the Great Disaster, Jabba, along with other Hutts, attended a banquet on Hypnestia as part of a treaty negotiation between the Hypnestian
              royal family and the Grand Hutt Council. The Hutts planted Povo Punch in the drink menu as a means of inciting a diplomatic incident. When Jedi Master
              Lynela Kabe-Oyu, Stellan Gios, and his padawan Vernestra Rwoh, noticed the Povo Punch and attempted to save the Hutts, the Hutts opened fire on the
              banquet, claiming that the incident was an insult that justified violent action against Hypnestia.
            </p>
            <p>
              After the Jedi settled the situation, Jabba and his fellow Hutts attempted to escape, only to be stopped by the Jedi themselves. Queen Nyla, Ruler of
              Hypnestia, stepped in to officially capture Jabba and his fellow Hutt conspirators for attempting to distrup the treaty and to assassinate attendees
              of the diplomatic banquet, putting him for ransom to the Hutt Council.
            </p>

            <h3 className="article-heading-3" id="2.3">Later years of the Republic</h3>
            <h4 className="article-heading-4" id="2.3.1">Boonta Eve Classic</h4>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/e/e5/Jabba_Boonta_Eve.jpg" alt="Jabba Boonta Eve" />
              <p>Jabba hosted the Boonta Eve Classic podrace in 32 BBY.</p>
            </div>
            <p>
              Shortly after the start of the Invasion of Naboo in 32 BBY, Jabba presided over the Boonta Eve Classic podrace, where his entrance in the stands was
              greeted with cheers from the spectators who came to watch the race from all corners of the Outer Rim Territories. Jabba signaled the start of the race,
              and the podraceers begain their laps, at the end of which Anakin Skywalker, a young slave from Mos Espa, emerged victorious. Jabba had to be awoken
              after falling asleep during the race, as podracing did not entertain him, aside from the gambling involved.
            </p>

            <h4 className="article-heading-4" id="2.3.2">Alliance with the Republic</h4>
            <p>
              Ten years after the Naboo crisis, the galaxy was plunged into the chaos of the Clone Wars, a massive galactic conflict between the Grand Army of the
              Republic and the droid armies of the Confederacy of Independent Systems. Shortly after the outbreak of the war, Jabba's infant son, Rotta, was
              kidnapped. Though Jabba did not know who the kidnapper was. It was carried out by his uncle Ziro, and the Separatist Alliance, both of whom had their
              own schemes at play. Jabba requested the assistance of anyone who could help, and the Republic and the <Link>Jedi Order</Link> answered the call. It
              was te hope of the Supreme Chancellor Palpatine that the Republic would be able to negotiate an alliance with Jabba for use of Hutt hyperspace lanes
              in the Outer Rim, as the Separatists controlled the major lanes.
            </p>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/5/53/Jabba_confers.png" alt="Jabba requests aid" />
              <p>Jabba requested the Republic's aid in finding his kidnapped son, Rotta.</p>
            </div>
            <p>
              The Jedi sent General Anakin Skywalker, who had become a Jedi Knight in the years since his victory in the Boonta Eve Classic, and his
              <Link> Padawan</Link>, <Link to="/starwars/ahsoka_tano">Ahsoka Tano</Link>, to the Teth system to find Rotta. Meanwhile, General
              <Link to="/starwars/obi_wan_kenobi"> Obi-Wan Kenobi</Link> traveled to Tatooine to personally negotiate a treaty with Jabba. While Obi-Wan was en
              route, Jabba was presented with the heads of bounty hunters he had sent to Teth to find his son. Infuriated by the lack of progress, Jabba contacted
              Chancellor Palpatine and, through his translator droid, TC-70, demanded to know why the Jedi were not searching for his son. The chacellor assured Jabba
              that the Jedi were on their way, of which Jabba said the treaty with him depended on it.
            </p>

            <h4 className="article-heading-4" id="2.3.3">Eliminating Ziro</h4>

            <h4 className="article-heading-4" id="2.3.4">Forced into the Shadow Collective</h4>

            <h3 className="article-heading-3" id="2.4">Age of the Empire</h3>


            <h3 className="article-heading-3" id="2.5">Legacy</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Personality and traits"} />
          <div>
            <div className="img-right img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/2/20/JabbaHasASnack-RotJAVA.png" alt="Jabba eating" />
              <p>Jabba was known for his gluttonous appetites.</p>
            </div>
            <p>
              Leader of one of the most famous cartels in the galaxy, Jabba technically controlled Tatooine's underworld. He was legendary for his vicious temper,
              endless greed, gruesome appetite, and fondess for violent entertainment. Because of this, it was common for people to avoid irritating him in any way.
              On one occasion, when they tried to play Kessel Sabacc at Jabba's Palace, the game was canceled when Jabba appeared, as they preferred not to risk
              winning against him by betting on the game. Jabba was an animal collector, interested in acquiring specimen of rare species. The Hutt's sadistic side
              also extended to droids, with torture being employed. The Hutt was also known to collect various trophies that signified his power. One of the most
              prominent examples was when he hung Han Solo's carbonite-frozen body on the wall of his throne room as a decoration. Unlike his uncle Ebor, Jabba had
              remarkably poor table manners. Jabba had a tatoo of the Desilijic kajidic symobl on his right arm.
            </p>
            <p>
              Jabba had an affinity for young female humanoids, often enslaving them as dancers or companions. He would chain his favorite slave girl to his
              throne and force them to sit with him when they weren't dancing, as was the case with Oola and Leia Organa. According to Jess, Jabba's favorite slave
              was better protected from harassment from the palace guards and guests, though that protection came at the cost of dealing with Jabba's advances.
              Jabba's penchant for female humanoids would eventually become his downfall when Leia used her proximity to the Hutt to kill him.
            </p>
            <p>
              Jabba didn't tolerate liars. When Lando Calrissian was brought before him by the Harlok Gang by saying that he had arranged a deal with Jabba for
              tibanna gas, Jabba made him know that he perfectly knw that no such deal had ever taken place, leading Jabba to threaten Lando to feed him to his rancor
              for daring to obtain an audience with him under false pretenses. Nor did he tolerate those who rebelled against him, placing severe punishments
              against them, like when he threw Oola into the rancor pit for disobeying him during a dance.
            </p>
            <div className="img-left img-card">
              <img src="https://static.wikia.nocookie.net/starwars/images/c/c3/DarkInk-JabbaBountyHunter.png" alt="Boba Fett and Jabba" />
              <p>Boba Fett worked for Jabba as a bounty hunter and pondered if the Hutt saw him as a friend of sorts.</p>
            </div>
            <p>
              Despite his ruthless reputation and cruel personality, Jabba nevertheless had a caring side: he loved his son Rotta very much and became furious when he
              was kidnapped by the Separatists, willing to punish those responsible with death. His tender love for his son is specifically shown when he was
              willing to work with the Jedi despite their mutual resentment and as such endanger himself to see to it they successfully rescue him. Jabba had a
              friend, his only friend in fact, in Ephant Mon. However, Boba Fett pondered if he was the closest person Jabba saw as a friend. Some nights in the
              Palace, Jabba told Boba incredibly personal things that Boba believed ate at the crime lord's soul, although Boba was unsure if Jabba had a soul.
              Boba also did not understand what Jabba said to him. However, he enjoyed the drink offered during such moments and, taking into account how much
              Jabba paid him, respected the company as tolerable.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default JabbaTheHutt;