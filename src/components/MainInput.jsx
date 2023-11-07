import Form from './Form';

export default function MainInput() {
    return (
        <>
            <div className="">
                <Form>
                    <input
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
