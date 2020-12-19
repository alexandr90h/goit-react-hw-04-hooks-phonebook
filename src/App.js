import styles from './app.module.scss';
import InputMainForm from './InputMainForm/InputMainForm.jsx';
import ContactsList from './ContactsList/ConractsList';
import InputFind from './InputFind/InputFind';
import FilterContactsList from './InputFind/FilterContactsList.jsx';
import { useEffect, useState } from 'react';

export default function App() {
    const [contacts, setContacts] = useState([]);
    const [filterName, setFilterName] = useState('');

  const formSubmitHandler = data => {
    if (contacts.find(obj => obj.name.toLowerCase() === data.name.toLowerCase())===undefined) {
      setContacts(prev => prev.concat(data))
    }
    else alert(`${data.name} is alreadyin contacts.`);
  }
  const inpChangHandler = data => {
    setFilterName(prev=>prev=data)
  }
  const btnDelId = data => {
    setContacts(prev => {
      prev = prev.filter(obj => obj.id !== data);
    })
  }

  useEffect(() => {
    const cont = localStorage.getItem('contacts');
    const parsCont = JSON.parse(cont);
    if (parsCont!==null) {
      setContacts(prev => prev = parsCont)
    }
  },[])
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
    console.log('gntjurmiy');
  },[contacts])
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputMainForm onSubHand={formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
                  <InputFind onChangeFind={inpChangHandler} />
          {filterName === ''
            ?
            <ContactsList
              stateData={contacts}
              onBtnDelId={btnDelId} />
            :
            <FilterContactsList
              stateData={contacts}
              changeFilter={filterName}
              onBtnDelId={btnDelId} />}
        </div>
    </div>
    )
};
