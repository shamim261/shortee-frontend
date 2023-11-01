import Button from '../components/Button';
import Form from '../components/Form';
import TextInput from '../components/TextInput';

export default function Signup() {
    return (
        <section className="items-center justify-center pt-24 ">
            <h1 className="uppercase text-center m-2 text-4xl font-bold">SIGNUP</h1>
            <div className="drop-shadow-md max-w-xl m-auto py-5 my-5  ">
                <Form className="flex flex-col justify-center items-center ">
                    <TextInput type="text" placeholder="Enter your name" />
                    <TextInput type="text" placeholder="Enter your email" />
                    <TextInput type="password" placeholder="Enter your password" />
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        </section>
    );
}
