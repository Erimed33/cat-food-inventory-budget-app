import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ShowDetails = () => {
    const { index } = useParams;
    useEffect(() => {
        fetch(`http://localhost:3434/catfood/${index}`)
            .then(res => res.json)
            .then(res => {
                console.log(res)
            })
            .catch(err => console.error(err))

    }, [])

    return (
        <div>
            show details
        </div>
    );
};

export default ShowDetails;