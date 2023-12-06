import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../WishlistSlice';
import axios from 'axios';
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import './index.css'

const Wislist = () => {

    const [card, setCard] = useState([])
    const wishlistItems = useSelector(state => state.wishlist.items);
    const dispatch = useDispatch();
    const BaseUrl = 'http://localhost:3000/clear'


    async function fetchDatas() {
        const res = await axios.get(`${BaseUrl}`)
        setCard(res.data)
    }

    useEffect(() => {
        fetchDatas()
    }, [])

    const handleAddWishlist = (id, name, description) => {
        dispatch(addItem({ id: id, name: name, description: description }));

    };

    const handleRemoveFromWishlist = (id) => {
        dispatch(removeItem(id));
    };

    return (

        <>
            <div style={{ backgroundColor: '#C19191' }}>
                {wishlistItems && wishlistItems.map((item) => (
                    <div style={{border:'2px solid #2C3639'}}>
                        <Fragment key={item.id}>
                            {/* <img src={item.image} alt="" /> */}
                            <p>{item.name}</p>
                            <button onClick={() => handleRemoveFromWishlist(item.id)}><IoCloseSharp className='close' /></button>
                        </Fragment>
                    </div>
                ))}
            </div>

            <div>
                {card && card.map((item) => (
                    <div key={item.id}>
                         {/* <img src={item.image} alt="" /> */}
                        <p>{item.name}</p>
                        <button onClick={() => handleAddWishlist(item.id, item.name, item.description)}><FaHeart className='heart' /></button>


                    </div>
                ))}
            </div>
        </>
    )
}

export default Wislist

















