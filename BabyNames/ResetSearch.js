import React from 'react';

function ResetSearch({ searchValue , setSearchValue}) {
    if(!searchValue){
        return null;
    }
    return (
       <button onClick={() => setSearchValue("")} className="reset-search">
            reset search
       </button>
    );
}

export default ResetSearch;