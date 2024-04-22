// BookForm.js

import React, { useState } from "react";
import './style.css';

const BookForm = ({ addRecommendation }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [gender, setGender] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        addRecommendation({ title, author, gender, description });

        setTitle('');
        setAuthor('');
        setGender('');
        setDescription('');
    };
    
    return (
        <form onSubmit={handleSubmit}>
             {/* Input para o título */}
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </label>
            {/* Input para o título */}
            <label>
                Author:
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </label>
             {/* Dropdown para o gênero */}
            <label>
                Gender:
                <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="">Select Gender</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Mystery-Thriller">Mystery/Thriller</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction/Fantasy">Science Fiction/Fantasy</option>
                </select>
            </label>
            {/* Textarea para a descrição */}
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </label>
            {/* Botão de submissão */}
            <button type="submit">Submit</button>        
        </form>
    );
};

export default BookForm;
