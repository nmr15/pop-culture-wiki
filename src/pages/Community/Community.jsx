import { Link } from 'react-router-dom'

const Community = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li className="py-1">
            <a href="#top">Top</a>
          </li>
          <li className="py-1">
            <a href="#1">Premise</a>
          </li>
          <li className="py-1">
            <a href="#2">Cast and characters</a>
          </li>
          <div className="py-1">
            <span className="dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="false" aria-controls="collapse3"></span>
            <li className="d-inline ms-2">
              <a href="#3">Production</a>
              <ul className="collapse" id="collapse3">
                <li className="py-1">
                  <a href="#3.1">Casting</a>
                </li>
                <li className="py-1">
                  <a href="#3.2">Development</a>
                </li>
                <li className="py-1">
                  <a href="#3.3">Writing</a>
                </li>
                <li className="py-1">
                  <a href="#3.4">Filming</a>
                </li>
              </ul>
            </li>
          </div>
          <div className="py-1">
            <span className="dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="false" aria-controls="collapse4"></span>
            <li className="d-inline ms-2">
              <a href="#4">Episodes</a>
              <ul className="collapse" id="collapse4">
                <li className="py-1"><a href="#4.1">First season</a></li>
                <li className="py-1"><a href="#4.2">Second season</a></li>
                <li className="py-1"><a href="#4.3">Third season</a></li>
                <li className="py-1"><a href="#4.4">Fourth season</a></li>
                <li className="py-1"><a href="#4.5">Fifth season</a></li>
                <li className="py-1"><a href="#4.6">Sixth season</a></li>
                <li className="py-1"><a href="#4.7">Webisodes</a></li>
              </ul>
            </li>
          </div>
          <li className="py-1"><a href="#5">Film</a></li>
          <div className="py-1">
            <span className="dropdown-toggle d-inline ptr" data-bs-toggle="collapse" data-bs-target="#collapse6" aria-expanded="false" aria-controls="collapse6"></span>
            <li className="d-inline ms-2">
              <a href="#6">Reception</a>
              <ul className="collapse" id="collapse6">
                <li className="py-1"><a href="#6.1">Critical reception</a></li>
              </ul>
            </li>
          </div>
        </ul>
      </nav>
      <main className="main px-5 py-4" id="top">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">Community</li>
          </ol>
        </nav>
        <div>
          <h1 className="article-heading">Community</h1>
        </div>
        <div className="img-right pt-2">
          <img
            src="https://oyster.ignimgs.com/mediawiki/apis.ign.com/community-tv/a/a3/Community-logo.jpg"
            alt="Community"
            className="article-heading-img"
          />
        </div>
        <div className="pt-2">
          <p>
            <b>Community</b> is an American television sitcom created by <a href="#">Dan Harmon</a>. The series ran
            for <a href="#">110 episodes</a> over six seasons, with its first five seasons airing on <a href="#">NBC</a> from
            September 17, 2009, to April 17, 2014, and its final season airing on <a href="#">Yahoo! Screen</a>
            from March 17 to June 2, 2015. Set at a community college in the fictional Colorado
            town of Greendale, the series stars an ensemble cast including <a href="#">Joel McHale</a>, <a href="#">Gillian Jacobs</a>,
            <a href="#">Danny Pudi</a>, <a href="#">Yvette Nicole Brown</a>, <a href="#">Alison Brie</a>, <a href="#">Donald Glover</a>, <a href="#">Ken Jeong</a>,
            <a href="#">Chevy Chase</a>, and <a href="#">Jim Rash</a>. It makes use of meta-humor and pop culture references,
            paying homage to film and television clichés and tropes.
          </p>
          <p>
            Harmon based Community on his experiences attending Glendale Community College.
            Each episode was written in accordance with Harmon's "story circle" template, a
            method designed to create effective and structured storytelling. Harmon was the
            showrunner for the first three seasons byt was fired before the fourth and replaced by
            David Guarascio and Moses Port. After weaker reviews, Harmon was rehired for the
            fifth season, after which NBC canceled the series. Yahoo! Screen revived the show for
            Community's sixth and final season.
          </p>
          <p>
            Despite sturggling in the ratings, Community developed a cult following and received
            acclaim for its acting, direction, writing, and meta-humor. It won a Primetime Emmy
            Award from four nominations and received the Critics' Choice Television Award for Best
            Comedy Series in 2012, among other accolades. In September 2022, after several
            years of speculation and development, a featre-length Community film was announced
            for NBCUniversal's streaming service <a href="#">Peacock</a>
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Premise</h2>
          <p>
            <a href="#">Jeff Winger</a> is disbarred and suspended from his law firm when it is discovered he lied
            that he lied about having a bachelor's degree from Columbia University. To earn a legitimate
            degree, he enrolls in Greendale Community College in Colorado. He quickly becomes attracted
            to his classmate, social activist <a href="#">Britta Perry</a>, and pretends to run a study group
            in order to spend time with her. Britta invites classmate <a href="#">Abed Nadir</a>,
            a socially awkward and pop culture obsessed student, who in turn brings other classmates along;
            religious single mother <a href="#">Shirley Bennett</a>; naive over-achiever
            <a href="#">Annie Edison</a>; former high school football star <a href="#">Troy Barnes</a>;
            and bigoted, elderly millionair <a href="#">Pierce Hawthorne</a>. Despite their differences, 
            the group's members soon become close friends. They are often roped into helping the college's
            flamboyant dean, <a href="@">Craig Pelton</a>, in his schemes to make the school seem more
            respectable, as well as having to deal with the antics of their mentally unstable teacher
            (and eventual classmate and friend) <a href="#">Ben Chang</a>.
          </p>
          <p>
            Season 1 follows Jeff's creation of the study group and its subsequent misadventures. Season 2
            sees Chang forced to enroll as a student and attempt to join the study group despite secretly
            planning revenge against it, while Pelton is forced to fight for Greendale's sense of pride against
            the dean of a rival school, City College, eventually culminating in a desperate paintball battle.
            Season 3 focuses on Chang's villanous plot to take over the school, as well as Troy's struggle
            with whether or not to attend the cult-like air conditioning repair school. Season 4 shows the
            study group in its senior year, with all the characters (especially Abed) struggling with what
            may be their final moments together, and Chang recovering from "Changnesia" (a fake amnesia
            which Chang uses as a coverup). Season 5 sees Pierce's death and Troy leaving in the middle of
            the season, while the other characters return to Greendale after graduation to save the school,
            leading Jeff to take a job there as a teacher. Season ends the series with the characters reflecting
            on the last six years while new staff member Frankie Dart arrives at the dysfunctional school
            to make it more respectable, forcing the group to question how much Greendale can be cleaned up while
            still remianing Greendale.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Cast and characters</h2>
          <p>
            The show features an ensemble cast of characters, focusing on the members of a study group and a
            recurring group of faculty of Greendale Community College, including the school's dean.
          </p>
          <ul>
            <li>
              <a href="#">Joel McHale</a> as <a href="#">Jeff Winger</a>, a former lawyer who enrolls at Greendale after
              being suspended by the state bar for falsely claiming to have a bachelor's degreen from Columbia University.
              Jeff is a sarcastic, outspoken, overconfident lothario who often manipulates people to get what he wants.
              He first created the study group in an attempt to get with Britta, a girl in his Spanish class, through
              the ruse of being a Spanish tutor who could help Britta pass the course. As he becomes closer to his
              new study group, his old habits and views change. Most of the group (except Britta, who see through his
              facade) tends to idolize Jeff for his charisma (particularly in the first season), and often seek advice
              from him. Although he initially fits his role as the group's straight man, appearing indifference to their
              concerns before grudgingly helping them, Jeff becomes more willing to make personal sacrifices for his
              friends over time and slowly reveals that he has a great deal of care and reverence for his study group.
            </li>
            <li>
              <a href="#">Gillian Jacobs</a> as <a href="#">Britta Perry</a>, an anarchist, athiest, and activist who traveled
              around the world after dropping out of high school. Britta tries to be productive, intelligent, and mature, but
              often comes off as pretentious and hypocritical. She has a tendency to lack direction and make things go wrong.
              Despite not being as wordly or well-informed an activist as she thinks, Britta has a genuine desire to help
              others, and she cares deeply for her friends.
            </li>
            <li>
              <a href="#">Danny Pudi</a> as <a href="#">Abed Nadir</a>, a film student of Palestinian and Polish descent,
              with an encyclopedic knowledge of TV shows and movies. Abed struggles to interact with others via conventional
              means due to his autism, so he often chooses to interpret the group's everyday activities by comparing them to film
              and TV cliches. Despite being out of touch with reality at times, Abed is a keen observer of human behavior and
              often the wisest member of the group. These eccentricities allow him to pick up on flaws the other characters
              have and tend to bluntly point them out, eventually resulting in the characters learning from his insights.
              Harmon based the character on Abed Gheith, whome he met through Channel 101.
            </li>
            <li>
              <a href="#">Yvette Nicole Brown</a> as <a href="#">Shirley Bennett</a> (seasons 1-5; guest season 6), a divorced
              mother and vocal Christian going to school to start a brownie business. Shirley is a kind-hearted person with strong
              morals, but can be overbearing and often resorts to using guilt to get what she wants or to control her friends'
              behavior. Though usually soft-spoken, Shirley has a quick temper, a characteristic that manifests when she is
              advocating for herself or her friends. It is often implied that Shirley's Christian beliefs, which she tends to
              impose on most non-Christians around her, are a means of coping with her anger issues and repressing the stress she
              deals with in raising her family while also in school.
            </li>
             <li>
              <a href="#">Alison Brie</a> as <a href="#">Annie Edison</a>, the youngest of the group, a compulsive overachiever,
              relentlessly organized and comparatively innocent. Annie was extremely unpopular in high school and formerly addicted
              to Adderall, which has caused her to be very anxious and desperate to prove herself to others. Though normally kind-hearted,
              she can quickly turn obsessive or lose her temper when she fails to achieve her goals or is denied something she
              strongly cares about. Her friendship with the study group, as well as her living situation with Troy and Abed, slowly
              allows her to become more laid-back and genial.
            </li>
            <li>
              <a href="#">Donald Glover</a> as <a href="#">Troy Barnes</a> (seasons 1-5), a former high school star quarterback who
              lost his scholarh=ship to a top-tier university when he dislocated both shoulders doing a keg flip, which he did on purpose
              in order to escape pressures of his stardom and popularity. Troy begins the series trying to appear cool, acting like
              a stereotypical football player, but he eventually feels comfortable in embracing his nerdy and carefree side, particularly
              thanks to his becoming best friends with Abed. Troy struggles with the idea of growing up, often looking to Jeff and Pierce
              for guidance. Still, he often shows signs of being capable of leadership and bringing the group together.
            </li>
            <li>
              <a href="#">Chevy Chase</a> as <a href="#">Pierce Hawthorne</a> (seasons 1-4; guest season 5), a millionaire and CEO of the
              Hawthorne Wipes moist towelette company who enrolled in Greendale a decade prior to the start of the series for the sake of
              keeping his mind active. More than anyone else within the study group, Pierce is often at odds with the rest of the group
              because of his arrogance, lack of empathy, and casual ignorance of politically correct behavior, all of which largely stern
              from his old age and his emotionally abusive father. This includes believing Britta is a closeted lesbian, lusting over Shirley,
              and casual racism. He also tends to envy the other group members, particularly Jeff's relative youthful attractiveness and
              Abed's close friendship with Troy. Despite his often unsociable and selfish nature, Pierce desperately wants to fit in with
              the group and occasionally offers great insight and advice, showing that he does care greatly for each of the group members.
            </li>
             <li>
              <a href="#">Ken Jeong</a> as <a href="#">Ben Chang</a>, an unstable Spanish teacher at Greendale. Chang often takes extreme
              action against his students, often yelling at them for the slightest infraction or using his superior status to taunt them.
              He has alternately been a friend and foe of the study group, his ultimate desire being to fit in with them and become a part
              of the study group, though his behavior makes them desperate not to include him. After Annie gets him fired at the end of
              season 1, Chang alternates between a variety of roles, becoming a student in season 2, a security guard in season 3, as Kevin
              who is suffering from "Changnesia" (a fake disease similar to amnesia) during season 4, a math teacher under work release
              in season 5, and a member of the Save Greendale Committee in season 6.
            </li>
            <li>
              <a href="#">Jim Rash</a> as <a href="#">Craig Pelton</a> (seasons 3-6; recurring seasons 1-2), the dean of Greendale, who
              desperately wants his school to be more like a real university and goes to extreme lengths to try to make it fun, wacky, and
              politically correct, while making various questionable business decisions regarding his school. A man of unclear sexual
              orientation, he frequently attempts to flirt with Jeff and is an increasingly avid cross-dresser. In season 6, he identifies
              himself as gay, though he views it as an insufficient label. The study group is by far the Dean's favorite group of students,
              and he is constantly making up excuses to come talk to them, often by walking into their study room unannounced while wearing
              a costume, to tell them about events going on in the school.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Production</h2>
          <h3 className="pt-2" id="3.1">Casting</h3>
          <p>
            <a href="#">Dan Harmon</a> emphasized the importance of the cast to making the premise of the comedy work. "Casting was 95
            percent of putting the show together," he said in an interview. He had worked with several of the cast members previously. Actor
            Chevy Chase had long been a favorite of Harmon. Though initially not partial to sitcoms, Chase was persuaded by the quality of
            the show's writing to take the job. Harmon saw similarities between Chase and the character he plays on the show. Though Chase
            has often been ridiculed for his career choices, Harmon believed this role could be redeeming: "What makes Chevy and Pierce
            heroic is this refusal to stop." Harmon had to warn Chase against playing "a wise ass" the way he often does in his roles, since
            the character of Pierce is a rather pathetic figure who is normally the butt of the joke himself. 
          </p>
          <p>
            McHale, known from the E! comedy talk show The Soup, was also impressed by Harmon's writing. He commented, "Dan's script was so
            head and shoulders above everything else that I was reading." McHale appealed to Harmon because of his likability, which allowed
            the character to possess certain unsympathetic traits without turning the viewers against him. To play Annie,  Harmon wanted
            someone resembling Tracy Flick, Reese Witherspoon's character in the 1999 movie Election. Originally the producers were looking for
            a Latina or Asian Tracy Flick, but they cast Alison Brie, known for her role as Trudy Campbell on Mad Men.
          </p>
          <h3 className="pt-2" id="3.2">Development</h3>
          <p>
            Harmon based the premise of Community on his own experiences. In an attempt to save his relationship with his then-girlfriend, he
            enrolled in Glendale Community College northeast of Los Angeles, where they would take Spanish together. Harmon got involved in a
            study group and, somewhat against his own instincts, became close firneds with the members, with whom he had very little in common.
            "I was in this group with these knuckleheads and I started really liking them," he explained, "even though they had nothing to do
            with the film industry and I had nothing to gain from them and nothing to offer them." With this background, Harmon wrote the show
            with a main character largely based on himself. He had, like Jeff, been arrogant and emotionally distant to the extreme
            before he realized the value of understanding other people.
          </p>
          <p>
            About the creative process behing the writing, Harmon said that he had to write the show as if it were a movie, not a sitcom.
            Essentially, the process was no different from the earlier works he had done, except for the length and the target demographic.
          </p>
          <h3 className="pt-2" id="3.3">Writing</h3>
          <p>
            Each episode of Community is written in accordance with Dan Harmon's template of "story circles" that he developed while at Channel
            101. Harmon rewrote every episode (except while not working on the show during its fourth season), which helps lend the show his
            particular voice. Members of the Community writing staff have included Liz Cackowski, Dino Stamatopoulos, Chris McKenna, Megan Ganz,
            Andy Bobrow, Alex Rubens, Tim Saccardo and Matt Warburton. Cast member Jim Rash, who won an Academy Award in 2011 for co-writing the
            film The Descendants, also wrote a season four episode.
          </p>
          <p>
            The show is known for its frequent use of thematic episodes every season, which use cliches and television tropes as single-episode
            concepts that play with suspension of disbelief while maintaining plot continuity. One notable thematic episode is Season 3's
            "<a href="">Remedial Chaos Theory</a>", in which the cast explore seven different parallel realities of the same night, with one key
            variation being a roll of a single six-sided die in a game of Yahtzee that Jeff uses to dismiss a member of the group to get a pizza
            (the seventh variant is that the die was not rolled at all). Frequent episode themes are school-year holidays (Halloween and Christmas
            being the most frequent), paintball, and various forms of animation.
          </p>
          <h3 className="pt-2" id="3.4">Filming</h3>
          <p>
            Filming the show involved a lot of improvisation, particularly from Chase. Of Chase, Harmon said that he "tends to come up with lines
            that you can actually end scens with sometimes". He had also called McHale and Glover adept improvisers. Apart from a few exterior
            scenes shot at Los Angeles City College, the show was filmed at the Paramount Studios lot in Hollywood, California, during
            seasons one through five. For season six, the series moved to the CBS Studio Center, and featured exterior scenes from Los Angeles City
            College for the first time since season two. The series used the single-camera technique, where each shot is filmed individually,
            using the same camera.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Episodes</h2>
          <p>
            Most episodes feature titles designed to sound like the names of college courses such as "Intoduction to Film", "Anthropology 101"
            and "Cooperative Calligraphy".
          </p>
          <p>
            The complete series was released on DVD in region 1 on November 15, 2016. Special features include all the features from the first six
            seasons. One June 6, 2018, it was announced that Community: The Complete Series would be released by Mill Creek Entertainment on
            high-definition Blu-ray on October 23, 2018.
          </p>
          <h3 className="pt-2" id="4.1">First season</h3>
          <div class="accordion" id="accordionS1">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#season1" aria-expanded="true" aria-controls="season1">
                  Season 1
                </button>
              </h2>
              <div id="season1" class="accordion-collapse collapse show" data-bs-parent="#accordionS1">
                <ul class="list-group">
                  <Link to="/community/pilot">
                  <li class="list-group-item">Pilot</li>
                  </Link>
                  <li class="list-group-item">Spanish 101</li>
                </ul>
              </div>
            </div>
          </div>
          <p>
            The first season of Community premiered on September 17, 2009, in the 9:30 pm ET Thursday time slot, and ended on May 20, 2010. After
            three episodes, the show was moved to 8:00 pm ET.
          </p>
          <p>
            NBC initially ordered 13 episodes, but in October 2009, it was announced that the show had been picked up for a full 22-episode season.
            In January 2010, NBC ordered an additional three episodes for the first season, extending it to 25. The first seasons was released in
            region 1 on September 21, 2010, in a four-disc set. The set included all 25 episodes plus bonus features, including commentary on every
            episode by cast and crew members; extended versions of the "Pilot" and "Communication Studies" episodes; outtakes; "Season One Cast
            Evaluations" featurette; "Season One Highlight Reel" featurette; "Creative Compromises" featurette; "Advanced Criminal Law" alternative
            scenes; and three mini episodes.
          </p>
          
          <h3 className="pt-2" id="4.2">Second season</h3>
          <p>
            On March 5, 2010, NBC renewed Community for a 22-episode second season. It would premier on September 23, 2010, and would conclude on
            May 12, 2011. NBC ordered 2 additional episodes for the second season on November 3, 2010, bringing it to a total of 24 episodes.
            The second season was released in region 1 on September 6, 2011. It features commentary on every episode by cast and crew members;
            outtakes; animatics for "Abed's Uncontrollable Christmas" and making-of featurettes covering that episode as well as "A Fistful of
            Paintballs" and "For a Few Paintballs More".
          </p>
          <h3 className="pt-2" id="4.3">Third season</h3>
          <p>
            The series was renewed for a third season on March 17, 2011. Filming for the season began on July 25, 2011. Jim Rash, who portrays
            Dean Pelton, was promoted to a series regular after having a recurring role throughout the first two seasons. Michael K. Williams
            was cast as the study group's new biology professor, who is described as a deeply intense character. John Goodman appears as a recurring
            character throughout the season as Vice Dean Laybourne, the head of Greendale's air conditioning repair school, and is a foe for Dean
            Pelton.
          </p>
          <p>
            Community premiered its third season on September 22, 2011. On November 14, 2011, NBC announced that they removing Community from 
            their mid-season schedule, replacing it with the returning series <a href="#">30 Rock</a>. Fans of the series began a campaign
            to get the show back on the air using Twitter, Tumblr, and Facebook, making hashtags such as #SaveCommunity, #SixSeasonsAndAMovie,
            and #OccupyNBC trending topics. NBC responded to the backlash by announcing that the network was still planning to film and air
            the remainder of the 22 planned episodes after the undetermined hiatus, and that the fate of the series would be determined after
            the planned episodes air.
          </p>
          <p>
            On December 7, 2011, CollegeHumor released a video titled "Save Greendale (with the cast of Community)" using the cast of
            Community in-character to promote the series and the school in a PSA-style video. On December 22, 2011, fans of the series
            created a flash mob outside of NBC's Rockefeller Center headquarters in New York City to Occupy NBC. The flash mob dressed in
            Christmas gear, wearing "darkest timeline" goatees, and singing "O' Christmas Troy" from the first season's episode "Comparative
            Religion" and chanting "Go Greendale, go Greendale go". On January 6, 2012, NBC entertainment chairman Robert Greenblatt announced
            that Community was not canceled, though he did not mention a return date. On February 21, 2012, creator Dan Harmon announced via
            Twitter that the third season would resume on March 15, 2012, in the regular timeslot of Thursdays at 8:00 pm.
          </p>
          <p>
            The third season was released in region 1 on August 14, 2012. It features commentary on every episode by cast and crew members;
            gag reels; deleted scenes; "This is War: Pillows vs. Blankets mockumentary" featurette; and "A Glee-ful Community Christmas"
            featurette.
          </p>
          <h3 className="pt-2" id="4.4">Fourth season</h3>
          <p>
            On May 10, 2012, Community was renewed for a fourth season consisting of 13 episodes. Series creator and executive producer Dan
            Harmon was replaced as showrunner for the series in the fourth season, as writers David Guarascio and Moses Port (co-creator of
            the short-lived Aliens in America) took over as showrunners and executive producers. Sony Pictures Television, which produced the
            series with Universal Television, initially said that Harmon would serve as a consulting producer, but Harmon asserted that he
            was not informed of the deal and would not return in a position without any executive prerogatives. The end of the third season
            also marked several other departures including executive producers Neil Goldman and Garrett Donovan, writer/producer Chris McKenna
            and actor/writer Dino Stamatopoulos. Frequent episode directors and executive producers <a href="#">Anthony and Joe Russo</a> also
            left the show in order to direct <a href="#">Captain America: The Winter Soldier</a>.
          </p>
          <p>
            In early October 2012, NBC delayed the premier of the fourth season, which had been scheduled for October 19, 2012, without announcing
            a new date. On October 30, 2012, NBC announced that the fourth season would premiere February 7, 2013, returning to its original
            time slot of Thursdays at 8:00 pm.
          </p>
          <p>
            On November 21, 2012, after allegedly using a racial slur on set, it was announced that Chevy Chase left the show by mutual agreement
            between the actor and network. As a result of timing and the agreement made, Chase's character Pierce is absent for two episodes--he
            did not appear in the tenth episode (produced the ninth), "Intro to Knots", and the twelfth episode, "Heroic Origins". He also
            appeared in a voice-only role in the episode "Intro to Felt Surrogacy", which was the final episode produced for the season, and as
            part of his agreement to leave the show, Chase was required to record all audio for the scenes where his character, alongside the other
            characters, appeared as a puppet. The season finale, which was filmed out-of-sequence, as it was the eleventh episode produced, marked
            Chase's final on-screen appearance as a regular cast member. He appeared in a cameo in the season 5 premiere.
          </p>
          <p>
            The fourth season was released in region 1 on August 6, 2013. It features commentary on every episode by cast and crew members; gag reel;
            deleted scenes; "Inspector Spacetime: Inspection" featurette, and Adventure in Advanced Puppery featurette.
          </p>
          <h3 className="pt-2" id="4.5">Fifth season</h3>
          <p>
            On May 10, 2013, the series was renewed for a fifth season. On June 1, 2013, Harmon announced he would return as showrunner for season five,
            replacing season four showrunners Moses Port and David Guarascio, with former writer Chris McKenna returning as executive producer. On June 10,
            Sony Television confirmed the return of Harmon and McKenna for the fifth season. Dino Stamatopoulos, Rob Schrab, and the Russo brothers also
            returned.
          </p>
          <p>
            Glover decided to not return as a full-time cast member for the fifth season, appearing only in the first five of the 13 episodes. To make up
            for his absence and Chase's, Jonathan Banks was cast in the fifth season in August 2013 and appeared in 11 of the season's 13 episodes, portraying
            Buzz Hickey, a criminology professor. Additionally, John Oliver, who played Professor Duncan in the first two seasons, reprises his role in
            season 5 for multiple episodes.
          </p>
          <p>
            On May 9, 2014, NBC announed that it had cancelled Community. For several years before its cancellation, fans adopted the slogan "six seasons and
            a movie", a line from the second season episode "Paradigms of Human Memory" regarding Abed's hopeful legacy of short-lived NBC series The Cape.
            Bids to continue the series were turned down by popular streaming providers like Netflix and Hulu.
          </p>
          <p>
            The fifth season was released in region 1 on August 5, 2014. It features commentary on every episode by cast and crew members; gag reel; and two
            featurettes, "Re-Animating the '80s" and "Advanced Television Production: 5 Days, 2 Scripts, No Sleep".
          </p>
          <h3 className="pt-2" id="4.6">Sixth season</h3>
          <p>
            On June 30, 2014, the day the cast's contracts were due to expire, Yahoo! announced it had ordered a 13-episode sixth season to stream on Yahoo!
            Screen, including the main cast along with executive producers Dan Harmon, Chris McKenna, Russ Krasnoff, and Gary Foster. Harmon said, "I am very
            pleased that Community will be returning for its predestined sixth season on Yahoo ... I look forward to bringing our beloved NBC sitcom to a larger
            audience by moving it online." However, Yvette Nicole Brown dropped out to care for her ailing father, although she made guest appearances in "Ladders"
            and "Emotional Consequences of Broadcast Television". Paget Brewster was cast as consultant Francesca "Frankie" Dart and Keith David was cast as inventor
            Elroy Patashnik. Filming began for season six on November 17, 2014, and on December 8, 2014, the series celebrated the milestone of 100 episodes.
            Filming ended on March 27, 2015.
          </p>
          <p>
            In a June 3, 2015 interview with TV Insider, Dan Harmon explained why season six would likely be the last of the series:
            <blockquote>
              We've exploded into these successful shrapnel. Dr. Ken is now Dr. Ken. Alison has probably got her eye on movies. Gillian is working on a Netflix show.
              If there was some magical way of guaranteeing that everyone could come back all at once, let's fo it. But it would be a lot easier to put together a
              movie project and get them all on board than to say, "Let's give it one more season!"
            </blockquote>
          </p>
          <p>
            Despite the show's "six seasons and a movie" mantra, Yahoo never formally marketed season six as its final season. On July 30, 2015, Joel McHale stated
            that Yahoo! "wanted to [make more seasons of Community], but all of [the actors'] contracts were up after six years." McHale later clarified his statement
            via Twitter, saying "Community is not canceled." Yahoo released a statement: "We've seen tremendous value in our partnership with Sony and are continuing
            to discuss future opportunities for Community." Harmon said he "could have said yes immediately" to season seven, but "given the actors' velocity and
            trajectory" decided in favor of "getting [the cast] back together for an awesome movie." On January 4, 2016, Yahoo announced it had shut down its Yahoo
            Screen service, after a $42 million write-down, with its original prorgramming being moved to Yahoo TV for continoued public viewing.
          </p>
          <p>
            The sixth season was released on DVD in region 1 on March 8, 2016. Special features include deleted scenes, a behind-the-scenes featurette on the making of
            the finale, trivia with the cast and crew, and a gag reel.
          </p>
          <h3 className="pt-2" id="4.7">Webisodes</h3>
          <p>
            In addition to the regular episodes, NBC produced a series of webisodes. Some focus on the daily life of Dean Pelton and others include a Spanish project,
            study breaks, and Abed copying his friends' lives and turning them into student films. These webisodes were featured on the front page of the Greendale
            Community College website on the AV Department page.
          </p>
          <p>
            On March 2, 2012, it was announced that three animated webisodes would air exclusively on Hulu in lead up to the return of the series on March 15, 2012.
            Titled Abed's Master Key, the shorts were written by Dave Seger and Tom Kauffman of Channel 101 and animated by Animax Entertainment. In the webisodes,
            Abed becomes Dean Pelton's assistant and is given a master key to Greendale.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Film</h2>
          <p>
            Soon after Community was picked up for a sixth season in 2014, Zack Van Amburg of Sony Pictures Television confirmed that a Community film was in the early
            stages of development. After the series wrapped, Harmon revealed that Yahoo! had initially wanted to make a movie immediately after the end of the sixth
            season, but at the time was not ready to produce it.
          </p>
          <p>
            For the next several years, Harmon continued to express interest in creating a Community film and stated his efforts in making it happen. During this period,
            cast members Danny Pudi, Joel McHale, Alison Brie, Gillian Jacobs and Donald Glover would wach express their own interest in the film as well. Joe Russon was
            asked if he and his brother Anthony would come back to do the movie. He stated, "We'd certainly be willing to do it. We love our Community family. That cast,
            we're all still very close to all of them. It'd be schedule-depending for us. But I believe there will be a Community movie, especially now that it's doing well
            on streaming. Someone like Netflix could step up and make the movie."
          </p>
          <p>
            Harmon confirmed in 2021 that he had begun work on the script, and that any logistical issues with creating a Community movie were mostly solved. He described
            the challenging part of the movie was more "philosophical", namely whether the movie would be approachable to a viewer unfamiliar with the television show. Harmon
            said in August 2022 that a moview was "definitely going to happen" and could be expected in "between one and eight years". He said that the movie had an outline
            and that: "There's a product put together and pitched out in the world".
          </p>
          <p>
            The Peacock streaming service announced that it had ordered the film in September 2022, after a bidding war among distributors for the rights. Harmon and Andrew
            Guest were announced as writers, with McHale, Pudi, Brie, Jacobs, Jim Rash, and Ken Jeong set to reprise their roles. Harmon later stated that Yvette
            Nicole Brown would also return. Glover confirmed his involvement in the film several months later. On April 2, 2024, McHale confirmed Chevy Chase would not
            participate.
          </p>
          <p>
            During an interview on Jimmy Kimmel! Live in January 2023, McHale revealed that filming would begin in June of that year. However, filming was delayed amid the
            2023 Hollywood labor disputes. In June 2023, McHale stated that filming would set to begin in summer 2024. In February 2024, Glover confirmed the script was
            complete. During a February 2024 interview with The Hollywood Reporter, Glover was asked about his role in the movie and said: "Yeah, [Harmon] told me what he
            wanted, and I was like. 'This sounds great' ... It's a college reunion, but Abed is like the big director now, and basically this is magnum opus. I'm like, 'This
            sounds fucking tight.'" In April 2024, Brie revealed that the script was completed, and that she had read it.
          </p>
          <p>
            In March 2024, McHale indicated that shooting was "basically working around Donald's schedule", would begin production "this year" and he would be shocked if it
            did not. However in May 2024, Glover noted to Deadline that he received backlash from fans over speculation regarding his schedule preventing the production,
            clarifying that "maybe [it] was last year -- maybe -- but not this time". McHale would later clarify in an interview in July 2024 with GQ that it was not in fact
            Glover's schedule that was delaying production, but his own, stating: "That was definitely not true. It was not Donald's schedule. We love Donald. You can fully
            blame my schedule." He also added a tentative shotting period for 2025.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Reception</h2>
          <h3 className="pt-2" id="6.1">Critical reception</h3>
          <p>
            Community has appeared on a number of lists determining the greatest television shows off all time. In TV (The Book): Two Experts Pick the Greatest American Shows
            of All Time, critics Alan Sepinwall and Matt Zoller Seltz ranked Community 54th in their combined top 100 list, placing them in the section titled "Groundbreaking
            and Workhorses". In 2012, Entertainment Weekly listed the show at #15 in the "25 Best Cult TV Shows from the Past 25 Years," with high praise; "The series' affinity
            for ambitious, high-concept story lines (e.g. few shows are willing to turn over and entire episode to stop-motion animation), meta humor, and constant pop culture
            allusions has helped it earn the kind of fervent fan following some of its highest-rated comedic competitors must envy." In 2017, IGN place it 51st in its top 100
            ranking of TV shows, with writer Jonathan Dombush describing it "as a meta love letter to the films and shows that inspired it and its creator, Dan Harmon." In 2021,
            the BBC placed Community at 44th of 100 in its ranking of the greatest TV series of the 21st century. In 2023, Variety ranked Community #100 on its list of the
            100 greatest TV shows of all time.
          </p>
          <p>
            The show has overall scores of 88% on Rotten Tomatoes, and 74 on Metacritic.
          </p>
          <p>
            The show's first season received mostly positive reviews, scoring 69 out of 100 based on 23 critics on Metacritic. Season 1 scored 90% on review aggregator website
            Rotten Tomatoes, with the site's critical consensus reading: "Snarky and fast-paced with a surprising tender undercurrent and an engaging cast, Comunity is one of the
            best new comedies of the season". David Bushman (Curator, Televison) of the Paley Center for Media called Community the best new show of the fall season. Jonah Krakow
            of IGN gave the first season an 8.5 saying that "Community eventually ramped up and delivered some amazing stories in the second half of the season."
          </p>
          <p>
            The second season received high critical acclaim, scoring 86 out of 199 based on 4 critics on Metacritic. Rotten Tomatoes gave the season a 100%, with a critical consensus
            that reads; "Community unfurls into a marvel of meta-madness in its sophomore season, artfully deconstructing sitcom tropes while repeatedly knocking its own emotional
            beats out of the park". Emily Nussbaum of New York Magazine and Heather Havrilesky of Salon.com rated Community as the best show of 2010. In The A.V. Club's list of the
            25 best television series of 2010, Community ranked second, stating that the best episodes were "Modern Warfare", "Cooperative Calligraphy", and "Abed's Uncontrollable
            Christmas". IGN named Community the best comedy series in both 2010 and 2011.
          </p>
          <p>
            Acclaim for the show continued in the third season, scoring 82 out of 100 based on 4 critics on Metacritic. It also topped the Metacritic User Poll in the category 'Best
            Television Show of 2011', receiving 3,478 points. Rotten Tomatoes gave season 3 a 91% with a critical consensus that reads: "The Greendale study group take some of their
            boldest swings--though not all connect--in this freewheeling third season that nevertheless continues Community's streak as the gold standard for fiendishly clever television".
            Community placed on several critics top television lists; including tanked second by Paste, fifth by both HitFix and The Huffington Post, first by Hulu, and third on TV.com's
            Top 100 Everything of 2011.
          </p>
          <p>
            Reviews for the fourth season were generally positive, but less enthusiastic than the reception of the first three seasons. It scored 69 out of 100 based on 18 critics on
            Metacritic. The season 4 rating on Rotten Tomatoes is 65%, and the critical consensus reads: "Despite some behind-the-scenes drama, the fourth season of Community manages to
            retain the playful energy, potent humor, and kooky stories the show is famous for". Verne Gay of Newsday stated the show was "still defiantly Community, still good and still
            uninterested in adding new viewers." On the other hand, Hitfix's Alan Sepinwall wrote, "It feels like [Moses] Port, [David] Guarascio and the other writers decided to
            reverse-engineer the [Dan] Harmon version of Community, but couldn't quite manage without the missing ingredient of Harmon himself." Mike Hale of The New York Times has
            stated that the series "has been dumbed down, its humor broadened past recognition, and the two episodes provided for review...have fewer laughs between them than a single
            good scene from the old Community."
          </p>
        </div>
        <div>
          <table className="table-center">
            <thead>
              <tr>
                <th colspan="2">Community</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Characters</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Jeff Winger</a></li>
                    <li><a href="#">Britta Perry</a></li>
                    <li><a href="#">Abed Nadir</a></li>
                    <li><a href="#">Troy Barnes</a></li>
                    <li><a href="#">Annie Edison</a></li>
                    <li><a href="#">Shirley Bennett</a></li>
                    <li><a href="#">Pierce Hawthorne</a></li>
                    <li><a href="#">Ben Chang</a></li>
                    <li><a href="#">Craig Pelton</a></li>
                    <li><a href="#">Ian Duncan</a></li>
                    <li><a href="#">Buzz Hickey</a></li>
                    <li><a href="#">Frankie Dart</a></li>
                    <li><a href="#">Elroy Patashnik</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 1</td>
                <td>
                  <ul className="table-list">
                    <Link to="/community/pilot">
                      <li>Pilot</li>
                    </Link>
                    <li><a href="#">Spanish 101</a></li>
                    <li><a href="#">Introduction to Film</a></li>
                    <li><a href="#">Social Psychology</a></li>
                    <li><a href="#">Advanced Criminal Law</a></li>
                    <li><a href="#">Football, Feminism, and You</a></li>
                    <li><a href="#">Introduction to Statistics</a></li>
                    <li><a href="#">Home Economics</a></li>
                    <li><a href="#">Debate 109</a></li>
                    <li><a href="#">Environmental Science</a></li>
                    <li><a href="#">The Politics of Human Sexuality</a></li>
                    <li><a href="#">Comparative Religion</a></li>
                    <li><a href="#">Investigative Journalism</a></li>
                    <li><a href="#">Interpretive Dance</a></li>
                    <li><a href="#">Romantic Expressionism</a></li>
                    <li><a href="#">Communication Studyies</a></li>
                    <li><a href="#">Physical Education</a></li>
                    <li><a href="#">Basic Genealogy</a></li>
                    <li><a href="#">Beginner Pottery</a></li>
                    <li><a href="#">The Science of Illusion</a></li>
                    <li><a href="#">Contemporary American Poultry</a></li>
                    <li><a href="#">The Art of Discourse</a></li>
                    <li><a href="#">Modern Warfare</a></li>
                    <li><a href="#">English as a Second Language</a></li>
                    <li><a href="#">Pascal's Triangle Revisited</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 2</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Anthropology 101</a></li>
                    <li><a href="#">Accounting for Lawyers</a></li>
                    <li><a href="#">The Psychology of Letting Go</a></li>
                    <li><a href="#">Basic Rocket Science</a></li>
                    <li><a href="#">Messiance Myths and Ancient People</a></li>
                    <li><a href="#">Epidemiology</a></li>
                    <li><a href="#">Aerodynamics of Gender</a></li>
                    <li><a href="#">Cooperative Calligraphy</a></li>
                    <li><a href="#">Conspiracy Theories and Interior Design</a></li>
                    <li><a href="#">Mixology Certification</a></li>
                    <li><a href="#">Abed's Uncontrollable Christmas</a></li>
                    <li><a href="#">Asian Population Studies</a></li>
                    <li><a href="#">Celebrity Pharmacology</a></li>
                    <li><a href="#">Advanced Dungeons & Dragons</a></li>
                    <li><a href="#">Early 21st Century Romanticism</a></li>
                    <li><a href="#">Intermediate Documentary Filmmaking</a></li>
                    <li><a href="#">Intro to Political Science</a></li>
                    <li><a href="#">Custody Law and Eastern European Diplomacy</a></li>
                    <li><a href="#">Critical Film Studies</a></li>
                    <li><a href="#">Comparative Wine Tasting</a></li>
                    <li><a href="#">Paradigms of Human Memory</a></li>
                    <li><a href="#">Applied Anthropology and Culinary Arts</a></li>
                    <li><a href="#">A Fistfull of Paintballs</a></li>
                    <li><a href="#">For a Few Paintballs More</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 3</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Biology 101</a></li>
                    <li><a href="#">Geography of Global Conflict</a></li>
                    <li><a href="#">Comparative Ecology</a></li>
                    <li><a href="#">Remedial Chaos Theory</a></li>
                    <li><a href="#">Horror Fiction in Seven Spooky Steps</a></li>
                    <li><a href="#">Advanced Gay</a></li>
                    <li><a href="#">Studies in Modern Movement</a></li>
                    <li><a href="#">Documentary Filmmaking: Redux</a></li>
                    <li><a href="#">Foosball and Nocturnal Vigilantism</a></li>
                    <li><a href="#">Regional Holiday Music</a></li>
                    <li><a href="#">Urban Matrimony and the Sandwich Arts</a></li>
                    <li><a href="#">Contemporary Impressionists</a></li>
                    <li><a href="#">Digital Exploration of Interior Design</a></li>
                    <li><a href="#">Pillows and Blankers</a></li>
                    <li><a href="#">Origins of Vampire Mythology</a></li>
                    <li><a href="#">Virtual System Analysis</a></li>
                    <li><a href="#">Basic Lupine Urology</a></li>
                    <li><a href="#">Course Listing Unavailable</a></li>
                    <li><a href="#">Curriculum Unavailable</a></li>
                    <li><a href="#">Digital Estate Planning</a></li>
                    <li><a href="#">The First Chang Dynasty</a></li>
                    <li><a href="#">Introduction to Finality</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 4</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">History 101</a></li>
                    <li><a href="#">Paranormal Parentage</a></li>
                    <li><a href="#">Conventions of Space and Time</a></li>
                    <li><a href="#">Alternative History of the German Invasion</a></li>
                    <li><a href="#">Cooperative Escapism in Familial Relations</a></li>
                    <li><a href="#">Advanced Documentary Filmmaking</a></li>
                    <li><a href="#">Economics of Marine Biology</a></li>
                    <li><a href="#">Herstory of Dance</a></li>
                    <li><a href="#">Intro to Felt Surrogacy</a></li>
                    <li><a href="#">Intro to Knots</a></li>
                    <li><a href="#">Basic Human Anatomy</a></li>
                    <li><a href="#">Heroic Origins</a></li>
                    <li><a href="#">Advanced Introduction to Finality</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 5</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Repilot</a></li>
                    <li><a href="#">Introduction to Teaching</a></li>
                    <li><a href="#">Basic Intergluteal Numismatics</a></li>
                    <li><a href="#">Cooperative Polygraphy</a></li>
                    <li><a href="#">Geothermal Escapism</a></li>
                    <li><a href="#">Analysis of Cork-Based Networking</a></li>
                    <li><a href="#">Bondage and Beta Male Sexuality</a></li>
                    <li><a href="#">App Development and Condiments</a></li>
                    <li><a href="#">VCR Maintenance and Educational Publishing</a></li>
                    <li><a href="#">Advanced Advanced Dungeons & Dragons</a></li>
                    <li><a href="#">G.I. Jeff</a></li>
                    <li><a href="#">Basic Story</a></li>
                    <li><a href="#">Basic Sandwich</a></li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Season 6</td>
                <td>
                  <ul className="table-list">
                    <li><a href="#">Ladders</a></li>
                    <li><a href="#">Lawnmower Maintenance and Postnatal Care</a></li>
                    <li><a href="#">Basic Crisis Room Decorum</a></li>
                    <li><a href="#">Queer Studies and Advanced Waxing</a></li>
                    <li><a href="#">Laws of Robotics and Party Rights</a></li>
                    <li><a href="#">Basic Email Security</a></li>
                    <li><a href="#">Advanced Safety Features</a></li>
                    <li><a href="#">Intro to Recycled Cinema</a></li>
                    <li><a href="#">Grifting 101</a></li>
                    <li><a href="#">Basic RV Repair and Palmistry</a></li>
                    <li><a href="#">Modern Espionage</a></li>
                    <li><a href="#">Wedding Videography</a></li>
                    <li><a href="#">Emotional Consequences of Broadcast Television</a></li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}


export default Community

















