import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import PropTypes from "prop-types";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={styles.contactItem}>
      <div>
        <div className={styles.contactContext}>
          <span>{name}</span>
        </div>
        <div className={styles.contactContext}>
          <span>{number}</span>
        </div>
      </div>
      <button onClick={handleDelete} type="button" aria-label="delete button">
        Delete
      </button>
    </li>
  );
}
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
