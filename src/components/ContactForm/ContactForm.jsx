import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import { Button, Form } from 'react-bootstrap';
import * as Yup from 'yup';

import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

const initialValues = {
  name: '',
  number: '',
};

const nameRegex =
  /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/gm;

const numberRegex =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/gm;

const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      nameRegex,
      'Name may contain only letters, apostrophe, dash and spaces'
    )
    .required(),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .matches(
      numberRegex,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (formData, actions) => {
    const sameName = contacts.find(
      el => el.name.toLowerCase() === formData.name.toLowerCase()
    );

    if (sameName) return alert(formData.name + ' is already in contacts.');

    dispatch(addContact({ ...formData }));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={Schema}
    >
      <Form as={FormikForm} className="mb-5">
        <Form.Group className="mb-3" controlId="formContactName">
          <Form.Label>
            Name
            <Form.Control as={Field} type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </Form.Label>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContactPhone">
          <Form.Label>
            Phone
            <Form.Control as={Field} type="tel" name="number" />
          </Form.Label>
          <ErrorMessage name="number" component="div" />
        </Form.Group>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};
