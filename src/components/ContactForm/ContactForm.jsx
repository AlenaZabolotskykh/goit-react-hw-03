import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";

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

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        username: "",
        number: "",
        id: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
      validationSchema={UserSchema}
    >
      <Form>
        <div>
          <label htmlFor="username">Name</label>
          <Field type="text" name="username"></Field>
          <ErrorMessage name="username" component="span" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="text" name="number"></Field>
          <ErrorMessage name="number" component="span" />
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
