let browser = "Chrome"
function launchBrowser() {
  if (browser === "Chrome") {
    console.log("The Browser launched is:" + browser)
  } else {
    console.log("The Browser is not Chrome: " + browser)
  }
}
launchBrowser()
let typeOfTest = "smoke"
function runtests() {
  switch (typeOfTest) {
    case "smoke":
      console.log("The Type of Test is:" + typeOfTest)
      break
    case "sanity":
      console.log("The Type of Test is:" + typeOfTest)
      break
    case "regression":
      console.log("The Type of Test is:" + typeOfTest)
      break
    case "default":
      console.log("The Type of Test is: smoke")
      break
  }
}
runtests()
