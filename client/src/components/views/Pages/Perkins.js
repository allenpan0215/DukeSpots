import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Perkins(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Perkins"
    const placeName = {
        placeName: "Perkins"
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
                    <h1>Perkins Library</h1>
                    <p>One of the main librarys Duke students study at. There are several reading rooms 
                    available as well as a gothic reading room. It also has many booths, tables, and group study rooms.
                    One particular feature of Perkins is The Link, which is located in the basement and is a collaborative 
                    area where students will go to work on group projects. So if you are in need of a simple standard study 
                    spot, Perkins is the place to go.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Perkins-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Perkins-2.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Perkins.jpg" className = "image"></img>
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

export default Perkins