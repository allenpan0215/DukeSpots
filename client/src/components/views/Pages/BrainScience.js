import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function BrainScience(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "BrainScience"
    const placeName = {
        placeName: "BrainScience"
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
                    <h1>Institute for Brain Sciences</h1>
                    <p>The Institue for Brain Sciences is a vibrant underground hub where students
                    can both study peacefully as well as look at researchers' brain scans.
                    While this may not seem optimal for some people, it is an extroardinary place 
                    for those interested and overall somewhere you should check out —even if it's
                    not to study.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Brain-science-1.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Brain-science-2.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Brain-science-3.jpeg" className = "image"></img>
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

export default BrainScience