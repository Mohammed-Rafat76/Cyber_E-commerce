import axios from "axios";
import { Form, Formik, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { domain } from "../store";
export default function LoginPage() {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    let endPoint = "/api/auth/send-email-confirmation";
    let url = domain + endPoint;
    let data = {
      identifier: values.email,
      password: values.password,
    };
    axios
      .post(url, data)
      .then((res) => {
        let user = res.data.user
        toast.success("Welcome "+ user.username )
        navigate("/")
        if(values.remeberIndex){
          localStorage.setItem('token' , res.data.jwt)
        }else{
          sessionStorage.setItem('token' , res.data.jwt)
        }
      })
      .catch((err) => {
        toast.error("Wrong email or password")
      });
    console.log(values);
  };
  const initialschema = Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().required(),
  });

  return (
    <div className="w-full h-[100vh] bg-violet-400 flex items-center justify-center">
      <Formik
        validationSchema={initialschema}
        onSubmit={handleSubmit}
        initialValues={{ email: "", password: "" , remeberIndex:true}}
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
         <label >
          <Field  type="checkbox" name="remeberIndex" />
          Remeber me
         </label>

          <button type="submit" className="btn btn-soft btn-primary w-full">
            Login
          </button>
          <div className="flex justify-center gap-1.5">
            <h1>If this first time click here </h1>
            <Link to="/register" className="bold text-red-500">Registar</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
