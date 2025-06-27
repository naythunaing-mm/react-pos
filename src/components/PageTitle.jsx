import { Link } from 'react-router-dom';
const PageTitle = () => {
    const title = "React POS";
    return (
        <>
            <Link to="/">
                <h2 className="text-2xl font-bold dark:text-white">{title}</h2>
            </Link>
        </>
    )
}
export default PageTitle