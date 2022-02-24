function Home({ populateQuestions }) {
  return (
    <main>
      <h1 className="main-title">
        Test: Are you and introvert or an extrovert
      </h1>
      <p>
        So do you consider yourself more of an introvert or an extrovert? Take
        this test, put together by <cite>psychoanalyst Natalie Acevedo</cite>
      </p>
      <button onClick={populateQuestions}>Push me to find out!</button>
    </main>
  );
}

export default Home;
