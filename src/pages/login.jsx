import Button from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/TextInput';

export default function Login() {
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
                    <Button type="submit">Login</Button>
                </Form>
            </div>
        </section>
    );
}
