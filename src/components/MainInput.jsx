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

        let updatedUrl = url;

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            updatedUrl = `http://${url}`;
        }

        if (!userInfo) {
            navigate('/auth');
        }
        try {
            const { data } = await axios.post('api/urls', {
                url: updatedUrl,
            });
            if (data.success) {
                alert(data.success);
                navigate('/dashboard');
            } else if (data.errors) {
                setError();

                Object.keys(data.errors).map((fname) => setError(fname));
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
                <span className="text-red-600 ">{error ? `Invalid URL` : ''}</span>
            </div>
        </>
    );
}
