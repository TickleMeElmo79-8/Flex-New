document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Contact";
  } else {
    document.title = "Flex | Come Back!"
  }
})