import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'

const Spongebob = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Development"
            sub={[
              {id: "1.1", title: "Early inspirations"},
              {id: "1.2", title: "Conception"},
              {id: "1.3", title: "Assembling the crew"},
              {id: "1.4", title: "Pitching"}
            ]}
          />
          <Collapse 
            id="2"
            item="Television series"
            sub={[
              {id: "2.1", title: "Spongebob SquarePants (1999-present)"},
              {id: "2.2", title: "Kamp Koral!: Spongebob's Under Years (2021-2024)"},
              {id: "2.3", title: "The Patrick Star Show (2021-present)"}
            ]}
          />
          <Collapse 
            id="4"
            item="Films"
            sub={[
              {id: "4.1", title: "The Spongebob Squarepants Movie (2004)"},
              {id: "4.2", title: "The Spongebob Movie: Sponge Out of Water (2015)"},
              {id: "4.3", title: "The Spongebob Movie: Sponge on the Run (2020)"},
              {id: "4.4", title: "In development", sub2: [
                {id: "4.4.1", title: "The Spongebob Movie: Search for Squarepants (2025)"}
              ]},
              {id: "4.5", title: "Spin-off films", sub2: [
                {id: "4.5.1", title: "Saving Bikini Bottom: The Sandy Cheeks Movie (2024)"},
                {id: "4.5.2", title: "Plankton: The Movie (2025)"}
              ]},
              {id: "4.6", title: "Fans' short films", sub2: [
                {id: "4.6.1", title: "Spongebob Squareshorts"}
              ]},
            ]}
          />
          <li className="sidebar-list-item"><a href="#5">Video games</a></li>
          <li className="sidebar-list-item"><a href="#6">Comic books</a></li>
          <li className="sidebar-list-item"><a href="#7">Music</a></li>
          <li className="sidebar-list-item"><a href="#8">Theater</a></li>
          <li className="sidebar-list-item"><a href="#9">Theme park rides</a></li>
          <li className="sidebar-list-item"><a href="#10">Merchandise</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <ul className="breadcrumb">
          <li><Link to="/">Home</Link></li>
          <li>Spongebob Squarepants (franchise)</li>
        </ul>
        <div>
          <h1 className="article-heading">Spongebob Squarepants (franchise)</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/220px-Star_wars2.svg.png" 
            alt="Spongebob Squarepants logo"
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          Spongebob Squarepants is an American animated comedy media franchise created by marine science eduactor and animator
          <Link> Stephen Hillenburg</Link> and owned by <Link>Nickelodeon</Link>. It begain with the <Link>series</Link>, which premiered in 1999, and
          went on to become one of the longest-running American animated series. The franchise is the most profitable property for Paramount Consumer
          Products, having generated over $13 billion in merchandising revenue.
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Development</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Early inspirations</h3>
            <p>
              Series' creator Stephen Hillenburg first became fascinated with the ocean as a child and began developing his artistic abilities at a young
              age. Although these interests would not overlap for some time, the idea of drawing fish seemed boring to him, Hillenburg pursued both
              during college, majoring in marine biology and minoring in art. After graduating in 1984, he joined the Ocean Institue, an organization in
              Dana Point, California, dedicated to educating the public about marine science and maritime history.
            </p>
            <p>
              While Hillenburg was there, his love of the ocean began to influence his artistry. He created a precursor to Spongebob Squarepants: a
              comic book titled The Intertidal Zone used by the institute to teach visiting students about the animal life of tide pools. The comic
              starred various anthropomorphic sea lifeforms, many of which would evolve into Spongebob Squarepants characters. Hillenburg tried to get
              the comic professionally published, but none of the companies he sent it to were interested.
            </p>
            <p>
              A large inspiration to Hillenburg was Ween's 1997 album The Mollusk, which had a nautical and underwater theme. Hillenburg contacted the
              band shortly after the album's release, explaining the baseline ideas for Spongebob Squarepants, and also requesed a song from the band,
              which they sent on Christmas Eve. This song was "Loop de Loop", which was used in the episode "Your Shoe's United".
            </p>
            <h3 className="article-heading-3" id="1.2">Conception</h3>
            <p>
              While working as a staff artist at the Ocean Institute, Hillenburg entertained plans to return eventually to college for a master's
              degree in art. Before this could materialize, he attended an animation festival, which inspired him to make a slight change in course.
              Instead of continuing his education with a traditional art program, Hillenburg chose to study experimental animation at the California
              Institute of the Arts. His thesis film, Wormholes, is about the theory of relativity. It was screened at festivals, and at one of these,
              Hillenburg met Joe Murray, creator of the popular <Link>Nickelodeon</Link> animated seres, Rocko's Modern Life. Murray was impressed by
              the style of the film and offered Hillenburg a job. Hillenburg joined the series as a director, and later during the fourth season, he took
              on the roles of producer and creative director.
            </p>
            <p>
              Martin Olson, one of the writers for Rocko's Modern Life, read The Intertidal Zone and encouraged Hillenburg to create a television series
              with a similar concept. At that point, Hillenburg had not even considered creating his own series. However, he realized that if ever did,
              this would be the best approach. He began to develop some of the characters from The Intertidal Zone, including the comic's "announcer",
              Bob the Sponge. He wanted his series to stand out from most popular cartoon of the time, which he felt was exemplified by buddy comedies
              like The Ren & Stimpy Show. As a result, Hillenburg decided to focus on a single main character: the "weirdest" sea creature he could think
              of. This led him to the sponge. The Intertidal Zone's Bob the Sponge resembles an actual sea sponge, and at first, Hillenburg continued to
              use this design. In determining the new character's behavior, Hillenburg drew inspiration from innocent, childlike figures that he enjoyed,
              such as Charlie Chaplin, Laurel and Hardy, Jerry Lewis, and Pee-wee Herman. He then considered modeling the character after a kitchen
              sponge and realized this idea would match the character's square personality perfectly. Patrick, Mr. Krabs, Pearl, and Squidward were the
              next characters Hillenburg created for the show.
            </p>
            <p>
              To voice the series's central character, Hillenburg turned to <Link>Tom Kenny</Link>, whose career in animation had started alongside
              Hillenburg's on Rocko's Modern Life. Elements of Kenny's own personality were employed to develop the character further. Initially,
              Hillenburg wanted to use the name Spongeboy, the character had no last name, and the series was to have been called Spongeboy Ahoy!
              However, the Nickelodwon legal department discovered, after voice acting had been completed for the original seven-minute pilot episode,
              that the name "SpngeBoy", was already in use for a mop product, and a character of the same name was already in trademark by Flaming
              Carrot Comics creator Bob Burden. In choosing a replacement name, Hillenburg felt he still had to use the word "Sponge", so that viewers
              would not mistake the character for a "Cheese Man". He settled on the name "SpongeBob". "SquarePants" was chosen as a family name after
              Kenny saw a picture of the character and remarked, "Boy, look at this sponge in square pants, thinking he can get a job in a fast food
              place." When he heard Kenny say it Hillenburg loved the phrase and felt it would reinforce the character's nerdiness.
            </p>
            <h3 className="article-heading-3" id="1.3">Assembling the crew</h3>
            <p>
              Derek Drymon, who served as creative director for the first three seasons, has said that Hillenburg wanted to surround himself with a
              "team of young and hungry people." Many of the major contributors to SpongeBob SquarePants had worked before with Hillenburg on Rocko's
              Modern Life: this included: Drymon, art director Nick Jennings, supervising director Alan Smart, writer / voice actor <Link>Doug
              Lawrence</Link> (often credited as Mr. Lawrence), and Tim Hill, who helped develop the series bible.
            </p>
            <p>
              Although Drymon would go on to have a significant influence on SpongeBob SquarePants, he was not offered a role on the series initially.
              As a late recruit to Rocko's Modern Life, he had not established much of a relationship with Hillenburg before SpongeBob's conception.
              Hillenburg first sought out Drymon's storyboard partner, Mark O'Hare, but he had just created the soon-to-be syndicated comic strip,
              Citizen Dog. While he would later join SpongeBob as a writer, he lacked the time to get invloved with both projects from the outset.
              Drymon has said, "I remember Hillenburg's bringing it up to Mark in our office and asking him if he'd be interested in working on it ... I
              was all ready to say yes to the offer, but Steven didn't ask; he just left the room. I was pretty desperate ...so I ran into the hall
              after him and basically begged him for the job. He didn't jump at the chance." Once Hillenburg had given it some thought and decided to
              bring Drymon on as creative director, the two began meeting at Hillenburg's house several times a week to develop the series. Drymon has
              identified this periods as having begun in 1996, shortly after the end of Rocko's Modern Life.
            </p>
            <p>
              Jennings was also instrumental in SpongeBob's genesis. Kenny has called him "one of SpongeBob's early graphics mentors". On weekends, Kenny
              joined Hillenburg, Jennings, and Drymon for creative sessions where they recorded ideas on a tape recorder. Kenny performed audio tests as
              SpongeBob during these sessions, while Hillenburg voice acted the other characters.
            </p>
            <p>
              Hill contributed scripts for several first-season episodes (including the pilot) and was offered the role of story editor, but turned it
              down, he would go on to pursue a career as a family film director. In his stead, Pete Burns was brought in for the job. Burns hailed from
              Chicago and had never met any of the principal players on SpongeBob before joining the team.
            </p>
            <h3 className="article-heading-3" id="1.4">Pitching</h3>
            <p>
              While pitching the cartoon to Nickelodeon executives, Hillenburg donned a Hawaiian shirt, brought along an "underwater terrarium with models
              of the characters", and played Hawaiian musice to set the theme. The setup was described by Nickelodeon executive Eric Coleman as "pretty
              amazing". They were given money and two weeks to write the pilot episode "<Link>Help Wanted</Link>". Drymon, Hillenburg, and Jennings
              returned with what was described by Nickelodeon offical Albie Hecht as, "a performance [he] wished [he] had on tape". Although executive
              producer Detek Drymon described the pitch as stressful, he said it went "very well". Kevin Kay and Hecht had to step outside because they
              were "exhausted from laughing", which worried the cartoonists.
            </p>
            <p>
              In an interview, Cyma Zarghami, then-president of Nickelodeon, said, "their [Nickelodeon executives'] immediate reaction was to see it
              again, both because they liked it and it was unlike anything they'd ever seen before". Zarghami was one of four executives in the room when
              SpongeBob SquarePants was screened for the first time.
            </p>
            <p>
              Before commissioning the full series, Nickelodeon executives insisted that it would not be popular unless SponbeBob was a child who went to
              school, with his teacher as a main character. Hillenburg recalled in 2012 that Nickelodeon told him, "Our winning formula is animation about
              kids in school... We want you to put SpongeBob in school." Hillenburg was ready to "walk out" on Nickelodeon and abandon the series, since
              he wanted SpongeBob to be an adult character. He eventually compromised by adding a new character to the main cast, Mrs. Puff, who is a
              boat-driving teacher. Hillenburg was happy with the compromise and said, "A positive thing for me that came out of it was [how it brought]
              in a new character, Mrs. Puff, who I love."
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Television series</h2>
          <div>
            <h3 className="article-heading-3" id="2.1"><Link>SpongeBob SquarePants</Link> (1999-present)</h3>
            <p>
              The series is set in the fictional underwater city of <Link>Bikini Bottom</Link>, and centers on the adventures and endeavors of
              SpongeBob Squarepants, an over-optimistic sea sponge that annoys other characters.
            </p>
            <h3 className="article-heading-3" id="2.2">Kamp Koral!: SpongeBob's Under Years (2021-2024)</h3>
            <p>
              On February 14, 2019, it was announced that a SpongeBob SquarePants spin-off is in development. On June 4, it was announced the spin-off
              will be titled Kamp Koral. The plot will focus on a 10-year old SpongeBob and his friends at the titular camp located in the Kelp Forest,
              where they spend the summer catching jellyfish, building campfires, and swimming in Lake Yuckymuck. It serves as a tie-in to the animated
              film <Link>The SpongeBob Movie: Sponge on the Run</Link>. It was confirmed production of the series began in June 2019.
            </p>
            <p>
              Nickelodeon animation head Ramsey Naito said of the series, "SpongeBob has an incredible universe to expand upon and the greenlight for Kamp
              Koral is a testament to the strength and longevity of these characters known and loved by generations of fans around the world." Like
              SpongeBob SquarePants, the series is co-executive produced by Marc Ceccarelli, Jennie Monica, and Vincent Waller. Kamp Koral is produced
              using computer animation rather than the digital ink and paint animation used for SpongeBob SquarePants.
            </p>
            <p>
              On February 19, 2020, it was announced that the series had an official title of Kamp Koral: SpongeBob's Under Years, and would be premiering
              in July 2020. On July 30, 2020, it was announced that that the series would be released on CBS All Access (now Paramount+), the ViacomCBS
              streaming service, in early 2021. On January 28, 2021, it was announced that the series would premiere on March 4, 2021.
            </p>
            <h3 className="article-heading-3" id="2.3">The Patrick Star Show (2021-present)</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Films</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">The SpongeBob SquarePants Movie (2004)</h3>
            <h3 className="article-heading-3" id="3.2">The SpongeBob Movie: Sponge Out of Water (2015)</h3>
            <h3 className="article-heading-3" id="3.3">The SpongeBob Movie: Sponge on the Run (2020)</h3>
            <h3 className="article-heading-3" id="3.4">In development</h3>
            <h4 className="article-heading-4" id="3.4.1">The SpongeBob Movie: Search for SquarePants (2025)</h4>
            <h3 className="article-heading-3" id="3.5">Spin-off films</h3>
            <h4 className="article-heading-4" id="3.5.1">Saving Bikini Bottom: The Sandy Cheeks Movie (2024)</h4>
            <h4 className="article-heading-4" id="3.5.2">Plankton: The Movie (2025)</h4>
            <h3 className="article-heading-3" id="3.6">Fans' short films</h3>
            <h4 className="article-heading-4" id="3.6.1">SpongeBob Squareshorts</h4>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Video games</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Comic books</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Music</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="7">Theater</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="8">Theme park rides</h2>
          <div>

          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="9">Merchandise</h2>
          <div>

          </div>
        </div>
      </main>
    </>
  )
}

export default Spongebob
