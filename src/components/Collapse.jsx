import { useState } from "react";

const Collapse = () =>
{
  return(
    <>
      <div>
        <span className="sidebar-toggle">▼</span>
        <li className="sidebar-list-item sidebar-collapse">
          <a href="#">List Item</a>
          <ul className="sidebar-collapse-sub">
            <li className="sidebar-list-item">
              <a href="#">Sub List Item</a>
            </li>
          </ul>
        </li>
      </div>
    </>
  )
}

export default Collapse;