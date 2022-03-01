function Results({ results, goBackHome }) {
  let result;

  function mostOcurrent(number) {
    let numberOcurrences = results.filter((el) => el === number);

    return numberOcurrences.length;
  }

  const megaShy = mostOcurrent(0);
  const littleShy = mostOcurrent(1);
  const perfect = mostOcurrent(2);
  const veryConfident = mostOcurrent(3);

  console.log(megaShy);
  console.log(littleShy);

  const maxNumber = Math.max(megaShy, littleShy, perfect, veryConfident);

  if (maxNumber === megaShy) {
    result = (
      <>
        <h1>"Please stop being so shy!"</h1>
        <p>
          {" "}
          "Shyness holds you back, Shyness is nice and shyness can stop you from
          doing all the things in life you'd like to 3% of the population says
          they are very shy, and you are one of them.Lorem ipsum dolor sitamet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          nonproident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.";
        </p>
      </>
    );
  } else if (maxNumber === littleShy) {
    result = (
      <>
        <h1>"You are not too bad!"</h1>
        <p>
          {" "}
          "You need to let go and believe in yourself a little bit more, Shyness
          is nice and shyness can stop you from doing all the things in life
          you'd like to 3% of the population says they are very shy, and you are
          one of them.Lorem ipsum dolor sitamet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.";
        </p>
      </>
    );
  } else if (maxNumber === perfect) {
    result = (
      <>
        <h1>"I wish to be as confident as you are!"</h1>
        <p>
          {" "}
          "Excellent, you believe in yourself without being arrogant believe in
          yourself a little bit more, Shyness is nice and shyness can stop you
          doing all the things in life you'd like to 3% of the population says
          they are very shy, and you are one of them.Lorem ipsum dolor sitamet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
          nonproident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.";
        </p>
      </>
    );
  } else if (maxNumber === veryConfident) {
    result = (
      <>
        <h1>"You are a little too confident!"</h1>
        <p>
          {" "}
          "you believe in yourself, excellent, but sometimes you are a little
          arrogant withoutin yourself a little bit more, Shyness is nice and
          shyness can stop you from doing all the things in life you'd like to
          3% of the population says they are very shy, and you are one of
          them.Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa
          qui officia deserunt mollit anim id est laborum. blalalalalalall";
        </p>
      </>
    );
  }

  return (
    <div className="resultContainer">
      {result}

      <button className="lastButton" onClick={goBackHome}>
        Take test again
      </button>
    </div>
  );
}

export default Results;
