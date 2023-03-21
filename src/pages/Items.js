import { Link } from 'react-router-dom';

const PRODUCTS = [
  { id: 'p1', name: 'Sony 530' },
  { id: 'p2', name: 'Samsung blabla' },
  { id: 'p3', name: 'Iphone' },
  { id: 'p4', name: 'LG' },
]


const Items = () => {
  return (
    <div>
      Items
      <ul>

        {PRODUCTS.map((product) => {
          return <li key={product.id}><Link to={`/items/${product.id}`}>{product.name}</Link></li>
        }
        )}

        {/* <li><Link to="/items/1">Sony 530</Link></li>
          <li><Link to="/items/2">Samsung blabla</Link></li>
          <li><Link to="/items/3">Iphone</Link></li> */}
      </ul>
    </div>
  )
}

export default Items