import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Wilkinson(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Wilkinson"
    const placeName = {
        placeName: "Wilkinson"
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
                    <h1>Wilkinson Building</h1>
                    <p>This vast building recently reopened after reconstruction. It is a beautiful place 
                    near the chapel and full of energy. It is a centerplace for collaboration and some place 
                    students go to work on projects together. It also contains a coffee bar and learning Commons
                    where students can interact as well. It also has open air patios right next to the chapel, making
                    it an amazing spot to study.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Wilk-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Wilk-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Wilk-3.jpg" className = "image"></img>
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

export default Wilkinson