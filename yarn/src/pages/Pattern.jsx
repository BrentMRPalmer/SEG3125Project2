import {React, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import '../styles.css';

const Pattern = ({ patternData }) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/patterns`);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment(``);
        }
    }

    const { id } = useParams();
    const pattern = patternData.find((p) => p.id === parseInt(id));

    const [comments, setComments] = useState(["I love this!!", "This was so much fun!"]);
    const [newComment, setNewComment] = useState('');

    return (
        <div className="wrapper">
            <Button variant="primary" onClick={handleButtonClick} className="btn-custom2">
                <img
                src="/icons/arrow.png"
                width="23"
                height="23"
                className="d-inline-block align-top"
                alt="logo"
                />
                {' '}
                Back to Patterns
            </Button>
            <h1 className="centered-text"><b>{pattern.title}</b></h1>
            <div className="image-container">
                <img className="rounded-image" src={pattern.image} />
            </div>
            <h1 className="centered-text"><b>Characteristics</b></h1>
            <div className="characteristics-container padding">
                <p><b>Plushy Type:</b> {pattern.type} </p>
                <p><b>Difficulty:</b> {pattern.difficulty}</p>
                <p><b>Sewing Level:</b> {pattern.sewing}</p>
                <p><b>Length:</b> {pattern.length}</p>
                <p><b>Yarn:</b> {pattern.yarn}</p>
                <p><b>Size:</b> {pattern.size}</p>
            </div>
            <h1 className="centered-text"><b>What You'll Need</b></h1>
            <div className="custom-body-font padding">
                <ul>
                    {pattern.tools.map( (tool, index) => (
                        <li key={index} dangerouslySetInnerHTML={{ __html: tool }}></li>
                    ))}
                </ul>
            </div>
            <h1 className="centered-text"><b>Instructions</b></h1>
            <div className="custom-body-font padding">
                {pattern.instructions.map( (instruction, index) => (
                    <p key={index} dangerouslySetInnerHTML={{ __html: instruction }}></p>
                ))}
            </div>

            <div>
                <h1 className="centered-text"><b>Comments</b></h1>
                <ul className="custom-body-font">
                    {comments.map( (comment, index) => (
                        <li key={index}>{comment}</li>
                    ))}
                </ul>
            </div>

            <Form onSubmit={handleCommentSubmit}>
                <Form.Group className="mb-3" controlId="formBasicComment">
                    <Form.Label className="custom-body-font">Add a comment</Form.Label>
                    <Form.Control type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                </Form.Group>

                <Button variant="primary" type="submit" className="btn-custom">
                    Comment
                </Button>
            </Form>
            
    </div>
    );
}

export default Pattern;