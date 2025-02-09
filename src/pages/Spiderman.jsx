import React from 'react'

const Spiderman = () => 
{
  return (
    <>
      <nav className="sidebar bg-dark">
        <ul>
          <li><a href="#top">Top</a></li>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded="true" aria-controls="collapseOne">
            </span>
            <li class="d-inline"><a href="#1">Publication History</a>
              <ul id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="#1.1">Creation and development</a></li>
                <li><a href="#1.2">Commercial success</a></li>
              </ul>
            </li>
          </div>

          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true"
              aria-controls="collapseTwo">
            </span>
            <li class="d-inline"><a href="#2">Fictional character biography</a>
              <ul id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="#2.1">Early years</a></li>
                <li><a href="#2.2">1970s</a></li>
                <li><a href="#2.3">1980s</a></li>
                <li><a href="#2.4">1990s</a></li>
                <li><a href="#2.5">2000s</a></li>
                <li><a href="#2.6">2010s</a></li>
                <li><a href="#2.7">2020s</a></li>
              </ul>
            </li>
          </div>
          <li><a href="#3">Personality and themes</a></li>
          <li><a href="#4">Powers, skills, and abilities</a></li>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseThree"
              aria-expanded="true" aria-controls="collapseThree">
            </span>
            <li class="d-inline"><a href="#5">Other versions</a>
              <ul id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <li><a href="5.1">Sky-Spider</a></li>
                <li><a href="#5.2">Spider-Man from Earth-93165</a></li>
              </ul>
            </li>
          </div>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseFour"
              aria-expanded="true" aria-controls="collapseFour">
            </span>
            <li class="d-inline"><a href="#6">Supporting cast</a></li>
            <ul id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li><a href="#6.1">Enemies</a></li>
              <li><a href="#6.2">Romantic interests</a></li>
              <li><a href="#6.3">Children</a></li>
              <li><a href="#6.4">Alternate versions of Spider-Man</a></li>
            </ul>
          </div>
          <div class="accordion">
            <span class="accordion-toggle dropdown-toggle d-inline" data-bs-toggle="collapse" data-bs-target="#collapseFive"
              aria-expanded="true" aria-controls="collapseFive">
            </span>
            <li class="d-inline"><a href="#7">Legacy</a></li>
            <ul id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <li><a href="#7.1">Reception</a></li>
              <li><a href="#7.2">Real-life comparisons</a></li>
            </ul>
          </div>
          <li><a href="#8">In other media</a></li>
        </ul>
      </nav>
      <main className="main px-5 py-4">
        <div id="top">
          <h1 className="article-heading">Spider-Man (Earth-616)</h1>
        </div>
        <div className="img-right ms-3 pt-2">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png" 
            alt="Spider-Man" />
        </div>
        <div class="pt-2">
          <p><b>Spider-Man</b> is a superhero in American comic books published by <a href="#">Marvel Comics</a>.
            Created by writer-editor <a href="#">Stan Lee</a> and artist <a href="#">Steve Ditko</a>, he first appeared in the anthology comic book Amazing Fantasy #15 (August 1962) in the <a href="#">Silver Age of Comic Books</a>. He has been featured in <a href="#">comic books</a>, <a href="#">television shows</a>, <a href="#">films</a>, <a href="#">video games</a>, <a href="#">novels, and plays</a>.
          </p>
          <p>
            Spider-Man's secret identity is <b>Peter Benjamin Parker</b>. Initially, Peter was depicted as a teenage high-school student and
            an orphan raised by his <a href="#">Aunt May</a> and <a href="#">Uncle Ben</a> in <a href="#">New York City</a> after his parents,
            <a href="#">Richard and Mary Parker</a>, died in a plane crash. Lee, Ditko, and later creators had the character deal with the
            struggles of adolescence and young adulthood and gave him many <a href="#">supporting characters</a>, such as
            <a href="#">Flash Thompson</a>, <a href="#">J. Jonah Jameson</a>, and <a href="#">Harry Osborn</a>;
            romantic interests <a href="#">Gwen Stacy</a>, <a href="#">Mary Jane Watson</a>, and the <a href="#">Black Cat</a>;
            and <a href="#">enemies</a> such as <a href="#">Doctor Octopus</a>, the <a href="#">Green Goblin</a>, and <a href="#">Venom</a>.
            In his origin story, Spider-Man gets his superhuman spider powers and abilities after being bitten by a radioactive spider. These
            powers include superhuman strength, agility, reflexes, stamina, durability, coordination, and balance; clinging to surfaces and ceilings
            like a spider; and detecting danger with his precognition ability called "spider-sense". He builds wrist-mounted "<a href="#">web-shooter</a>"
            devices that shoot articial spider-webs of his own design, which he uses both for fighting and web-swinging across the city. Peter Parker
            initially used his powers for his personal gain, but after his Uncle Ben was killed by a thief that Peter could not stop, he began to use his
            powers to fight crime by becoming Spider-Man.
          </p>
          <p>
            When Spider-Man first appeared in the early 1960s, teenagers in superhero comic books were usually relegated to the portagonist's sidekick role.
            The Spider-Man comic series broke ground by featuring Peter Parker, a high school student from the Queens borough of New York City, as Spider-Man's
            secret identity, whose "self-obsessions with rejection, inadequacy, and loneliness" were issues to which young readers could relate. While Spider-Man
            was a quintessential sidekick, unlike previous teen heroes <a href="#">Bucky Barnes</a> and <a href="#">Robin</a>, Spider-Man had no superhero
            mentor like <a href="#">Captain America</a> and <a href="#">Batman</a>; he had learned the lesson for himself that "with great poewr comes great
            responsibility" --a line included in a text box in the final panel of the first Spider-Man's origin story, but later retroactively attributed to the
            late Uncle Ben.
          </p>
          <p>
            Marvel has featured Spider-Man in several <a href="#">comic book series</a>, the first and longest-lasting of which is <a href="#">The Amazing Spider-Man</a>.
            Since his introducion, the main-continuity version of Peter has gone from a high school student to attending college to currently being somewhere in
            his late 20s. Peter has been a member of numerous superhero teams, most notably the <a href="#">Avengers</a> and <a href="#">Fantastic Four</a>. Doctor Octopus
            also took on the identity for a story arc spanning 2012-2014, following a body swap plot in which Peter appears to die. Marvel has also published comic books
            featuring the adventres of <a href="#">Miguel O'Hara</a>, the Spider-Man of the future; <a href="#">Ultimate Spider-Man</a>, which features the adventures of
            a teenage <a href="#">Peter Parker</a> in <a href="#">an alternate universe</a>; and <a href="#">Ultimate Comics: Spider-Man</a>, which depicts a teenager named
            <a href="#">Miles Morales</a> who takes up the mantle of Spider-Man after Ultimate Peter Parker's apparent death. Miles later became a superhero in his own
            right and was brought into mainstream continuity during the Secret Wars event, where he sometimes works alongside the mainline version of Peter.
          </p>
          <p>
            Spider-Man is one of the most popular and commercially successful superheroes. He has appeared in countless <a href="#">forms of media</a>, including
            <a href="#">several animated TV series</a>; the first original animated series <a href="#">Spider-Man</a>, with Paul Soles voicing the titular character, a
            <a href="#">live-action television series</a>, syndicated newspaper <a href="#">comic strips</a>, and multiple <a href="#">series of films</a>. Spider-Man was
            first portrayed in live-action by Danny Seagren in Spidey Super Stories, a recurring skit on The Electric Company from 1974 to 1977. In live-action films, Spider-Man
            has been portrayed actors <a href="">Tobey Maguire</a> in <a href="#">Sam Raimi's</a> <a href="#">Spider-Man trilogy</a>, by <a href="#">Andrew Garfield</a>
            in <a href="#">two films</a> by <a href="#">Marc Webb</a>, and in the <a href="#">Marvel Cinematic Universe</a> by <a href="#">Tom Holland</a>. Reeve Carney originally
            starred as Spider-Man in the 2010 Broadway musical Spider-Man: Turn Off the Dark. Spider-Man was also voiced by <a href="#">Jake Johnson</a> and
            <a href="#">Chris Pines</a> in the animated film <a href="#">Spider-Man Into the Spider-Verse</a>, with the former reprising his role in the sequel
            <a href="#">Spider-Man: Across the Spider-Verse</a>.
          </p>
        </div>
      </main>
    </>
  )
}

export default Spiderman