import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Rubenstein(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Rubenstein"
    const placeName = {
        placeName: "Rubenstein"
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
                    <h1>Rubenstein Library</h1>
                    <p>A spacious study area that gives off chamber vibes. This is an 
                    amazing place to just sit and read a book for hours. Though sometimes
                    there is not enough sunlight, Rubenstein is the place to go if you are in need of 
                    pulling an all nighter or just camping out.
               </p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Rubenstein-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Rubenstein-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Rubenstein.jpg" className = "image"></img>
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

export default Rubenstein