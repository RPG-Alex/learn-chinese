import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
function Vocab(){
    const {id} = useParams() 
    const url = 'http://localhost/PWA-tutorial-training/learn-chinese/backend/index.php?lesson=flash';
    const [vocab, setVocab] = useState(null);
    useEffect(() => {
        axios.get(url).then(response =>{
            setVocab(response.data)
        });
    }, [url])
    
    if(vocab){
        return (
            <div>
                {
                    vocab.filter(
                        single => single.vid === id
                    ).map(single => <div key={single.id}>
                        <li>{single.chinese}</li>
                        <li>{single.pinyin}</li>
                        <li>{single.english}</li>
                    </div>
                        )
                }
            </div>
        )
    }

    return (
        <div>
            No value
        </div>
    )
}

export default Vocab