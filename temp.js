const counters = document.querySelectorAll("[data-counter=true]");

counters.forEach((counter) => {
  if (counter.dataset.counted == "true") return;
  counter.innerText = 0;
  const end_value = Number(counter.dataset.counterEnd);
  const accuracy = counter.dataset.counterEnd.includes(".")
    ? counter.dataset.counterEnd.split(".")[1].length - 1
    : 0;
  const speed = counter.dataset.counterSpeed;

  const handleIncrease = (delay) => {
    const current_value = Number(counter.innerText);
    const step = parseFloat(
      (end_value / (speed / delay)).toPrecision(accuracy)
    );
    if (current_value + step > end_value) {
      counter.innerText = end_value;
      clearInterval(interval);
      return;
    }
    counter.innerText = current_value + parseFloat(step);
  };

  const interval = setInterval(handleIncrease, 50, 50);
});
