import './Bottle.css'

const Bottle = ({bottle, handleAddToChart}) => {
    // console.log(bottle);

    const {name, img, price} = bottle;

    return (
        <div className="bottle">
            <h3>Botttle: {name}</h3>
            <img src={img} alt="" />
            <p>Price: $ {price}</p>
            <button onClick={() => handleAddToChart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;