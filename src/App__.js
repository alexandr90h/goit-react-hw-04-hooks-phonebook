import React, { Component } from 'react';
import styles from './app.module.scss';
import InputMainForm from './InputMainForm/InputMainForm.jsx';
import ContactsList from './ContactsList/conractsList';
import InputFind from './InputFind/inputFind';
import FilterContactsList from './InputFind/filterContactsList.jsx';

class App extends Component{
  state = {
    contacts: [],
    filter:'',
  }
  formSubmitHandler = data => {
    if (this.state.contacts.find(obj => obj.name.toLowerCase() === data.name.toLowerCase())===undefined) {
      this.setState(prev => ({
        contacts: prev.contacts.concat(data),
      }))
    }
    else alert(`${data.name} is alreadyin contacts.`);
  }
    inpChangHandler = data => {
    this.setState({
      filter: data,
    })
  }
  btnDelId = data => {
    this.setState(prev => ({
    contacts: prev.contacts.filter(obj=>obj.id!==data)
    }))
  }
  componentDidMount() {
    const cont = localStorage.getItem('contacts');
    const parsCont = JSON.parse(cont);
    this.setState({contacts:parsCont})
  }
  componentDidUpdate(prevProp, prevState) {
    if (this.state.contacts!==prevState.contacts) {
          localStorage.setItem('contacts',JSON.stringify(this.state.contacts))
    }
  }
  render() {
    return (
      <div className={styles.mainContainer}>
        <h1>Phonebook</h1>
        <div>
          <InputMainForm onSubHand={this.formSubmitHandler} />
        </div>
        <div>
          <h2>Contacts</h2>
        <InputFind onChangeFind={this.inpChangHandler} />
          {this.state.filter === ''
            ?
            <ContactsList
              stateData={this.state.contacts}
              onBtnDelId={this.btnDelId} />
            :
            <FilterContactsList
              stateData={this.state.contacts}
              changeFilter={this.state.filter}
              onBtnDelId={this.btnDelId} />}
        </div>
    </div>
    )
  }
  
}
export default App;
