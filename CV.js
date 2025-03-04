alert("Hello! my name is Joice Principio and this is my curriculum vitae")

const jsonURL = "https://joiceprincipio.github.io/Courses/Courses.json";

fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    let courselist = document.getElementById("course-list");

    if (data.courses && Array.isArray(data.courses)) {
      data.courses.forEach((course) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${course.year_level} year_${course.sem} sem_${course.code} = ${course.description} == ${course.credit} <br> <br>`;
        listItem.classList.add("course-item");
        courselist.appendChild(listItem);
      });
    } else {
      console.error("Expected 'courses' array but got:", data);
    }
  })
  .catch((error) => console.error("Error fetching JSON:", error));

function searchCourses() {
  let input = document.getElementById("searchbar").value.toLowerCase();
  let items = document.querySelectorAll(".course-item");

  items.forEach((item) => {
    if (item.innerHTML.toLowerCase().includes(input)) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}
