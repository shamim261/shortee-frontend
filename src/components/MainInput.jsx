import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

export default function MainInput() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState();
    const userInfo = localStorage.getItem('userInfo');
    const navigate = useNavigate();

    async function submitHandler(e) {
        e.preventDefault();
        if (!userInfo) {
            navigate('/auth');
        }
        try {
            const { data } = await axios.post('api/urls', {
                url: url,
            });
            if (data.success) {
                alert(data.success);
                navigate('/dashboard');
            }
        } catch (err) {
            setError(err);
        }
    }
    return (
        <>
            <div className="">
                <Form onSubmit={submitHandler}>
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        type="text"
                        className="p-4 w-80 text-lg md:w-[30rem] md:p-6 m-4 rounded-l-xl md:placeholder:text-lg focus:outline-none"
                        placeholder="Enter your URL"
                    />
                    <button className="p-4 md:py-6 bg-primary hover:bg-hover transition-colors uppercase font-bold text-slate-100 -ml-4 rounded-r-xl md:text-lg">
                        Shorten URL
                    </button>
                </Form>
            </div>
        </>
    );
}
