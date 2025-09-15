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
                        <a href="#">Jeff</a> is lare to the group's study session. <a href="#">Britta</a> is upset by his lacking punctuality and gets the
                        group to agree to question him about it. When Jeff arrives, everyone except Britta is charmed by him as he greets each of them in
                        turn. She fails to get the group to confront Jeff regarding his lack of punctuality, and ends up questioning him herself. Later,
                        Jeff gives Britta a card to apologize for his poor first impression two weeks prior, but Britta remains wary of him, believing him to
                        be exploiting other members of the group. Meanwhile, <a href="#">Shirley</a> and <a href="#">Annie</a> are interested in learning
                        about a social justice cause Britta mentioned prior, the killing of journalists in Guatemala such as Chacata Panecos. Shirley and
                        Annie plan a protest, but Britta is annoyed at the pair, believing them to be going about the matter in poor taste in part due to
                        plans to have a Chacata Panecos pinata after the journalist was beaten to death.
                    </p>
                </div>
                <TableCommunity />
            </main>
        </>
    )
}

export default CommunityS1E2;