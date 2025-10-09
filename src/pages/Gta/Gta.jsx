import { Link } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import TableGta from '../../components/TableGta'

const Gta = () => 
{
  return (
    <>
      <aside className="sidebar">
        <ul className="sidebar-list">
          <li className="sidebar-list-item"><a href="#top">Top</a></li>
          <Collapse 
            id="1"
            item="Series history"
            sub={[
              {id: "1.1", title: "Main series"},
              {id: "1.2", title: "Other games"},
              {id: "1.3", title: "Compilations"},
              {id: "1.4", title: "Titles"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#2">Related media</a></li>
          <Collapse 
            id="3"
            item="Common elements"
            sub={[
              {id: "3.1", title: "Gameplay"},
              {id: "3.2", title: "Settings", sub2: [
                {id: "3.2.1", title: "Liberty City"},
                {id: "3.2.2", title: "San Andreas"},
                {id: "3.2.3", title: "Vice City"},
                {id: "3.2.4", title: "Other settings"}
              ]},
              {id: "3.3", title: "Voice acting"}
            ]}
          />
          <Collapse 
            id="4"
            item="Controversies"
            sub={[
              {id: "4.1", title: "Grand Theft Auto"},
              {id: "4.2", title: "Grand Theft Auto III"},
              {id: "4.3", title: "Vice City"},
              {id: "4.4", title: "San Andreas"},
              {id: "4.5", title: "Grand Theft Auto IV"},
              {id: "4.6", title: "The Lost and Damned"},
              {id: "4.7", title: "Chinatown Wars"},
              {id: "4.8", title: "Grand Theft Auto V"},
              {id: "4.9", title: "Lawsuits", sub2: [
                {id: "4.9.1", title: "Lawsuits invloving Jack Thompson"}
              ]},
              {id: "4.10", title: "Modding and fan recreation"},
            ]}
          />
          <Collapse 
            id="5"
            item="Reception"
            sub={[
              {id: "5.1", title: "Sales"}
            ]}
          />
          <li className="sidebar-list-item"><a href="#6">Similar games</a></li>
        </ul>
      </aside>
      <main className="main" id="top">
        <div>
          <h1 className="article-heading">Grand Theft Auto</h1>
        </div>
        <div className="img-right img-top">
          <img 
            src="https://1000logos.net/wp-content/uploads/2018/03/GTA-Logo.png" 
            alt="Grand Theft Auto" 
            className="article-heading-img"
          />
        </div>
        <div className="div-top">
          <p>
            <b>Grand Theft Auto</b> is an action-adventure video game series created by David Jones and Mike Dailly. Later titles were developed under the oversight
            of brothers Dan and Sam Houser, Leslie Benzies, and Aaron Garbut. It is primarily developed by British development house <a href="#">Rockstar North</a>
            (formerly DMA Design), and published by its American parent company, <a href="#">Rockstar Games</a>. The name of the series is a term for motor vehicle
            theft in the United States.
          </p>
        </div>
        <div>
          <h2 className="article-heading-2" id="1">Series history</h2>
          <div>
            <h3 className="article-heading-3" id="1.1">Main series</h3>
            <h3 className="article-heading-3" id="1.2">Other games</h3>
            <h3 className="article-heading-3" id="1.3">Compilations</h3>
            <h3 className="article-heading-3" id="1.4">Titles</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="2">Related media</h2>
          <div></div>
        </div>
        <div>
          <h2 className="article-heading-2" id="3">Common elements</h2>
          <div>
            <h3 className="article-heading-3" id="3.1">Gameplay</h3>
            <h3 className="article-heading-3" id="3.2">Settings</h3>
            <h4 className="article-heading-4" id="3.2.1">Liberty City</h4>
            <h4 className="article-heading-4" id="3.2.2">San Andreas</h4>
            <h4 className="article-heading-4" id="3.2.3">Vice City</h4>
            <h4 className="article-heading-4" id="3.2.4">Other settings</h4>
            <h3 className="article-heading-3" id="3.3">Voice acting</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="4">Controversies</h2>
          <div>
            <h3 className="article-heading-3" id="4.1">Grand Theft Auto</h3>
            <h3 className="article-heading-3" id="4.2">Grand Theft Auto III</h3>
            <h3 className="article-heading-3" id="4.3">Vice City</h3>
            <h3 className="article-heading-3" id="4.4">San Andreas</h3>
            <h3 className="article-heading-3" id="4.5">Grand Theft Auto IV</h3>
            <h3 className="article-heading-3" id="4.6">The Lost and Damned</h3>
            <h3 className="article-heading-3" id="4.7">Chinatown Wars</h3>
            <h3 className="article-heading-3" id="4.8">Grand Theft Auto V</h3>
            <h3 className="article-heading-3" id="4.9">Lawsuits</h3>
            <h4 className="article-heading-4" id="4.9.1">Lawsuits invloving Jack Thompson</h4>
            <h3 className="article-heading-3" id="4.10">Modding and fan recreation</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="5">Reception</h2>
          <div>
            <h3 className="article-heading-3" id="5.1">Sales</h3>
          </div>
        </div>
        <div>
          <h2 className="article-heading-2" id="6">Similar games</h2>
          <div></div>
        </div>
        <div>
          <TableGta />
        </div>
      </main>
    </>
  )
}

export default Gta
