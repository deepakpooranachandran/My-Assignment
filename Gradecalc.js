let mark = 9.5

function grade() {
  switch (true) {
    case mark >= 9:
      console.log("Grade-A")
      break
    case mark >= 7 && mark < 9:
      console.log("Grade-B")
      break
    case mark >= 5 && mark < 7:
      console.log("Grade-C")
      break
    case mark >= 3 && mark < 5:
      console.log("Grade-D")
      break
    default:
      console.log("Fail")
      break
  }
}
grade()
