import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
export default function DeleteFunc() {
    const { shortID } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function HandleDelete() {
            const { data } = await axios.delete(
                `${import.meta.env.VITE_BACKEND_URL}/api/urls/${shortID}`
            );
            navigate('/dashboard');
            console.log(data);
        }
        HandleDelete();
    }, [shortID, navigate]);
    return <div>Deleting...</div>;
}
