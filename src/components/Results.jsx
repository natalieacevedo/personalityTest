function Results({ results }) {
  console.log(results);

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

  console.log(maxNumber);

  if (maxNumber === megaShy) {
    return (
      <div>
        <h1>Please stop being so shy!</h1>
        <p>
          Shyness holds you back, Shyness is nice and shyness can stop you from
          doing all the things in life you'd like to 3% of the population says
          they are very shy, and you are one of them. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    );
  } else if (maxNumber === littleShy) {
    return (
      <div>
        <h1>You are not too bad</h1>
        <p>
          {" "}
          You need to let go a little more! Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    );
  } else if (maxNumber === perfect) {
    return (
      <div>
        <h1>I wish I was like you!</h1>
        <p>
          {" "}
          You need to let go a little more! Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    );
  } else if (maxNumber === veryConfident) {
    return (
      <div>
        <h1>Excellent level of confidence!</h1>
        <p>
          {" "}
          People loves you and you love them Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>You are not either shy or outgoing</h1>
        <p>
          You are on the fence them Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}

export default Results;
