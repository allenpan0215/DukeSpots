import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Fleishman(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Fleishman"
    const placeName = {
        placeName: "Fleishman"
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
                    <h1>Fleishman Commons at Sanford School of Public Policy</h1>
                    <p>This is an amazing place to study during the day as you can always grab lunch 
                    or coffee from Saladelia. There is plenty of space here to study and is quiet cozy. 
                    It is somewhat of a maze, however, so don't get lost! This spot tends to be crowded 
                    during the weekdays due to its popularity, so the best time to take a trip here would 
                    be on the weekends if peace and quiet is what you're looking for. </p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Fleishman-1.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Fleishman-2.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Fleishman-3.jpg" className = "image"></img>
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

export default Fleishman