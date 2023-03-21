import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const HomePage = () => {

    useEffect(() => { 
        setTimeout(() => {
            navigate('/items');
        }, 1000 * 10);
    }, [])

    const navigate = useNavigate();

    // const clickHandler = () => {
    //     navigate('/items');
    // }

    return (
        <div>
            <h3>home page</h3>
            <Link to="/items">go to items</Link>
            {/* <button onClick={clickHandler}>Progromatic redirect</button> */}

        </div>
    )
}

export default HomePage

