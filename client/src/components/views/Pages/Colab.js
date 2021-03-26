import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Colab(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Colab"
    const placeName = {
        placeName: "Colab"
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
                    <h1>Innovation Co-Lab Studio at TEC</h1>
                    <p>Located in the Technology Engagement Center on the first floow of the 
                    Telcom Building, this study spot is truly an intriguing place. Aside from the 
                    fact that the tables here are excellent, students also have views of 3D printers.
                    So if you are ever bored or need a break from studying, you can wander about and 
                    see what cool projects your peers are building.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Colab-1.png" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Colab-2.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Colab-3.jpeg" className = "image"></img>
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

export default Colab