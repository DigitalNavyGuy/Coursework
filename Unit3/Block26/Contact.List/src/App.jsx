import { useState } from 'react';
import ContactList from './components/ContactList';
import selectedContact from './components/SelectedContact';
import './App.css'

function App() {
  const [selectedContactID, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactID ? (<div>Selected Contact View</div>) : (<ContactList />)}
    </>
  );
}

export default App
