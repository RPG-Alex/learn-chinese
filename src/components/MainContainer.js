import React, {useState} from 'react'

const [data,setData]=useState([]);
const getData=()=>{
    fetch('http://localhost/PWA-tutorial-training/learn-chinese/backend/index.php?lesson=flash'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])


class MainContainer extends React.Component {
    render() {    
    return (
            <div className="container">
                <header className="header">Learn Chinese!</header>
                    <div>
                    {
       data && data.length>0 && data.map((item)=><p>{item.about}</p>)
     }
                        <button className="LessonContent">
                            FlashCards
                        </button>
                    </div>
                    <div>
                    <button className="LessonContent">
                        Introduction
                    </button>
                    </div>
                    <div>
                    <button className="LessonContent">
                        Lesson 1
                    </button>
                    </div>
                <footer>Copyright 2021</footer>
            </div>
        )
    }
}
export default MainContainer