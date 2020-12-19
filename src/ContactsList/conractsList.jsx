import ContactsListItem from './ContactsItem';
import styles from './conractsList.module.scss'
export default function ContactsList({ stateData, onBtnDelId }) {
    console.log(stateData);
    return (
        <ol className={styles.contactList}>
            {stateData.map(obj => {
                return (<ContactsListItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ol>
    )
}