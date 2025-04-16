import {Link, useParams} from "react-router-dom";
import "./css/detail.css"

let PostDetail = () => {
    const {id} = useParams();

    const post ={
        id,
        title: `${id}번째 게시글`,
        content: `${id}번째 게시글의 상세 내용`
    };
    const handleDelete = () => {
        alert("게시글이 삭제되었습니다.")
    }

    return (
        <div className={"post-detail-container"}>
            <h1 className={"post-detail-title"}>{post.title}</h1>
            <p className={"post-detail-content"}>{post.content}</p>
            <div className={"button-group"}>
                <Link to={`/post/edit/${id}`} className={"edit-button"}>
                    수정하기
                </Link>
                <button onClick={handleDelete} className={"delete-button"}>
                    삭제하기
                </button>
            </div>
            <Link to={"/"} className={"back-link"}>게시글 목록으로 돌아가기</Link>
        </div>
    )
}

export default PostDetail