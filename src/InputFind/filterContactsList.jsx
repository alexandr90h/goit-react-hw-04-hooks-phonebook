import ContactsItem from '../ContactsList/contactsItem';
import styles from '../ContactsList/conractsList.module.scss';
export default function FilterContactsList({ stateData, changeFilter,onBtnDelId }) {
    const filterArr = stateData.filter(obj=>{return (obj.name.toLowerCase().includes(changeFilter.toLowerCase()))}); 
    return (
        <ol className={styles.contactList}>
            {filterArr.map(obj => {
                return(<ContactsItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ol>
    )
}