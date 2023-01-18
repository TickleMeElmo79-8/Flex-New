document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Home";
  } else {
    document.title = "Flex | Come Back!"
  }
})