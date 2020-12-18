import React, { Component } from 'react';
import styles from './inputFind.module.scss';
class InputFind extends Component{
    hendlInputFilter = e => {
        this.props.onChangeFind(e.currentTarget.value)
    }
    render(){
        return (
            <div className={styles.inputContainer}>
                <label>Find contacts by name
                    <input type="text"
                        autoComplete="off"
                    onChange={this.hendlInputFilter} 
                    />
                </label>
            </div>
        )
    }
}
export default InputFind;