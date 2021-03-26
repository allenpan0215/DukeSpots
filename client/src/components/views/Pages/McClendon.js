import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function McClendon(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "McClendon"
    const placeName = {
        placeName: "McClendon"
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
                    <h1>McClendon Tower</h1>
                    <p>McClendon tower offers an array of places to study as well as containing all the necessities 
                    to grind away. Whether you want to study on the plaza up top, or on the lower study floor, the 
                    choice is yours. It also has a coffee shop where you can buy drinks, snacks, and sandwhiches. Though 
                    not the most convenient place to go, if you live nearby then this is one place you need to bookmark.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/McClendon-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/McClendon-2.JPG" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/McClendon.png" className = "image"></img>
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

export default McClendon