import React, { Component } from 'react';
import styles from './inputMainForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
class InputForm extends Component{
    state={
        name: '',
        number: '',
        id: uuidv4(),
    }
    hendleInputChanga = e => {
        const { name, value } = e.currentTarget;
        this.setState({
            [name]: value,
        })
    }
    hendleOnSubmit = e => {
        e.preventDefault();
        this.props.onSubHand(this.state);
        this.reset();
    }
    reset=() => {
        this.setState({
            name: '',
            number: '',
            id: uuidv4(),
        })
    }
    render() {
        return (<div>
            <form onSubmit={this.hendleOnSubmit} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={this.state.name} onChange={this.hendleInputChanga}/>
                </label>
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={this.state.number} onChange={this.hendleInputChanga}/>
                </label>
                <button type="submit">Add contact</button>
        </form>
        </div>);
    }
}
export default InputForm; 