import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
import ScrollToTop from './scrollToTop.js';
function Fitzpatrick(props) {

  

    const [CommentLists, setCommentLists] = useState([])
    const placeId = "Fitzpatrick"
    const placeName = {
        placeName: "Fitzpatrick"
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
                    <h1>Fitzpatrick CIEMAS</h1>
                    <p>Located in Duke's Equad nearby Twinnies Coffeshop, Fitzpatrick CIEMAS is a wonderful
                    place to study. With the open windows and luscious sunlight, it is both relaxing and peaceful.
                    Usually the engineers study here, and is quite quiet most of the time. It does contain many study
                    rooms, however, and is a wonderful place for any BlueDevil to study in.</p>
                </div>
                <div class = "row">
                    <div class = "column">
                    <img src = "/images/Fitz-1.jpg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Fitz-2.jpeg" className = "image"></img>
                    </div>
                    <div class = "column">
                    <img src = "/images/Fitz-3.jpg" className = "image"></img>
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

export default Fitzpatrick