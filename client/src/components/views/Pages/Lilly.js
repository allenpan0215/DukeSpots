import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Lilly(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Lilly"
    const placeName = {
        placeName: "Lilly"
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
                    <h1>Lilly Library</h1>
                    <p>Located on East Campus, this spot is primarily targeted for freshman. It is extremely 
                    convenient and very quiet, making it an excellent spot to study. One upside for upperclassmen 
                    is the absence of peers. So if you don't wish to be bothered by those you know, Lilly Library 
                    is an awesome place to focus.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Lilly-1.png" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Lilly-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Lilly.jpg" className = "image"></img>
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

export default Lilly