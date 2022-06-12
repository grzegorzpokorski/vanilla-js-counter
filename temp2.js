var debounce_timer;
window.onscroll = function () {
  if (debounce_timer) {
    window.clearTimeout(debounce_timer);
  }
  debounce_timer = window.setTimeout(function () {
    // run your actual function here
    console.log("Fire");
  }, 100);
};
