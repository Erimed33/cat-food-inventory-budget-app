import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/newfood.css'


const NewFood = () => {
    // this will bring the client to the catFoodInventory to see all of the items
    const navigate = useNavigate();
    // useState initial value is the object with keys and empty properties
    const [newItem, setNewItem] = useState({
        item_name: '',
        amount: '',
        date: '',
        from: '',
        category: ''
    });

    const API = import.meta.env.VITE_BASE_URL; 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewItem(prevItem => ({
            ...prevItem,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch(API, { 
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json"

            }
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                navigate('/catfood')
            }
                
            )
            .catch(err => console.error(err))

            
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>New Catfood Item</legend>
                <input
                    type="text"
                    placeholder="Item Name"
                    name="item_name"
                    value={newItem.item_name}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="number"
                    placeholder="Amount"
                    name="amount"
                    value={newItem.amount}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="Date"
                    name="date"
                    value={newItem.date}
                    onChange={handleChange}
                    required
                />
                <br />
                <input
                    type="text"
                    placeholder="From"
                    name="from"
                    value={newItem.from}
                    onChange={handleChange}
                />
                <br />
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    value={newItem.category}
                    onChange={handleChange}
                />
                <br />
                <input type="submit" value="Add Item" />
            </fieldset>
        </form>
    );
};

export default NewFood;
