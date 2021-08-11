import React, {useEffect, useState} from 'react'
import axios from 'axios';
import _ from 'lodash';

import Character from './Character';
import SearchBar from './SearchBar';
import Pagination from './Pagination';


const Home = () => {
 

  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
      const fetchItems = async () => {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
          )

        console.log(result.data)
        
        setItems(result.data)
      }

      fetchItems();

  }, [query])

  //Get Current Post
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = items.slice(indexOfFirstPost, indexOfLastPost);


  //Change Page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <main>
      <div className="explore-content">
        <div className="box-1">
          <h1>Explore the</h1>
          <h1>character's of</h1>
          <h1 id="blue-head">breaking bad</h1>
          <h1>series.</h1>
          <button className="btn-explore"><a className="a-link"href="#explore-btn-view">Explore</a></button> 
        </div>

        <div className="box-2">
           <img id="walter-img" src="/images/walter.jpg" alt="walter-image"/>
        </div>
       </div>

      <div className="description-box">
         <p>Breaking Bad is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.</p>
      </div>
    
        <div className="main-content">
          <SearchBar getQuery={(q) => setQuery(q)}/>
        
        <div id="explore-btn-view">
          <Character items={currentPost}/>
        </div>
        </div>
  


      <footer> 
         <Pagination 
             postsPerPage={postsPerPage} 
             totalPosts={items.length} 
             paginate={paginate} 
         /> 

         <div className="about">
            <div className="about-one">
              <h2>This Project is made for </h2>
              <div className="logo-head">
                  <img className="logo-ms" src="/images/hundredms.png" alt="logo"/>
                  <h1>100ms</h1>
              </div>
      
              <p>Video conferencing infrastructure for a video-first world. Quick to integrate native iOS, Android & Web SDKs to add live video & audio conferencing to your applications.</p>
              <h1>© 100ms, Inc. All rights reserved.</h1>
              <h3>Contact me: aniketashok1999@gmail.com</h3>
            </div>
         </div>

      </footer>

    </main>
  )
}

export default Home
