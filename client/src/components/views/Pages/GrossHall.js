import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function GrossHall(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "GrossHall"
    const placeName = {
        placeName: "GrossHall"
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
                    <h1>Gross Hall</h1>
                    <p>Just a short walk down Science Drive, this spot has plenty of study areas. Spanning multiple 
                    floors, you're guaranteed to find somewhere to study here. There are plenty of tables 
                    to lounge about as well as many meeting rooms to work in.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Gross-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Gross-2.png" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Gross-3.jpg" className = "image"></img>
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

export default GrossHall