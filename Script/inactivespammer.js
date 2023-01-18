document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Spammer";
  } else {
    document.title = "Flex | Come Back!"
  }
})