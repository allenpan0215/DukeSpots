import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Ruby(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Ruby"
    const placeName = {
        placeName: "Ruby"
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
                    <h1>The Ruby</h1>
                    <p>Also known as the Rubenstein Arts Center, the Ruby is an hub for artistic production 
                    at Duke. It is also a neat study spot. From the gorgeous architecture to the sunlight pouring 
                    into the building, this is one place you don't want to miss out on visiting. Furthermore, you 
                    can take a look around at all the artistic and beautiful studios when you need a break!</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Ruby-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Ruby-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Ruby-3.jpg" className = "image"></img>
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

export default Ruby