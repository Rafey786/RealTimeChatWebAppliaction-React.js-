import React, { useState, useEffect } from 'react';
import './Index.css';
import img from './img.png';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:7000');

let name;
do {
    name = prompt('Enter your name? ');
} while (!name);

function Index() {

    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([])

    useEffect(() => {
        socket.on('receive_message', msg => {
            setChat([...chat, msg])
        })
        showmessageUp();
    })

    const sendMessage = async (e) => {
        e.preventDefault();
        let msg = {
            username: name,
            message: message
        }

        console.log(msg);
        await socket.emit('send_message', msg);
        showmessageUp();
        setMessage('');
    }

    let messagearea = document.getElementsByClassName('messagearea')
    function showmessageUp() {
        messagearea.scrollTop = messagearea.scrollHeight
    }

    return (
        <>
            <div className="container">
                <div className="inner-container">
                    <div className="logo-area">
                        <img src={img} alt="img" style={{ height: '40px', marginLeft: '10px' }} />
                        <h1>CHATCLONE</h1>
                    </div>

                    <div className="messagearea">
                        {
                            chat.map((msg, index) => {
                                return (
                                    <div key={index} className="individual-msg" id={msg.username === name ? "send_message" : "receive_message"}>
                                        <p><h4>{msg.username}</h4>{msg.message}</p>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <br />

                    <form onSubmit={sendMessage}>
                        <div className="text-area">
                            <input type="text" name="message" placeholder="Type message" autoComplete="off" value={message} id="textarea" onChange={(e) => { setMessage(e.target.value) }} required></input>
                            <button type='submit'>send</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Index
