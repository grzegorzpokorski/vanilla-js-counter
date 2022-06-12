const counters = document.querySelectorAll("[data-name=counter]");

const getAccuracy = (value) => {
  if (value.toString().includes(".")) {
    const numberOfDigitsAfterComma = value.toString().split(".")[1].length;
    return numberOfDigitsAfterComma;
  }
  return 1;
};

counters.forEach((counter) => {
  const handleAnimation = (counter) => {
    if (counter.dataset.counted == "true") return;

    counter.innerText = 0;

    const endValue = Number(counter.dataset.counterEnd);
    const duration = Number(counter.dataset.counterDuration);
    const delay = 100;
    const accuracy = Number(getAccuracy(endValue) - 1);
    const stepSize = Number(endValue / (duration / delay)).toFixed(accuracy);
    let value = 0;

    const handleInterval = () => {
      value = Number(value) + Number(stepSize);
      if (value > endValue) {
        clearInterval(interval);
        counter.innerText = endValue;
        return;
      }
      counter.innerText = value.toFixed(accuracy);
    };

    const interval = setInterval(handleInterval, delay);
  };

  const handleScroll = () => {
    if (window.innerHeight - counter.getBoundingClientRect().top > 0) {
      if (counter.dataset.counted == "false") {
        handleAnimation(counter);
        window.removeEventListener("scroll", handleScroll, counter);
        counter.dataset.counted = "true";
      }
    }
  };

  window.addEventListener("scroll", handleScroll, counter);
});
