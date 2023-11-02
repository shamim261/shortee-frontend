import { Link } from 'react-router-dom';
import Form from './Form';
import TextInput from './TextInput';

export default function LoginComponent() {
    return (
        <section className="items-center justify-center pt-24 ">
            <h1 className="uppercase text-center m-2 text-4xl font-bold">Login</h1>
            <div className="drop-shadow-md max-w-xl m-auto py-5 my-5  ">
                <Form className="flex flex-col justify-center items-center ">
                    <TextInput label="Enter Email" type="text" placeholder="Enter your email" />
                    <TextInput
                        label="Enter Password"
                        type="password"
                        placeholder="Enter your password"
                    />
                    <button className="m-2 border p-3 w-96 text-slate-200 rounded-lg bg-[#5A4AE3] hover:bg-[#5041d1] transition-colors">
                        Login
                    </button>
                </Form>
                <p className="text-center mt-2">
                    Dont have an account?
                    <Link to="/auth" state={true}>
                        <span className="text-[#5A4AE3] hover:text-[#5041d1]"> Register now</span>
                    </Link>
                </p>
            </div>
        </section>
    );
}
