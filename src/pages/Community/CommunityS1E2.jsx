import { Link } from "react-router-dom";
import TableCommunity from '../../components/TableCommunity'

const CommunityS1E2 = () =>
{
    return(
        <>
            <nav className="sidebar bg-dark">

            </nav>
            <main className="main px-5 py-4">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to="/"><li className="breadcrumb-item">Home</li></Link>
                        <Link to="/community"><li className="breadcrumb-item">Community</li></Link>
                        <li className="breadcrumb-item active">Spanish 101</li>
                    </ol>
                </nav>
                <div id="top">
                    <h1 className="article-heading">Spanish 101</h1>
                </div>
                <div className="pt-2">
                    <p>
                        Spanish 101 is the second episode of the first season of the American comedy television series <Link to="/community">Community</Link>.
                        It aired in the United States on NBC on September 24, 2009. The episode features Jeff and Pierce working on a Spanish project as Annie
                        and Shirley organize a protest. Receiving 5.39 million viewers upon its premier, the episode was met with mostly positive critical
                        reception. The end tag, the first of the series, shows Troy and Abed performing a nonsense rap in Spanish, an early interaction between
                        the pair which was praised by reviewers.
                    </p>
                </div>
                <div>
                    <h2 className="article-heading" id="1">Plot</h2>
                    <p>
                        At Greendale, <a href="#">the Dean</a> is making the morning announcements as <a href="#">Jeff</a> arrives late for school in his Lexus.
                        In <a href="#">the study room</a>, the <a href="#">group</a> awaits his arrival. <a href="#">Britta</a> is annoyed everyone is concerned
                        about Jeff instead of social injustice like journalists in Guatemala killed by their government. Jeff finally shows up for the meeting
                        and charms everyone except Britta. Jeff tries to smooth things over afterwards but is rebuffed. Britta criticizes him for exploiting the
                        group and <a href="#">Pierce</a> advises him not to pursue her so desperately. He then makes a failed attempt himself to spend time with
                        Jeff.
                    </p>
                    <p>
                        Outside the <a href="#">library</a>, <a href="#">Shirley</a> and <a href="#">Annie</a> want to protest something and are told by Britta
                        to research Guatemalan journalist Chacata Panecos. In the Spanish classroom, the instructor Señor <a href="#">Ben Chang</a> gibes a
                        lengthy tirade about being an Asian Spanish teacher. He then explains the latest class assignment where the students pair up, practice
                        Spanish phrases and give a presentation. He divides the class up by giving them each corresponding cards. Upon learning <a href="#">
                        Abed</a> is paired with Britta, Jeff makes a deal to exchange cards. Jeff approaches Britta at the end of class suggesting they have
                        dinner. He discovers that she switched her card too, and his partner is Pierce.
                    </p>
                    <p>
                        Later in the study room, Jeff and Pierce are supposed to be working on their assignment, but Pierce insists on trying to bond with him.
                        Meanwhile, Britta is displeased when she sees the overly flashy protest Shirley and Annie have organized. She calls their efforts "tacky
                        and lame", but gets criticized by Shirley for preaching about injustice but not actually doing anything about them. Britta then apologizes
                        and asks how she can help. Back in the study room, Jeff is becoming frustrated at the lack of progress he and Pierce are making on the
                        project. <a href="#">Troy</a> and Abed show up and inform them of the protest Britta is now involved in.
                    </p>
                    <p>
                        Jeff gets angry at Pierce for having wasted his time and leaves. Once outside, Jeff joins the protest which has become a candle light vigil.
                        He quickly finds Britta and she apologizes to him for how judgemental she was of him earlier. A drunk Pierce stumbles out of the library
                        and calls out Jeff for how dismissively he treated him. He tries to punch Jeff, but ends up igniting the sleeve of his coat when it touches
                        a protestor's candle. He manages to extinguish himself by jumping into a fountain. The next day in the Spanish classrrom, Shirley and Annie
                        excitedly tell Britta about how the protest got briefly mentioned in a local newspaper.
                    </p>
                    <p>
                        Jeff arrives and apologizes to Britta for Pierce ruining her protest. She explains that Pierce was only looking to get close to Jeff because
                        he's lonely and sees the study group as an opportunity to be with a family he never had. Pierce then arrives with Chang animatedly discussing
                        something him. Chang then approaches Jeff to let him know that he will automatically get a passing grade since Pierce and him had a falling
                        out. Jeff declines the offer and convinces Pierce to let him help with the presentation they both created. They deliver a very long and
                        elaborate performance that has very little to do with Spanish.
                    </p>
                    <p>
                        
                    </p>
                </div>
                <TableCommunity />
            </main>
        </>
    )
}

export default CommunityS1E2;