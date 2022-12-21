//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i + "FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log(i + "Fizz");
//   } else if (i % 5 === 0) {
//     console.log(i + "Buzz");
//   }
// }

for (let i = 1; i < 101; i++) {
  console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "fizzBuzz" + " box";
    div.append("FizzBuzz");
    main.append(div);
  } else if (i % 3 === 0) {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "fizz" + " box";
    div.append("fizz");
    main.append(div);
  } else if (i % 5 === 0) {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "buzz" + " box";
    div.append("buzz");
    main.append(div);
  } else {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "box";
    div.append(i);
    main.append(div);
  }
}
