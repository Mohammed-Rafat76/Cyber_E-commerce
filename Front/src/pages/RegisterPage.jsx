import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { domain } from "../store";
export default function RegisterPage() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    
    let endPoint = "/api/auth/local/register";
    let url = domain + endPoint;
    let data = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        toast.success("Done register , Welcome " +data.username);
        navigate("/");
        console.log(res.data);
      })
      .catch((err) => {
        let msg = err.response.data.error.message;
        toast.error(msg);
        console.log(err);
      });
    console.log(values);
  };
  const initialschema = Yup.object({
    email: Yup.string().required().email(),
    username: Yup.string()
      .required()
      .min(4, "username should be at least 4 char"),
    password: Yup.string()
      .required()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])(?=\S+$).{8,}$/,
        "At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special, no spaces"
      ),
  });

  return (
    <div className="w-full h-screen bg-violet-400 flex items-center justify-center">
      <Formik
        validationSchema={initialschema}
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "", username: "" }}
      >
        <Form className="bg-yellow-50 w-[450px] p-4 flex flex-col justify-center items-center gap-4 rounded shadow border">
          <h1>Welcome back</h1>

          <Field
            name="email"
            type="email"
            placeholder="enter your email"
            className="input via-indigo-400 text-violet-400 w-full"
          />
          <ErrorMessage
            name="email"
            component={"div"}
            className="text-red-500"
          />
          <Field
            name="password"
            type="password"
            placeholder="enter your password"
            className="w-full input via-indigo-400 text-violet-400"
          />
          <ErrorMessage
            name="password"
            component={"div"}
            className="text-red-500"
          />
          <Field
            name="username"
            type="text"
            placeholder="enter your username"
            className="w-full input via-indigo-400 text-violet-400"
          />
          <ErrorMessage
            name="username"
            component={"div"}
            className="text-red-500"
          />

          <button type="submit" className="btn btn-soft btn-primary w-full">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}
