
function App() {
  const testData = [
    {
      "id":1,
      "english":"Hello!",
      "chinese":"你好!",
      "pinyin":"nǐhǎo!"
    },
    {
      "id":2,
      "english":"You",
      "chinese":"你",
      "pinyin":"nǐ"
    },
    {
      "id": 3,
      "english":"Good",
      "chinese":"好",
      "pinyin":"hǎo"
    },
    {
      "id": 4,
      "english":"Good Bye!",
      "chinese":"再见!",
      "pinyin":"zàijiàn!"
    }
  ].map( ( {id, english, pinyin, chinese} ) => {
    return <div key={id} className="LessonContent">
      <p><b>English:</b> {english}</p>
      <p><b>Pinyin: </b>{pinyin}</p>
      <p><b>Chinese:</b> {chinese}</p>
    </div>
});
  return (
    <div className="container">
      <header className="header">Learn Chinese!</header>
      {testData}
      <footer>Copyright 2021</footer>
    </div>
  );
}

export default App;
