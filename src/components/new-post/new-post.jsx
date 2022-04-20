import { Editor } from '../editor';
import { Card, cardTypes } from '../UIComponents/Card';
import React, { useState } from 'react';
import { Button, buttonTypes } from '../UIComponents/Button';
import styles from './new-post.module.css';
import { useDispatch } from 'react-redux';
import { createPost } from '../../slices/posts-slice';
import { toggleNewPost } from '../../slices/new-post-slice';

export const NewPostDisplay = () => {
    const [ text, setText ] = useState();
    const [ title, setTitle ] = useState('');
    const dispatch = useDispatch();

    return (
        <div>
            <Card type={cardTypes.lightBlue}>
                <input 
                    className={styles.title}
                    type='text'
                    maxLength='50'
                    placeholder="Title: 50 characters max"
                    value={title}
                    onInput={(event) => setTitle(event.target.value)}
                />
                <Editor 
                    text={text}
                    setText={setText}
                />
                <div className={styles.end}>
                    <Button
                        type={buttonTypes.green}
                        onClick={ () => {
                            if (!text) return;
                            console.log(title);
                            dispatch(createPost({
                                text,
                                title
                            }));
                            dispatch(toggleNewPost());
                        } }
                        className={styles.innerButton}
                    >
                        Submit
                    </Button>
                    <Button
                        type={buttonTypes.red}
                        onClick={ () => dispatch(toggleNewPost()) }
                    >
                        Cancel
                    </Button>
                </div>
            </Card>
        </div>
    );
}