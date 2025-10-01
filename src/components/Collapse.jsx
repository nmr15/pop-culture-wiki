import { useState } from "react";

const Collapse = () =>
{
  return(
    <>
      <div>
        <span>▼</span>
        <li className="sidebar-list-item">
          <a href="#">List Item</a>
          <ul>
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