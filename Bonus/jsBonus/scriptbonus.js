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
    div.append("Fizz");
    main.append(div);
  } else if (i % 5 === 0) {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "buzz" + " box";
    div.append("Buzz");
    main.append(div);
  } else {
    const main = document.querySelector("main.flex");
    const div = document.createElement("div");
    div.className = "box";
    div.append(i);
    main.append(div);
  }
}
