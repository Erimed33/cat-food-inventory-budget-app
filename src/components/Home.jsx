import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const [catfoodInventory, setCatfoodInventory] = useState([]);
    const API = import.meta.env.VITE_BASE_URL; 
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(res => {
                // setLogs to be the array of objects
                setCatfoodInventory(res);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            {catfoodInventory.map((catFood, i) => (
                <div key={i}>
                    <Link to={`/catfood/${i}`}>
                    {catFood.date} {catFood.item_name} {catFood.amount}</Link>
                </div>
            ))}
        </div>
    );
}

export default Home;



