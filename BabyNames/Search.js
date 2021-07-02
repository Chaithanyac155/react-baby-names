import React , {useEffect, useRef} from 'react';

function Search({searchValue,setSearchValue}) {
     const inputRef = useRef();

    useEffect(()=>{
        inputRef.current.focus();
    },[])

     const handleChange = event => {
         setSearchValue(event.target.value);
     }
    return (
       <header>
           <input
               type="text"
               placeholder="Type to filter..."
               value={searchValue}
               onChange={handleChange}
               ref={inputRef}
            />
       </header>
    );
}

export default Search;