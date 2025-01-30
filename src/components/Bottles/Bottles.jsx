import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
// css
import './Bottles.css'


const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

    const handleAddToChart = bottle => {
        // console.log(bottle);
        const newCart = [...cart, bottle];
        setCart(newCart);
    }

    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <h4>cart: {cart.length}</h4>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle={bottle}
                    handleAddToChart={handleAddToChart}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;