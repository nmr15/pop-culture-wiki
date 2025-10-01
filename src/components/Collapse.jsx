import { useState } from "react";

const Collapse = () =>
{
  return(
    <>
      <div>
        <span class="sidebar-toggle">▼</span>
        <li class="sidebar-list-item sidebar-collapse">
          <a href="#">List Item</a>
          <ul class="sidebar-collapse-sub">
            <li class="sidebar-list-item">
              <a href="#">Sub List Item</a>
              <ul>
                <li class="sidebar-list-item sidebar-collapse-sub2">
                  <a href="#">Sub 2 List Item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </div>
    </>
  )
}

export default Collapse;