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
            <p>
              On August 10, 2020, it was reported that a Patrick Star talk show titled The Patrick Star Show was in development with a 13-episode order.
              The show is similar to other talk shows such as The Larry Sanders Show and Comedy Bang! Bang!. The series premiered on Nickelodeon on July
              9, 2021, with the series set to be available on Paramount+ later on.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Films</h2>
          <div>
            <h3 className="article-heading-3" id="3.1"><Link>The SpongeBob SquarePants Movie</Link> (2004)</h3>
            <p>
              In this live-action animated comedy, <Link>Plankton</Link>'s plan is to steal <Link>King Neptune</Link>'s crown and send it to the
              dangerous Shell City, and then frame <Link>Mr. Krabs</Link> for the crime. SpongeBob and <Link>Patrick</Link> must journey to Shell City
              while facing several perils along the way to retrieve the crown to save Mr. Krabs from Neptune's wrath and Bikini Bottom from Plankton's
              tyranny.
            </p>
            <h3 className="article-heading-3" id="3.2">The SpongeBob Movie: Sponge Out of Water (2015)</h3>
            <p>
              The plot follows a pirate named Burger Beard (Antonio Banderas), who steals the <Link>Krabby Patty</Link> secret formula using a magical
              book that makes any text written upon it come true. After Bikini Bottom turns into an apocalyptic cesspool and the citizens turn against
              SpongeBob, he must team up with Plankton to find the formula and save Bikini Bottom. Later, SpongeBob, Patrick, Squidward, Mr. Krabs,
              Sandy, and Plankton must travel to the surface to confront Burger Beard and get the formula back before Bikini Bottom is completely
              destroyed.
            </p>
            <h3 className="article-heading-3" id="3.3">The SpongeBob Movie: Sponge on the Run (2020)</h3>
            <p>
              The film centers on SpongeBob and Patrick traveling to the underwater Atlantic City to save Gary from King Poseidon. During the adventure,
              SpongeBob's friends reflect on them first meeting him at Kamp Koral. The film showcass stylized 3D animation, with most of the movie
              presented in full CGI and some parts featuring 3D characters interacting with live-action environments, all animated by Mikros Animation.
            </p>
            <h3 className="article-heading-3" id="3.4">In development</h3>
            <h4 className="article-heading-4" id="3.4.1">The SpongeBob Movie: Search for SquarePants (2025)</h4>
             <p>
              In August 2021, Nickelodeon CEO Brian Robbins, mentioned that "there's a new SpongeBob film in the works". A fourth film was officially
              confirmed in February 2022, with a targeted theatrical release of the film. On November 10, 2022, it was announced that the film will
              release in theaters on May 23, 2025. The film's title was revealed on April 27, 2023. In October 2023 this film's release date was pushed
              back to December 19, 2025.
            </p>
            <h3 className="article-heading-3" id="3.5">Spin-off films</h3>
            <p>
              In early March 2020, ViacomCBS announced that it would be producing two spin-off films based on the series for Paramount+. In February 2022,
              it was revealed that these plans had been revised to three character spin-off films.
            </p>
            <h4 className="article-heading-4" id="3.5.1">Saving Bikini Bottom: The Sandy Cheeks Movie (2024)</h4>
            <p>
              In May 2021, a spin-off Sandy Cheeks feature film was announced to be in development from Nickelodeon for streaming television, to be
              directed by Liza Johnson from script written by Kaz and Tom J. Stern and described as a hybrid feature that will put the animated title
              character into a live-action setting. On August 12, 2021, the title of the movie was revelaed as Saving Bikini Bottom.
            </p>
            <p>
              On August 16, 2021, it was revealed that plans to film Saving Bikini Bottom in Los Alamos were scrapped due to rewrites of the script. In
              February 2022, during the investors call, Nickelodeon CEO Brian Robbins said that they would be working on the three character driven
              spin-off films would release them exclusively on its streamer Paramount+, with the first one premiering in 2023. In February 2023, Netflix
              also picked up distribution rights for the film with a planned 2023 release. In April 2023, it was revealed that the film would instead be
              released in 2024.
            </p>
            <h4 className="article-heading-4" id="3.5.2">Plankton: The Movie (2025)</h4>
            <h3 className="article-heading-3" id="3.6">Fans' short films</h3>
            <h4 className="article-heading-4" id="3.6.1">SpongeBob Squareshorts</h4>
            <p>
              Nickelodeon launched the first global SpongeBob SquarePants-themed short film competition, SpongeBob SquareShorts: Original Fan Tribute,
              in 2013. The contest encouraged fans and filmmakers around the world to create original short films inspired by SpongeBob for a chance to
              win a prize and a trip for four people to a screening event in Hollywood. The contest opened on May 6 and ran through June 28, 2013. On
              July 19, 2013, Nickelodeon announced the competition's finalists. On August 13, 2013, the under 18 years of age category was won by David
              of the United States for his The Krabby Commercial, while the Finally Home short by Nichole of South Africa won the 18 and over category.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Video games</h2>
          <div>
            <p>
              Numerous video games based on the series have been produced. Some of the early games include: Legend of the Lost Spatula (2001), and
              SpongeBob SquarePants: Battle for Bikini Bottom (2003). In 2013, Nickelodeon published and distributed SpongeBob Moves In!, a freemium
              city-building game app developed by Kung Fu Factory for iOS and Android. On June 5, 2019, THQ Nordic announced SpongeBob SquarePants:
              Battle for Bikini Bottom - Rehydrated, a full remake of the console versions of the original 2003 game. The game was released 1 year later
              on June 23, 2020 and includes cut content from the original game. On May 28, 2020, a platform game developed by Old Skull Games named
              SpongeBob SquarePants: Patty Pursuit was released by Nickelodeon on Apple devices through Apple Arcade. In 2021, EA Sports introduced a
              SpongeBob-themed level to the Yard section of its Madden NFL 21 video game.
            </p>
            <p>
              On September 17, 2021, THQ Nordic announced SpongeBob SquarePants: The Cosmic Shake, a new original game based on the franchise.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Comic books</h2>
          <div>
            <p>
              The 32-page bimonthly comic book series, SpongeBob Comics, was announced in November 2010 and debuted the following February. Before this,
              SpongeBob SquarePants comics had been published in Nickelodeon Magazine, and episodes of the television series had been adapted by
              Cine-Manga, but SpongeBob Comics was the first American comic book series developed solely to SpongeBob SquarePants. It also served as
              SpongeBob SquarePants creator Stephen Hillenburg's debut as a comic book author. The series was published by Hillenburg's production
              company, United Plankton Pictures, and distributed by Bongo Comics Group. Hillenburg described the stories from the comic books as
              "original and always true to the humor, characters, and universe of the SpongeBob SquarePants series." Leading up to the release of the
              series, Hillenburg said, "I'm hoping thta fans will enjoy finally having a SpongeBob comic book from me."
            </p>
            <p>
              Chris Duffy, the former senior editor of Nickelodeon Magazine, serves as managing editor of SpongeBob Comics. Hillenburg and Duffy met with
              various cartoonists, including James Kochalka, Hilary Barta, Graham Annable, Gregg Schigel, and Jacob Chabot, to contribute to each issue.
              Retired horror comics writer and artist Stephen R. Bissette returned to write a special Halloween issue in 2012, with Tony Millionaire and
              Al Jaffee. In an interview with Tom Spurgeon, Bissette said, "I've even broken my retirement to do one work-for-hire gig for SpongeBob
              Comics so I could share everthing about that kind of current job."
            </p>
            <p>
              In the United Kingdom, Ttian Magazine published comics based on SpongeBob SquarePants every four weeks from February 3, 2005, through
              November 28, 2013. Titan Magazine also teamed up with Lego to release a limited edition SpongeBob-themed comic.
            </p>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Music</h2>
          <div>
            <p>
              Collections of original music featured in the series have been released on the album SpongeBob SquarePants: Original Theme Highlights (2001),
              SpongeBob's Greatest Hits (2009), and The Yellow Album (2005). The first two charted on the US Billoboard 200, reaching number 171 and 122,
              respectively.
            </p>
            <p>
              Several songs have been recorded for the purpose of a single or album release, and have not been featured on the show. The song "My Tidy
              Whities" written by Tom Kenny and Andy Paley were released only on the album The Best Day Ever (2006). Kenny's inspiration for the song was
              "underwear humor," saying: "Underwear humor is always a surefire laugh-getter with kids ...Just seeing a character that odd wearing really
              prosaic, normal, Kmart, three-to-a-pack underwear is a funny drawing ...We thought it was funny to make a really lush, beatiful love song
              to his underwar."
            </p>
            <p>
              A soundtrack album The SpongeBob SquarePants Movie - Music from the Movie and More..., featured the film's score was released along with
              the feature-length film in November 2004. Various artists including the Flaming Lips, Wilco, Ween, Motorhead, the Shins, and Avril Lavigne
              contributed to the soundtrack that reached number 76 on the US Billboard 200.
            </p>
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
