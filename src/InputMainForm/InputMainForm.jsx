import PropTypes from 'prop-types';
import styles from './inputMainForm.module.scss';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function InputMainForm(props) {
    const { register, hendleOnSubmit, er } = useForm();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [id, setId] = useState(uuidv4());
    
    const hendleInputChanga = e => {
        switch (e.target.name) {
            case 'name': setName(e.target.value)
                break;
            case 'number': setNumber(e.target.value)
                break;
            default:
                break;
        }
    }
    const hendleOnSubmite = e => {
        e.preventDefault();
       props.onSubHand({ name, number, id });
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');
        setId(uuidv4());
    }
     return (
            <div>
            <form onSubmit={hendleOnSubmit(hendleOnSubmite)} className={styles.mainForm}>
                <label>Name 
            <input type="text" name="name" autoComplete="off" value={name} onChange={hendleInputChanga} ref={register({required:true,minLength:3})}/>
                </label>
                <label>Number
                     <input type="text" name="number" autoComplete="off" value={number} onChange={hendleInputChanga}/>
                </label>
                <button type="submit">Add contact</button>
        </form>
            </div>
        );
};
InputMainForm.propTypes = {
    onSubHand:PropTypes.func,
}