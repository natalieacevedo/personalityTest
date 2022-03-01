import head from "../images/puzzle-head.png";

function Home({ populateQuestions }) {
  return (
    <main className="mainPage">
      <h1 className="main-title">
        Test: Are you and introvert or an extrovert
      </h1>
      <p>
        So do you consider yourself more of an introvert or an extrovert? Take
        this test, put together by <cite>psychoanalyst Natalie Acevedo</cite>
      </p>
      <img className="main-img" src={head} alt="headPuzzle" />
      <button className="mainButton" onClick={populateQuestions}>
        Find out !
      </button>
    </main>
  );
}

export default Home;
