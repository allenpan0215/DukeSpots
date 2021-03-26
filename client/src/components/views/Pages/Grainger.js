import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Grainger(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Grainger"
    const placeName = {
        placeName: "Grainger"
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
                    <h1>Grainger Hall at The Nicholas School for the Environment</h1>
                    <p>This spot is absolutely stunning and is a must-go for every student. Sunlight 
                    flies in from every direction and so many choices of places to study. It has classrooms, 
                    shared workrooms and common rooms, as well as an outdoor courtyard and an environmntal art 
                    gallary. Most importantly, however, is how perfect it is of a place for sunsets. This entire location 
                    is simply beautiful and somewhere you won't regret going. I promise.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Grainger-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Grainger-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Grainger-3.jpg" className = "image"></img>
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

export default Grainger