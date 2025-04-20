import "./css/detail.css"
import {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import axios from "axios";

function PostDetail () {
    const { id } = useParams();
    let navigate = useNavigate();

    let [post,setPost] = useState({
        title:"",
        content:""
    });

    const getPost= () => {
        axios.get(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then(response => {
                console.log('게시글 가져오기 성공:', response.data);
                setPost(response.data);
            })
            .catch(error => {
                console.error('게시글 가져오기 실패:', error);
            });
    };

    useEffect(()=>{
        getPost();
    },[]);

    const handleDelete = () => {
        if(!window.confirm("정말 삭제하시겠습니까?")){
            return;
        }
        axios.delete(`${process.env.REACT_APP_API_URL}/posts/${id}`)
            .then(response => {
                console.log(response.data);
                alert("삭제가 완료되었습니다.");
                navigate("/");
            }).catch(error => {
                console.error(error);
                alert("삭제 중 오류가 발생했습니다.")
        })
    };

    return (
        <div className="post-detail-container">
            <h1 className="post-detail-title">{post.title}</h1>
            <p className="post-detail-content">{post.content}</p>
            <div className="button-group">
                <Link to={`/post/edit/${id}`} className="edit-button">
                    수정하기
                </Link>
                <button onClick={handleDelete} className="delete-button">
                    삭제하기
                </button>
            </div>
            <Link to="/" className="back-link">목록으로 돌아가기</Link>
        </div>
    );
}

export default PostDetail;