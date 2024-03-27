import { useState } from 'react';
import './chat.scss';

function Chat() {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="img" />
                <span>Bill Alis</span>
                <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="img" />
                <span>Bill Alis</span>
                <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="img" />
                <span>Bill Alis</span>
                <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="img" />
                <span>Bill Alis</span>
                <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="img" />
                <span>Bill Alis</span>
                <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
        
            {chat &&
                <div className="chatBox">
                <div className="top">
                    <div className="user">
                        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D" alt="userimg" />
                        Bill Alis
                    </div>
                    <span onClick={() => setChat(null)} >X</span>
                </div>
                <div className="center">
                    <div className="chatMessage">
                        <p>Hello! Can I order your apartment today?</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Hello! Yes, you can</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Lorem, ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>Lorem, ipsum dolor sit amet</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage">
                        <p>Have a nice a day!</p>
                        <span>1 hour ago</span>
                    </div>
                    <div className="chatMessage own">
                        <p>And you the same!</p>
                        <span>1 hour ago</span>
                    </div>
                </div>
                <div className="bottom">
                    <textarea ></textarea>
                    <button>Send</button>
                </div>
            </div>}
        </div>
    )
}

export default Chat;