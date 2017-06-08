// get the times from the DOM
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// change the times from strings and turn them into seconds
const seconds = timeNodes.map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds;
  // take the seconds and make hours
  const hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft % 3600;

  // take the leftover seconds and make minutes
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(hours, mins, secondsLeft);
