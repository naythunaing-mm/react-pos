import { Link } from 'react-router-dom';
const PageTitle = () => {
    const title = "React POS";
    return (
        <>
            <Link to="/">
                <h2 className="text-2xl text-black font-bold dark:text-gray-400">{title}</h2>
            </Link>
        </>
    )
}
export default PageTitle