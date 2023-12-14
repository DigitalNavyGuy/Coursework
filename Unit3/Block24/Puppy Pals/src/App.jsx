import { puppyList }  from './data.js'
import { useState } from 'react'
import './App.css'


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log("puppyList: ", puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  
  function handleClick(puppyId){
    setFeatPupId(puppyId);

  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featuredPup: ", featuredPup);
  return (
    <div className='App'>
      {puppies.map((puppy) => {
        return (
          <div onClick={() => handleClick(puppy.id)} key={puppy.id}>
            {puppy.name}
            
          </div>
        )
      })}
      {featPupId && (
              <div>
                <h2>{ featuredPup.name }</h2>
                <ul>
                  <li>Age: { featuredPup.age }</li>
                  <li>Email: { featuredPup.email }</li>
                </ul>
              </div>
            )}
    </div>
  );
}

export default App
