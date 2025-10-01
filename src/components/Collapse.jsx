import { useState } from "react";

const Collapse = ({ id, item, sub, sub2}) =>
{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () =>
  {
    setIsOpen(!isOpen);
  }

  return(
    <>
      <div>
        <span class="sidebar-toggle" onClick={toggle}>▼</span>
        <li class="sidebar-list-item sidebar-collapse">
          <a href={id}>{item}</a>
          {isOpen && (
          <ul class="sidebar-collapse-sub">
            {sub.map((sub) => (
              <li class="sidebar-list-item" key={sub.id}>
              <a href={"#" + sub.id}>{sub.title}</a>
              {sub.sub2 && (
                <ul>
                  
                  <li class="sidebar-list-item sidebar-collapse-sub2" >
                    <a href="#">{sub.sub2.title}</a>
                  </li>
                  
                </ul>
              )}
            </li>
            ))}
          </ul>
          )}
        </li>
      </div>
    </>
  )
}

export default Collapse;