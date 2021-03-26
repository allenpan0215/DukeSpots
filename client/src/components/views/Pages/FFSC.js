import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function FFSC(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "FFSC"
    const placeName = {
        placeName: "FFSC"
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
                    <h1>French Family Science Center</h1>
                    <p>At the heart of the department of chemistry, the FFSC is a state of the 
                    art research facility. It contains great classrooms to study in as well 
                    as numerous instrumentation facilities. Though these are not readily available for 
                    all students, once you have the required training the resources this place offers 
                    are abundant. Even without this equipment, the FFSC is still a vast, beautiful, and 
                    luscious place to study at.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/FFSC-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/FFSC-2.png" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/FFSC-3.png" className = "image"></img>
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

export default FFSC