import { Field, Form, Formik } from "formik";

export default function ContactForm() {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        id: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label>Name</label>
          <Field type="text" name="name"></Field>
        </div>
        <div>
          <label>Number</label>
          <Field type="text" name="number"></Field>
        </div>
        <div>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
}
