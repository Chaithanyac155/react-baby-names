import React, { useContext } from 'react';
import NamesList from './NamesList';
import { NamesContext } from './Context';

function ShortList({shortList , setShortList}) {
    const names = useContext(NamesContext);

     const shortListedNames = names.filter((entry) =>
     shortList.includes(entry.id)
     );
     
     const removeFromShortList = id => {
         setShortList(shortList.filter(i => i !== id));
     }
     const hasNames = shortListedNames.length > 0;
    return (
        <div className="short-list">
        <h2>
            {hasNames ? "Your ShortList" : "Click on a name to shortlist it."}
        </h2>
        {hasNames && (
            <div>
      <NamesList 
        namesList = {shortListedNames}
        onItemClick = {removeFromShortList} />
        <hr />
        </div>
        )}
</div>
       
      
    );
}

export default ShortList;