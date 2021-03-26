import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Vonder(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Vonder"
    const placeName = {
        placeName: "Vonder"
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
                    <h1>Von Der Heyden Pavilion</h1>
                    <p>Attached to Perkins, the Von Der Heyden Pavilion is a cozy coffee shop that serves 
                    pastries, snacks, sandwhiches, and anything else you might need while doing homework.
                    Though typically pretty busy, if white noise and sound is something you need while studying,
                    this place is perfect for that. It also has a nice asthetic touch to its design, which is a plus.
                    </p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Vonder-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Vonder-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Vonder-3.jpg" className = "image"></img>
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

export default Vonder