document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | About";
  } else {
    document.title = "Flex | Come Back!"
  }
})