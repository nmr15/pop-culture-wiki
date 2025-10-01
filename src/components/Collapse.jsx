import { useState } from "react";

const Collapse = ({ id, item, sub, sub2}) =>
{
  return(
    <>
      <div>
        <span class="sidebar-toggle">▼</span>
        <li class="sidebar-list-item sidebar-collapse">
          <a href={id}>{item}</a>
          <ul class="sidebar-collapse-sub">
            <li class="sidebar-list-item">
              <a href="#">{sub}</a>
              { sub2 && (
                <ul>
                  {sub2.map((sub2) => (
                  <li class="sidebar-list-item sidebar-collapse-sub2" key={sub2.id}>
                    <a href={sub2.id}>{sub2.title}</a>
                  </li>
                  ))} 
                </ul>
              )}
            </li>
          </ul>
        </li>
      </div>
    </>
  )
}

export default Collapse;