import React from 'react';

function NamesList({ namesList,onItemClick}) {
    return (
         <ul>
              {namesList.map(entry =>
              (
                  <li className={entry.gender} key={entry.id}>
                      <button onClick={() => onItemClick(entry.id)}>{entry.name}</button>
                  </li>
              )
              )}
      </ul>
    );
}

export default NamesList;