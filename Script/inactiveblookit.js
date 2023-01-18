document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
  document.title = "Flex | Blookit Hacks";
  } else {
    document.title = "Flex | Come Back!"
  }
})