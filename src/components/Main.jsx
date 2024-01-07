import React from 'react';
import "../styles/main.css"

export default function Main() {
  return (
    <div className='container'>
       <h1 className='container-heading'>Fun facts about React</h1>
       <ul className='list-items'>
        <li>Was first released in 2003</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100k stars on Github</li>
        <li>Is maintained by Facebook, but is not a part of the official Facebook product line</li>
        <li>The word "React" comes from an idea by Brent Vatne</li>
       </ul>
    </div>
     
  );
}


