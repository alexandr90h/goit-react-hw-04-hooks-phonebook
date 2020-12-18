import ContactsItem from '../ContactsList/contactsItem';
export default function FilterContactsList({ stateData, changeFilter,onBtnDelId }) {
    const filterArr = stateData.filter(obj=>{return (obj.name.toLowerCase().includes(changeFilter.toLowerCase()))}); 
    return (
        <ul>
            {filterArr.map(obj => {
                return(<ContactsItem key={obj.id}
                    id={obj.id}
                    name={obj.name}
                    number={obj.number}
                    onBtnDelId={onBtnDelId}
                />)
            })}
        </ul>
    )
}