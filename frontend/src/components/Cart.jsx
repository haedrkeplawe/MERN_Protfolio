const Cart = ({ image, link, Name }) => {
  return (
    <div className="text-center bg-gray-900 p-6 rounded-lg">
      <div>
        <img className="bg-gray-900 w-full h-52 rounded-lg" src={image} />
      </div>
      <h2 className="text-xl">{Name}</h2>
      <a target="_blank" href={link} className="text-cyan-400 rounded-md">
        Visit Project
      </a>
    </div>
  );
};

export default Cart;
