const Input = () => {
    const upKey = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-14 h-14"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
            </svg>
        );
    };

    return (
        <div className="relative w-full lg:w-1/2">
            <textarea
                className="border border-gray-200 w-full rounded-2xl p-4 pr-20 shadow transition-shadow duration-300 hover:shadow-lg resize-none"
                name="review"
                id=""
                rows="3"
                placeholder="Write a review"
                style={{ fontSize: "16px" }}
            ></textarea>

            <button
                className="absolute top-3 right-4 bg-white text-black rounded-full p-1 hover:bg-gray-200 transition z-10"
                type="button"
            >
                {upKey()}
            </button>
        </div>
    );
};

export default Input;
