import styles from './contactsItem.module.scss';
import PropTypes from 'prop-types';

export default function ContactsListItem({ id, name, number, onBtnDelId }) {
    return (
        <li key={id} className={styles.contactItem}>
            <div className={styles.contentItem}>
                <span className={styles.nameItem}>{name}: </span>
                <span className={styles.phonItem}>{number}</span>
            </div>
            <button onClick={() => onBtnDelId(id)}>delete</button>
        </li>
    )
}
ContactsListItem.propTypes = {
//   id: PropTypes.number,
//   name: PropTypes.string.isRequired,
//     number: PropTypes.number.isRequired,
  onBtnDelId:PropTypes.func,
};