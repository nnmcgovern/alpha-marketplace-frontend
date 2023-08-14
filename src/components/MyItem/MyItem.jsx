import './MyItems.css';

export default function MyItems({ items }) {
  return (
    <div className='items-modal'>
      <div className='items-modal-content'>
        {items.map((item, index) => (
          <div key={index} className='item'>
            <img src={item.image} alt={`${item.maker} ${item.model}`} />
            <div className='item-info'>
              <div>Make: {item.maker}</div>
              <div>Model: {item.model}</div>
              <div>Body Type: {item.type}</div>
              <div>Year: {item.year}</div>
              <div>Color: {item.color}</div>
              <div>Price: ${item.price}</div>
            </div>
          </div>
        ))}

        <div className='items-modal-buttons'>
          <button>Edit</button>
          <button>Delete Item</button>
        </div>
      </div>
      <button className='new-item-btn'>List New Item</button>
    </div>
  );
}
