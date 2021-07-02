import React, { useContext } from 'react';
import NamesList from './NamesList';
import { NamesContext } from './Context';

function NamePicker({searchValue ,shortList, setShortList}) {

    const names = useContext(NamesContext);

    const filteredNames = names
    .filter(entry => entry.name.toLowerCase().includes(searchValue.toLowerCase()))
    .filter(entry => !shortList.includes(entry.id));

    function addToShortList(id) {
        setShortList([...shortList,id]);
        // console.log({ id });
    }
    return (
       <NamesList namesList={filteredNames} onItemClick={addToShortList} />
    );
}

export default NamePicker;