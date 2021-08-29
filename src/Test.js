import React from 'react';

function Test() {
    function componentDidMount() {
        var url = "localhost/PWA-tutorial-training/learn-chinese/backend/index.php?lesson=flash";
        fetch(url)
          .then(response => {
            return response.json();
          })
          .then(d => {
            this.setState({ clouds: d });
            console.log("state", this.state.vocab)
          })
          .catch(error => console.log(error))
      }
      
        return (
            {componentDidMount}
          <div>
            {
              this.state.vocab.map(((word, index) =>
                <th key={`${word.vid}${index}`}>
                  <div>
                    <div>
                      {vocab.english}
                      
                    </div>
                  </div>
                </th>
              ))
            }
          </div>
        );
      }

export default Test;