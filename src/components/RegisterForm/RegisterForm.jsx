import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, Container, Form } from 'react-bootstrap';
import { Formik, Form as FormikForm, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Schema = Yup.object().shape({
  name: Yup.string().min(6, 'Too Short!').max(20, 'Too Long!').required(),
  password: Yup.string().min(7, 'Too Short!').required(),
  email: Yup.string().email().required(),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (formData, actions) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(register({ ...formData }));
    actions.resetForm();
  };

  return (
    <Container className="mx-auto w-75">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={Schema}
      >
        <Form as={FormikForm}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              as={Field}
              type="text"
              placeholder="Taras Shevchenko"
              name="name"
            />
            <ErrorMessage name="name" component="div" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              as={Field}
              type="email"
              placeholder="myemail@gmail.com"
              name="email"
            />
            <ErrorMessage name="email" component="div" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              as={Field}
              type="password"
              placeholder="Password (min 7 characters)"
              name="password"
            />
            <ErrorMessage name="password" component="div" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </Formik>
    </Container>

    // <form onSubmit={handleSubmit} autoComplete="off">
    //   <label>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <Button type="submit">Register</Button>
    // </form>
  );
};
