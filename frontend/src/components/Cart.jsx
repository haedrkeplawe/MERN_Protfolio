const Cart = ({ image, link, Name }) => {
  return (
    <div className="cart">
      <div>
        <img src={image} />
      </div>
      <h2>{Name}</h2>
      <a target="_blank" href={link}>
        Visit Project
      </a>
    </div>
  );
};

export default Cart;
