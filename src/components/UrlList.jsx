import { Link } from 'react-router-dom';
export default function UrlList() {
    function truncate(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    }
    function genSlice(str) {
        return str.slice(8, 99999);
    }
    function copyClip(text) {
        navigator.clipboard.writeText(text);
        alert('Link copied to clipboard!');
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Main Links
                        </th>
                        <th scope="col" className="px-6 py-3 text-center md:text-left">
                            Generated Links
                        </th>
                        <th scope="col" className="px-6 py-3 text-center md:text-left">
                            Total Clicks
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th
                            scope="row"
                            className="px-6 font-normal py-4 text-gray-900 whitespace-nowrap dark:text-white"
                        >
                            <Link to="#">
                                {truncate('https://downforeveryoneorjustme.com/', 20)}
                            </Link>
                        </th>
                        <td className="px-6 py-3 break-words flex">
                            <Link to="#">
                                <div className="w-32 md:w-full">
                                    {genSlice('https://shortee.devshamim.com/n5s8sc8')}
                                </div>
                            </Link>
                            <button
                                onClick={() => copyClip('test !')}
                                type="button"
                                className="relative bottom-1 ml-1 md:border-2 text-hover py-0 rounded-md md:bg-primary md:text-slate-100 md:p-1 md:mb-2"
                            >
                                copy
                            </button>
                        </td>
                        <td className="px-6 py-4 text-center md:text-left">1</td>
                        <td className="px-6 py-4  ">
                            <Link to="#" className="ml-1 text-red-500">
                                Delete
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
