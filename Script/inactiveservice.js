document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Service";
  } else {
    document.title = "Flex | Come Back!"
  }
})