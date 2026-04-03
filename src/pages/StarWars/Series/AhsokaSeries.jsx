import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Collapse from '../../../components/Collapse'
import Heading2 from '../../../components/Heading2'
import TableStarWars from '../../../components/TableStarWars'
import { starwarsAhsokaEps } from '../../../data/dataStarWars'

export const TableAhsoka = () =>
{
  return(
    <div>
      <table className="table-center">
        <thead>
          <tr>
            <th colSpan={2}>Ahsoka</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Episodes</td>
            <td>
              <div className="table-list">
                {starwarsAhsokaEps.map((ahsEps) => (
                  <Link to={ahsEps.route} className="table-list-link" key={ahsEps.id}>{ahsEps.title}</Link>
                ))}
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const TableAhsokaEps = () =>
{
  return(
    <div>
      <table className="table-center">
        <thead>
          <tr>
            <th>Season</th>
            <th>Episode</th>
            <th>Image</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {starwarsAhsokaEps.map((ahsEps) => (
            <>
              <tr>
                <td>{ahsEps.season}</td>
                <td>{ahsEps.episode}</td>
                <td>
                  <img src={ahsEps.img} alt="" />
                </td>
                <td>{ahsEps.title}</td>
              </tr>
              <tr>
                <td colSpan={4}>{ahsEps.description}</td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const AhsokaSeries = () =>
{
  useEffect(() =>
  {
    document.title = "Ahsoka (series) - Pop Culture Wiki";
  }, []);

  return(
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <li className="sidebar-list-item"><a href="#1">Premise</a></li>
          <Collapse 
            id="2"
            item="Cast and characters"
            sub={[
              {id: "2.1", title: "Starring"},
              {id: "2.2", title: "Recurring"},
              {id: "2.3", title: "Guests"}
            ]}
          />
          <Collapse 
            id="3"
            item="Episodes"
            sub={[
              {id: "3.1", title: "Season 1 (2023)"},
              {id: "3.2", title: "Season 2"}
            ]}
          />
          <Collapse 
            id="4"
            item="Production"
            sub={[
              {id: "4.1", title: "Development"},
              {id: "4.2", title: "Writing"},
              {id: "4.3", title: "Casting"},
              {id: "4.4", title: "Design"},
              {id: "4.5", title: "Filming"},
              {id: "4.6", title: "Music"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Release</a></li>
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Viewership"},
              {id: "5.2", title: "Critical response"},
              {id: "5.3", title: "Accolades"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Tie-in media</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/starwars">Star Wars</Link></li>
          <li>Ahsoka (series)</li>
        </ul>
        <div>
          <h1 className="article-heading">Ahsoka (series)</h1>
        </div>
        <table className="infobox">
          <tbody>
            <tr>
              <th colspan="2">
                <span>Ahsoka</span>
              </th>
            </tr>
            <tr>
              <td colspan="2">
                <span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ahsoka.svg/500px-Ahsoka.svg.png" alt="Ahsoka poster" />
                </span>
              </td>
            </tr>
            <tr>
              <th className="infobox-data">Created by</th>
              <td className="infobox-data"><Link>Dave Filoni</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Episodes</th>
              <td className="infobox-data"><a href="#3">List of Ahsoka episodes</a></td>
            </tr>
            <tr>
              <th className="infobox-data">Films and series</th>
              <td className="infobox-data"><Link>List of Star Wars films and series</Link></td>
            </tr>
            <tr>
              <th className="infobox-data">Characters</th>
              <td className="infobox-data"><Link>List of Star Wars characters</Link></td>
            </tr>
          </tbody>
        </table>
        <div className="div-top">
          <p>
            <b>Ahsoka</b>, also known as <b>Star Wars: Ahsoka</b>, is an American space fantasy television series created by <Link>Dave Filoni</Link> for the streaming service
            <Link> Disney+</Link>. It is part of the <Link to="/starwars">Star Wars</Link> franchise and a spin-off from
            <Link to="/starwars/the_mandalorian"> The Mandalorian</Link> (2019-2023), taking place in the same timeframe as that series and its other interconnected spin-offs after
            the events of the film <Link to="/starwars/return_of_the_jedi">Return of the Jedi</Link> (1983). Ahsoka follows former <Link>Jedi</Link> apprentice
            <Link to="/starwars/ahsoka_tano"> Ahsoka Tano</Link> and her allies as they defend the fledging <Link>New Republic</Link> against remnants of the <Link>Galactic
            Empire</Link>.
          </p>
          <p>
            <Link>Rosario Dawson</Link> stars as the title character, reprising her role from The Mandalorian. <Link>Natasha Liu Bordizzo</Link>, <Link>Mary Elizabeth 
            Winstead</Link>, <Link>Ray Stevenson</Link>, Ivanna Sakhno, Diana Lee Inosanto, <Link>David Tennant</Link>, Eman Esfandi, Evan Whitten, Genevieve O'Reilly,
            <Link> Hayden Christensen</Link>, <Link>Ariana Greenblatt</Link>, <Link>Lars Mikkelsen</Link>, and <Link>Anthony Daniels</Link> also star. Ahsoka Tano was co-created
            by Filoni for the animated series <Link to="/starwars/the_clone_wars_series">Star Wars: The Clone Wars</Link> (2008-2020). Dawson was cast to bring her into live-action
            for the second season of The Mandalorian, and a spin-off series starring Dawson was announced by <Link>Lucasfilm</Link> in December 2020 with Filoni as showrunner. It
            serves as a continuation of the animated series <Link to="/starwars/rebels_series">Star Wars Rebels</Link> (2014-2018). In addition to Filoni, <Link>Jon Favreau</Link>,
            Kathleen Kennedy, and Colin Wilson returned from The Mandalorian as executive producers and were joined by Carrie Beck.
          </p>
          <p>
            Ahsoka premiered on August 22, 2023, with the first two episodes of the first season. The other six episodes were released through October 3. The season received high
            viewership, generally positive reviews from critics, and several accolades including a Primetime Creative Arts Emmy Award. A second season was onfirmed in January 2024.
          </p>
        </div>
        <div>
          <Heading2 id={1} title={"Premise"} />
          <div>
            <p>
              After the fall of the <Link>Galactic Empire</Link> in the film Return of the Jedi (1983), former Jedi apprentice Ahsoka Tano joins with her own former
              apprentice, Sabine Wren, and other characters from the animated series Star Wars Rebels (2014-2018) to prevent Grand Admiral Thrawn, who is stranded in
              another galaxy, from returning and uniting the remnants of the Empire against the fledging New Republic. The first season ends with Thrawn returning
              from the other galaxy, leaving Ahsoka and Sabine stranded there. In the second season, Ahsoka and Sabine go on a journey related to the mysterious
              Mortis gods and confront the fallen Jedi Baylan Skoll while Thrawn leads the Empire against the New Republic.
            </p>
          </div>
        </div>
        <div>
          <Heading2 id={2} title={"Cast and characters"} />
          <div>
            <h3 className="article-heading-3" id="2.1">Starring</h3>
            <ul className="article-list">
              <li>
                <Link>Rosario Dawson</Link> as <Link to="/starwars/ahsoka_tano">Ahsoka Tano</Link>: <br />
                The <Link>Togruta</Link> former Jedi apprentice of Anakin Skywalker. She leaves the Jedi Order in the animated series
                <Link to="/starwars/the_clone_wars_series">Star Wars: The Clone Wars</Link> (2008-2020), and learns that Anakin has fallen to the dark side of the
                Force in the follow-up animated series Star Wars Rebels (2014-2018). The repercussions of this are explored in Ahsoka, which begins with the character
                as a wandering ronin similar to the character of Akira Kurosawa's film Yojimbo (1961). Borrowing from J. R. R. Tolien's novel The Lord of the Rings
                (1954-55), in which the wandering Gandalf the Grey is reborn as the wise and powerful Gandalf the White, showrunner Dave Filoni depicted Ahsoka's
                development as "Ahsoka the Gray" becoming "Ahsoka the White". Dawson praised The Clone Wars and Rebels voice actor <Link>Ashley Eckstein</Link> and
                said she was building on that animated history. She emraced the training required to replicate the animated character's fighting abilities, and the
                makeup and prosthetics needed o adapt the character's alien appearance; Ahsoka has orange skin, white markings on her face, and blue-andwhite
                montrails (horns) and lekku (head tails). New technology was developed to create the montrails and lekku, allowing them to be bigger and more
                realistic than in previous Star Wars series.
                <ul>
                  <li>
                    <Link>Ariana Greenblatt</Link> as young Ahsoka, appearing as part of a flashback that Ahsoka has to her time in the <Link>Clone Wars</Link> while
                    inside the mysterious "World Between Worlds." To prepare for the role, Greenblatt watched many The Clone Wars episodes and also visited the set of
                    Ahsoka to see Dawson's performance, hoping to combine the character's portrayal in The Clone Wars with Dawson's version.
                  </li>
                </ul>
              </li>
              <li>
                <Link>Natasha Liu Bordizzo</Link> as <Link to="/starwars/sabine_wren">Sabine Wren</Link>: <br />
                A <Link>Mandalorian</Link> warrior with a creative and rebellious spirit who fought the Galactic Empire in Rebels. The series reveals that Ahsoka took
                Sabine on as her <Link>Padawn</Link> learner after Rebels, but they parted ways when Sabine's family were killed during the purge of Mandalore. Filoni
                wanted to show someone training to be a Jedi who does not have a strong connection to the Force, feeling that would differentiate the story from
                previous Star Wars projects. Bordizzo found Sabine's challenges with learning to use the Force relatable to her own life. She watched Rebels to
                prepare for the role, describing it as a "memory book" for Sabine, and trained for three months to fight with a lightsaber. Bordizzo wore wigs for
                Sabine's colorful hair: first, a long wig that was made purple and orange with hair dye, then a short wig made purple with fabric dye.
              </li>
              <li>
                <Link>Mary Elizabeth Winstead</Link> as <Link to="/starwars/hera_syndulla">Hera Syndulla</Link>: <br />
                A <Link>Twi'lek</Link> general of the New Republic who is the pilot of the <Link>Ghost</Link>. She fought the Empire in Rebels. Winstead described
                Hera as a strong leader and fighter with maternal instinct, and felt this was uniue compared to the usual depiction of army generals in media as
                "very masculine, hard figures." She added that it was a luxury to be able to see Hera's story told in Rebels when developing her portrayal. Hera has
                green skin and lekku, which took around three hours to apply to Winstead in the initial test. This was eventually reduced to an hour, which Winstead
                noted was a normal amount of time to get make-up applied for a series.
              </li>
              <li>
                <Link>Ray Stevenson</Link> (season 1) and <Link>Rory McCann</Link> (season 2) as <Link>Baylan Skoll</Link>: <br />
                A former Jedi who survived the organization's destruction during <Link>Order 66</Link> at the end of the Clone Wars. He has deemed the Jedi Order a
                failure and is now searching for a new power, related to the Mortis gods from The Clone Wars, to end the cycle of destruction between the light and
                dark sides of the Force. Despite being an antagonist in the series, Stevenson did not consider Baylan to be a villain and debated whether he was
                with Filoni during filming. Filoni wanted Baylan's fighting style to be like a medieval knight, wielding his lightsaber like a claymore. Episodic
                director Peter Ramsay felt this suited Stevenson's physically and differentiate him from the Jedi characters. The character is named after the wolf
                Skoll from Norse mythology. The series premiere is dedicated to Stevenson, who died in May 2023 after completing his work on the first season. McCann
                felt it was the right decision to recast the role and continue the character's story. He said his experience sword fighting on the series Game of
                Thrones (2011-2019) helped with his lightsaber training for the role.
              </li>
              <li>
                Ivanna Sakhno as Shin Hati: <br />
                Baylan's apprentice, who he is teaching to be "something more" than a Jedi. Sakhno said Hati was calculated but impatient, and just finding her own
                voice in the series. She was encouraged by Filoni to help develop elements of the character's backstory. Sakhno said she and Stevenson were
                inseparable during filming and he had a big impact on her life. The character's named after the wolf Hati from Norse mythology.
              </li>
              <li>
                Diana Lee Inosanto as Morgan Elsbeth: One of the last remaining <Link>Nightsister</Link> witches of <Link>Dathomir</Link> who is allied with Grand
                Admiral Thrawn.
              </li>
              <li>
                <Link>David Tennant</Link> as the voice of <Link>Huyang</Link>: A lightsaber-crafting droid that has been instructing Jedi for thousands of years.
              </li>
              <li>
                Eman Esfandi as <Link to="/starwars/ezra_bridger">Ezra Bridger</Link>: A former thief from <Link>Lothal</Link> who was trained as a Jedi by
                <Link to="/starwars/kanan_jarrus"> Kanan Jarrus</Link> and disappeared with Thrawn at the end of Rebels.
              </li>
              <li>
                Evan Whitten as <Link>Jacen Syndulla</Link>: The son of Hera Syndulla and Kanan Jarrus who hopes to become a Jedi like his father.
              </li>
              <li>
                <Link>Genevieve O'Reilly</Link> as <Link to="/starwars/mon_mothma">Mon Mothma</Link>: The Chancellor of the New Republic who was a leader of the
                <Link> Rebel Alliance</Link>.
              </li>
              <li>
                <Link>Hayden Christensen</Link> as <Link to="/starwars/anakin_skywalker">Anakin Skywalker / Darth Vader</Link>: <br />
                Ahsoka Tano's former Jedi master who fell to the dark side of the Force and became the Sith lord Darth Vader, before being redeemed with his
                death in film Return of the Jedi (1983). Anakin appears as a <Link>Force ghost</Link> to finish Ahsoka's training. Filoni prioritized seeing
                Christensen's performance over the Darth Vader costume, which is only seen in brief flashes. Filoni kept the focus in these scenes on Ahsoka's
                character development, feeling that Star Wars creator <Link>George Lucas</Link> had already resolved Anakin's character arc in the Star Wars films
                and not wanting to change that. Christensen was digitally de-aged for the role. Hair designer Maria Sandoval closely studied
                <Link to="/starwars/revenge_of_the_sith"> Star Wars: Episode III - Revenge of the Sith</Link> (2005) to replicate Christensen's mullet hairstyle from
                that film. For the Clone Wars flashback, she wanted to show what Christensen's hair would realistically look like if it grew from its appearance in
                <Link to="/starwars/attack_of_the_clones"> Star Wars: Episode II - Attack of the Clones</Link> (2002) to the Revenge of the Sith look, rather than
                directly adapt the "straighter and sort of chunkier" style seen in The Clone Wars.
              </li>
              <li>
                <Link>Lars Mikkelsen</Link> as <Link to="/starwars/grand_admiral_thrawn">Grand Admiral Thrawn</Link>: <br />
                A Chiss high-ranking officer of the Empire who is known for his tactical cunning. He has been missing for years after disappearing with Ezra Bridger
                at the end of Rebels. Mikkelsen said Thrawn was "always seven paces ahead of anybody else", only ruthless when he had to be, and took advantage of
                others' creativity. He chose not to revisit his own performance as Thrawn in Rebels, instead focusing on creating "something new." Thrawn has blue
                skin and red eyes, and Mikkelsen spent two to three hours in make-up each day. His black hair is a wig because Mikkelsen did not have the right
                hairline for the character.
              </li>
              <li>
                <Link>Anthony Daniels</Link> as <Link to="/starwars/c3po">C-3PO</Link>: A protocol droid who serves New Republic senator
                <Link to="/starwars/leia_organa"> Leia Organa</Link>.
              </li>
            </ul>

            <h3 className="article-heading-3" id="2.2">Recurring</h3>

            <h3 className="article-heading-3" id="2.3">Guests</h3>
          </div>
        </div>
        <div>
          <Heading2 id={3} title={"Episodes"} />
          <div>
            <h3 className="article-heading-3" id="3.1">Season 1</h3>
            <TableAhsokaEps />
          </div>
        </div>
        <TableAhsoka />
      </main>
    </>
  )
}

export default AhsokaSeries;