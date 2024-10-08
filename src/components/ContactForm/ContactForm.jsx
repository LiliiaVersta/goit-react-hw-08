import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const ContactSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, `The "Name" is too Short!`)
    .max(50, `The "Name" is too Long!`)
    .required('The "Name" is Required field!'),
  number: Yup.string()
    .min(3, `The "Number" is too Short!`)
    .max(50, `The "Number" is too Long!`)
    .required('The "Number" is Required field!'),
});
const ContactForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ userName: "", number: "" }}
        validationSchema={ContactSchema}
        onSubmit={(values) => {
          const contact = {
            id: nanoid(),
            name: values.userName,
            number: values.number,
          };
          console.log(addContact(contact));

          dispatch(addContact(contact));
        }}
      >
        <Form className={styles.formContact}>
          <label className={styles.formLabel}>Name</label>
          <div className={styles.formInputWrapper}>
            <Field className={styles.formInput} type="text" name="userName" />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="userName"
              component="div"
            />
          </div>
          <label className={styles.formLabel}>Number</label>
          <div className={styles.formInputWrapper}>
            <Field className={styles.formInput} type="text" name="number" />
            <ErrorMessage
              className={styles.formErrorMessage}
              name="number"
              component="div"
            />
          </div>
          <button className={styles.formButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
