const Cart = ({ image, links, linksName, skils, Name, discrption }) => {
  return (
    <div className="cart">
      <div>
        <div style={{ backgroundImage: `url(${image})` }} className="img"></div>
      </div>
      <h2>{Name}</h2>
      <p>{discrption}</p>
      <div className="skil">
        {skils && skils.map((skil, index) => <span key={index}>{skil}</span>)}
      </div>
      <div className="link">
        {links &&
          links.map((link, index) => (
            <a key={index} target="_blank" href={link}>
              Visit {linksName[index]}
            </a>
          ))}
      </div>
    </div>
  );
};

export default Cart;
