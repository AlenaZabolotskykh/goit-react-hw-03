import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    onAdd({
      id: nanoid(),
      name: values.username,
      number: values.number,
    });
    actions.resetForm();
  };
  const UserSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
        id: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={UserSchema}
    >
      <Form>
        <div>
          <label htmlFor="username">Name</label>
          <Field id="username" type="text" name="username"></Field>
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field id="number" type="text" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
