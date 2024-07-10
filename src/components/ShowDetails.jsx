import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ShowDetails = () => {
    const [foodDetails, setFoodDetails] = useState([])
    const { index } = useParams();
    const API = import.meta.env.VITE_BASE_URL; 

    useEffect(() => {
        fetch(`${API}/${index}`)
            .then(res => res.json())
            .then(res => {
                setFoodDetails(res)
            })
            .catch(err => console.error(err))

    }, [])
const nobullet = {
    listStyleType : 'none',
                
}
    return (
        <div>
            <ul style={nobullet}> 
                <h4>DETAILS</h4>
          
                <li>Cat Food Id: {foodDetails.id}</li>
                <li>Item Name: {foodDetails.item_name}</li>
                <li>Cost: ${foodDetails.amount}</li>
                <li>Date: {foodDetails.date}</li>
                <li>From: {foodDetails.from}</li>
                <li>Catagory: {foodDetails.category}</li>
            </ul>
        </div>
    );
};

export default ShowDetails;