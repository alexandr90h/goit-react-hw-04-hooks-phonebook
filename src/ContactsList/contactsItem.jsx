import styles from './contactsItem.module.scss';

export default function ContactsListItem(props) {
    console.log(props);
    return (
        <li key={props.id} className={styles.contactItem}>
            <div className={styles.contentItem}>
                <span className={styles.nameItem}>{props.name}: </span>
                <span className={styles.phonItem}>{props.number}</span>
            </div>
            <button onClick={() => props.onBtnDelId(props.id)}>delete</button>
        </li>
    )
}
