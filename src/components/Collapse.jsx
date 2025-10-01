import { useState } from "react";

const Collapse = () =>
{
  return(
    <>
      <div>
        <span style={{fontSize: "14px"}}>▼</span>
        <li className="sidebar-list-item" style={{display: "inline"}}>
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