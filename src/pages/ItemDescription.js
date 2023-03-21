import { useParams, Link } from 'react-router-dom';

const ItemDescription = () => {
    const params = useParams();


    return (
        <div>
            you are watching item id {params.itemId}
            <p>  <Link to=".." relative='path'>Go back</Link>    </p>

        </div>
    )
}

export default ItemDescription