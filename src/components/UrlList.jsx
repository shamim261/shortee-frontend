import copySVG from '../assets/img/copy.svg';
export default function UrlList() {
    function truncate(str, maxLength) {
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    }
    function genSlice(str) {
        return str.slice(8, 99999);
    }

    return (
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                            <a href="#">{truncate('https://downforeveryoneorjustme.com/', 20)}</a>
                        </th>
                        <td className="px-6 py-4 flex">
                            <a href="#"> {genSlice('https://shortee.devshamim.com/n5s8sc8')}</a>{' '}
                            <img className="w-4 ml-1" src={copySVG} />
                        </td>
                        <td className="px-6 py-4 text-center">1</td>
                        <td className="px-6 py-4 flex ">
                            <a className="mr-1" href="">
                                Edit
                            </a>
                            |
                            <a href="#" className="ml-1 text-red-500">
                                Delete
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}