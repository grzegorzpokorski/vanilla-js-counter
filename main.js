const counters = document.querySelectorAll("[data-name=counter]");

const getAccuracy = (value) => {
  if (value.toString().includes(".")) {
    const numberOfDigitsAfterComma = value.toString().split(".")[1].length;
    return numberOfDigitsAfterComma;
  }
  return 0;
};

counters.forEach((counter) => {
  const handleAnimation = (counter) => {
    if (counter.dataset.counted == "true") return;

    counter.innerText = 0;

    const endValue = Number(counter.dataset.counterEnd);
    const duration = Number(counter.dataset.counterDuration);
    const delay = 100;
    const accuracy = Number(getAccuracy(endValue));
    const stepSize = Number(endValue / (duration / delay));
    let value = 0;

    const handleInterval = () => {
      value = Number(value) + Number(stepSize);

      console.log(stepSize);

      if (endValue > 0) {
        if (value > endValue) {
          clearInterval(interval);
          counter.innerText = endValue;
          return;
        }
      } else {
        if (value < endValue) {
          clearInterval(interval);
          counter.innerText = endValue;
          return;
        }
      }

      counter.innerText = value.toFixed(accuracy);
    };

    const interval = setInterval(handleInterval, delay);
  };

  const handleScroll = () => {
    const posiiton = counter.getBoundingClientRect();

    if (posiiton.top >= 0 && posiiton.bottom <= window.innerHeight) {
      handleAnimation(counter);
      window.removeEventListener("scroll", handleScroll, counter);
    }
  };

  window.addEventListener("scroll", handleScroll, counter);
});
