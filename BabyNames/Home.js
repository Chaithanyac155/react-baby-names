import React ,{useState} from 'react';
import './Style.css';

import NamePicker from './NamePicker';
import Search from './Search';
import ShortList from './ShortList';
import ResetSearch from './ResetSearch';
import Footer from './Footer';

function Home() {
    const [searchValue ,setSearchValue] = useState("");
    const [shortList , setShortList] = useState([]);
   return (
      <div>
          <Search 
           searchValue={searchValue} 
           setSearchValue={setSearchValue} 
           />
           <main>
          <ShortList  
             shortList={shortList} 
             setShortList={setShortList} />
          <NamePicker 
             searchValue={searchValue} 
             shortList={shortList} 
             setShortList={setShortList} 
          />
          <ResetSearch 
              searchValue={searchValue} 
              setSearchValue={setSearchValue} />
          </main>
          <Footer />
      </div>
    );
  }

  
  
  export default Home;