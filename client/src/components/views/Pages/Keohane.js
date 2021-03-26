import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Keohane(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Keohane"
    const placeName = {
        placeName: "Keohane"
    }


    useEffect(() => {


        axios.post('/api/comment/getComments', placeName)
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log('response.data.comments', response.data.comments)
                    setCommentLists(response.data.comments)
                } else {
                    alert('Failed to get comments Info')
                }
            })

    }, [])

    const updateComment = (newComment) => {
        setCommentLists(CommentLists.concat(newComment))
    }

    return (
        <>
        <ScrollToTop>
                <div className = "content">
                    <h1>Keohane Atrium</h1>
                    <p>All dorms have study rooms, but the nicest one has to be in the Keohane atrium.
                    There are plenty of couches, tables, and a large screen TV to watch basketball and shoes.
                     It includes a vending machine if you ever want snacks and when it's not used for conferences, 
                     is generally empty and quiet.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Keohane-1.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Keohane-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Keohane-3.jpg" className = "image"></img>
                    </div>
                </div>
                <div class = 'temp' style={{ display: 'flex', justifyContent: 'center' }}>
                    <LikeDislikes place placeId = {placeId} userId={localStorage.getItem('userId')} />
                </div>

                {/* Comments */}
                <Comments  CommentLists={CommentLists} postId={placeId} refreshFunction={updateComment} />
</ScrollToTop>
            </>

    )
}

export default Keohane