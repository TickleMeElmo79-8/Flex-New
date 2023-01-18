document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Games";
  } else {
    document.title = "Flex | Come Back!"
  }
})