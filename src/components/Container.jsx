const Container = ({ children }) => {
    return (
        <div className="w-full flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
            {children}
        </div>
    );
};

export default Container;
