import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { Link } from 'react-router-dom'

function AllVocab(){
    const url = 'http://localhost/PWA-tutorial-training/learn-chinese/backend/index.php?lesson=flash';
    const [allVocab, setAllVocab] = useState(null);
    useEffect(() => {
        axios.get(url).then(response =>{
            setAllVocab(response.data)
        });
    }, [url]);



    const [isShow, setIsShow] = React.useState(false);
    
    const handleClick = () => {
        setIsShow(!isShow);  
        
    }

    if(allVocab){
        return (
            <div>
                <Link to="/home/">
                    <button className="App-header">Home</button>
                </Link>
                {
                    allVocab.map(vocab => (
                    <div key={vocab.vid} className={"id"+vocab.vid}>
                    <button className="LessonContent" value={"id"+vocab.vid}  onClick={handleClick}>
                    {vocab.chinese}
                     {isShow ? <div>
                                Pinyin: {vocab.pinyin}
                            <br></br>
                            English: {vocab.english}
                            </div> : null}
                    </button>    
        </div>
    ))
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

export default AllVocab