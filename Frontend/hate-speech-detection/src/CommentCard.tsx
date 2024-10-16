import React from 'react';
import './CommentCard.css';

const CommentCard: React.FC<any> = (props) => {
    return (
        <div className="comment-card" style={{ backgroundColor: props.is_hate ? '#FDECEC' : '#E3F8E0' }}>
            <div className="comment-content">
                <div className="user-icon">👤</div>
                <div className="comment-details">
                    <p className="user">User</p>
                    <p className="text">{props.sentence }</p>
                    <p className="date">{props.date_time}</p>
                </div>
            </div>
        </div>
    );
};

export default CommentCard;
