import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Edge(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Edge"
    const placeName = {
        placeName: "Edge"
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
                    <h1>The Edge at Bostock Library</h1>
                    <p>This spot is located on the first floow of Bostock Library. It contains a lounge,
                     digital studio, and several group study rooms. The walls and pillars in it are also
                     built with the purpose of being written on. Thus, this place is perfect for group work 
                     and collaboration.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Edge-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Edge-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Edge-3.jpg" className = "image"></img>
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

export default Edge