import React, {useState} from 'react';
import './HateSpeech.css';
import CommentCard from './CommentCard';
import axios from "axios";
import {SnackbarProvider, useSnackbar} from 'notistack';
import loading from './assets/loading.gif'

const HateSpeech: React.FC = () => {
    const {enqueueSnackbar} = useSnackbar();

    const [comments, setComments] = useState<any[]>([]);

    const [query, setQuery] = useState<any>('');
    const [isLoading, setIsLoading] = useState<any>(false);

    const textareaChanged = (event: any) => {
        setQuery(event.target.value)
    }

    const publishClicked = () => {
        if (query === '') {
            enqueueSnackbar('Please Add Comment', {variant: 'warning'});
        } else {
            sendRequest(query);
        }
    }

    const sendRequest = async (query: any) => {
        setIsLoading(true);
        try {
            const response = await axios.post('http://127.0.0.1:5003/predict', {
                sentences: [query],
            });
            console.log();
            console.log()

            let updated_resp_obj = {
                is_hate: response.data.predictions[0].is_hate,
                predict: response.data.predictions[0].predict,
                sentence: response.data.predictions[0].sentence,
                date_time: new Date().toLocaleString('en-GB', {hour12: false}).replace(',', '')
            }

            setComments((prevComments) => [...prevComments, updated_resp_obj]);
            setQuery('')
            setIsLoading(false);
        } catch (error) {
            console.error('Error during network call:', error);
            enqueueSnackbar('Error: ' + error, {variant: 'error'});
            setQuery('');
            setIsLoading(false);
        }
    };

    return (
        <div className="hate-speech">
            <h2>Hate Speech Detection System</h2>
            <div className="comment-input">
                <textarea placeholder="Write your Comment here" onChange={textareaChanged} value={query}></textarea>
                <button onClick={publishClicked}>Publish</button>
                {isLoading &&
                    <div className='img-container'>
                        <img src={loading} width='60px' height='60px'/>
                    </div>
                }
            </div>

            <p>{comments.length} Comments added</p>
            {comments.length > 0 &&
                <div className="comments-container">
                    {comments.map((comment, index) => (
                        <CommentCard
                            key={index}
                            sentence={comment.sentence}
                            is_hate={comment.is_hate}
                            date_time={comment.date_time}
                        />
                    ))}
                </div>
            }
        </div>
    );
};

export default HateSpeech;
