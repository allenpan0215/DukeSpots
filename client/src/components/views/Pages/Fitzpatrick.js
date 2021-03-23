import React, { useEffect, useState } from 'react'
import { List, Avatar, Row, Col, Button } from 'antd';
import axios from 'axios';
import '../../App.css'
import Comments from './Ratings/Comments'
import LikeDislikes from './Ratings/LikeDislikes';
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
        <div>


                <div class = 'temp' style={{ display: 'flex', justifyContent: 'center' }}>
                    <LikeDislikes place placeId = {placeId} userId={localStorage.getItem('userId')} />
                </div>

                {/* Comments */}
                <Comments  CommentLists={CommentLists} postId={placeId} refreshFunction={updateComment} />

            </div>

    )
}

export default Fitzpatrick