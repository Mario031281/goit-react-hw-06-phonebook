import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Label, Title, Button } from './Form.styled';
import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/selectors';
import { nanoid } from '@reduxjs/toolkit';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export const FormContact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const handleSubmit = (values, actions) => {
    const isInContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === values.name.toLowerCase() ||
        contact.number === values.number
    );

    if (isInContacts) {
      toast.error('This contact already exists');
    } else {
      const id = nanoid();
      dispatch(addContact({ ...values, id }));
      actions.resetForm();
      // const updetContacts = [...contacts, { ...values, id }];
    }
  };
  return (
    <div>
      <Title>Phonebook</Title>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <Label>
              Name
              <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage name="name" component="div" />
            </Label>

            <Label>
              Number
              <Field
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage name="number" component="div" />
            </Label>

            <Button type="submit">Add contact</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
