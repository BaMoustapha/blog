import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate(); 


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(blog),
        }).then(() => {
            console.log("Blog created");
            setIsPending(false)
            navigate('/');
        })
    }

    return (
        <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Blog Title: </label>
        <input
        type='text'
        value={title} 
        onChange={(e) => setTitle(e.target.value)}
        required />
        <label htmlFor='body'>Body: </label>
        <textarea 
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows='7' cols='30' required>
        </textarea>
        <label htmlFor='author'>Author: </label>
            <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            >
                <option value="mario">mario</option>
                <option value="yoshi">yoshi</option>
            </select>        
        { !isPending && <button type='submit'>Add Blog</button>}
        { isPending && <button type='submit'>Adding Blog...</button>}

        </form>
        </div>
    )
}

export default Create;
