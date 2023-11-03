import UrlList from '../components/UrlList';

export default function Dashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center m-4">All URLS</h1>
            <UrlList />
        </div>
    );
}
