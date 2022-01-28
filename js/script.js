//Question 1
const cat = {
  complain: console.log("Meow!"),
};

//Question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3
heading.style.fontSize = "2em";

//Question 4
heading.classList.add("subheading");

//Question 5
const paragraphs = document.querySelectorAll("p");

for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = "red";
}

//Question 6
const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.background = "yellow";

//Question 7
const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

function printList(list) {
  for (let i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

printList(cats);

//Question 8
function createCats(cats) {
  let html = "";

  for (let i = 0; i < cats.length; i++) {
    let ageCat = "Unknown";

    if (cats[i].age) {
      ageCat = cats[i].age;
    }
    html += `<div>
            <h5>${cats[i].name}</h5>
            <p>Age: ${ageCat}</p>
            </div>`;
  }
  return html;
}

const newHTML = createCats(cats);

const containerCats = document.querySelector(".cat-container");

containerCats.innerHTML = newHTML;
