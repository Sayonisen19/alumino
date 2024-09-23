// src/components/Chat.js
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:5000');

const Chat = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('receiveMessage', (msg) => {
            setMessages(prevMessages => [...prevMessages, msg]);
        });

        return () => {
            socket.off('receiveMessage');
        };
    }, []);

    const sendMessage = () => {
        socket.emit('sendMessage', message);
        setMessage('');
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                <h1>Chat</h1>
            </div>
            <div className="chat-messages">
                <ul className="message-list">
                    {messages.map((msg, index) => (
                        <li key={index} className="message-item">
                            {msg}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat-input-container">
                <input 
                    type="text" 
                    value={message} 
                    onChange={e => setMessage(e.target.value)} 
                    className="chat-input"
                    placeholder="Type your message..."
                />
                <button onClick={sendMessage} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default Chat;
