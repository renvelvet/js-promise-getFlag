let endpoint = "https://restcountries.eu/rest/v2/all";
let options = {
  method: "GET",
  //   headers: {
  //     "Content-type": "application/json",
  //   },
};

let ul = document.querySelector("div ul");

fetch(endpoint, options)
  .then((response) => response.json())
  .then((results) => {
    console.log(results);
    results.forEach((result, index) => {
      const li = document.createElement("li");
      const image = document.createElement("img");
      const name = document.createTextNode(`${index + 1}. ${result.name}`);
      //   result.name
      image.setAttribute("src", result.flag);
      image.setAttribute("alt", `${name}`);

      li.appendChild(name);
      li.appendChild(image);

      ul.appendChild(li);
    });
  })
  .catch((error) => console.log(error));

// async function getFlag() {
//   try {
//     let response = await fetch(endpoint, options);
//     let results = await response.json();
//     console.log(results);

//     results.forEach((result, index) => {
//       const li = document.createElement("li");
//       const image = document.createElement("img");
//       const name = document.createTextNode(`${index + 1}. ${result.name}`);
//       //   result.name
//       image.setAttribute("src", result.flag);
//       image.setAttribute("alt", `${name}`);

//       li.appendChild(name);
//       li.appendChild(image);

//       ul.appendChild(li);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// getFlag();
