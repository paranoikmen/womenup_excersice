import React, {useState} from "react";
import {useCollectionData} from "react-firebase-hooks/firestore"
import firebase from "firebase";
import "./App.css"

/**
 * Component for showing chat message and send message
 *
 * @component App
 */

function App({firestore}) {
    const [text, setText] = useState('')
    const [messages, loading] = useCollectionData(
        firestore.collection('messages').orderBy('createdAt')
    )

    const handleMessage = async () => {
        await firestore.collection('messages').add({
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            text: text
        })
        setText('')
    }

    if (loading) {
        return <div>Загрузка...</div>
    }


    return (
        <div style={{textAlign: "center", marginTop: "50px", }}>
            <div>
                <input type="text" placeholder={"Text message..."} onChange={event => setText(event.target.value)} value={text}/>
                <button onClick={handleMessage}>Send</button>
            </div>
            <h2>Messages:</h2>
            <ul style={{display: "inline-block"}}>
                {
                    messages.map(message =>
                        <li className={"container"} key={message.createdAt}>
                            {message.text}
                        </li>)
                }
            </ul>

        </div>
    );
}

export default App;
