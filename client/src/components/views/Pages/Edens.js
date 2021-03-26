import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Edens(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Edens"
    const placeName = {
        placeName: "Edens"
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
                    <h1>Edens 1C</h1>
                    <p>Edens 1C is full of booths and couches you can study at. It is quite convenient 
                    if you live near Edens as well. There are also many locations outside surrounding it
                    to sit at if it is ever crowded. It is also located right behind Cafe Edens, which is 
                    a plus if you ever get hungry. Not to mention the game room where you can relax and 
                    take breaks in.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Edens-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Edens-2.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Edens-3.jpg" className = "image"></img>
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

export default Edens