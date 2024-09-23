// src/components/Search.js
import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState({ students: [], alumni: [], jobs: [] });

    const handleSearch = async () => {
        const res = await axios.get(`/api/search?q=${query}`);
        setResults(res.data);
    };

    return (
        <div className="search-container">
            <div className="search-input-container">
                <input 
                    type="text" 
                    className="search-input"
                    value={query} 
                    onChange={e => setQuery(e.target.value)} 
                    placeholder="Search..." 
                />
                <button className="search-button" onClick={handleSearch}>Search</button>
            </div>
            <div className="search-results-container">
                <div className="results-section">
                    <h2>Students</h2>
                    <ul className="result-list">
                        {results.students.map(student => (
                            <li key={student._id} className="result-item">
                                <p>{student.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="results-section">
                    <h2>Alumni</h2>
                    <ul className="result-list">
                        {results.alumni.map(alumnus => (
                            <li key={alumnus._id} className="result-item">
                                <p>{alumnus.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="results-section">
                    <h2>Jobs</h2>
                    <ul className="result-list">
                        {results.jobs.map(job => (
                            <li key={job._id} className="result-item">
                                <p>{job.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Search;
