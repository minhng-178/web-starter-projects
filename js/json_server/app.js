var coursesApi = "http://localhost:3000/posts";

function start() {
  getCourses(renderCourses);

  handleCreateFrom();
}

start();

//Funtion

function getCourses(callback) {
  fetch(coursesApi)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data, callback) {
  var options = {
    method: "POST",
    body: JSON.stringify(data),
  };
  fetch(coursesApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}

function renderCourses(courses) {
  var listCourseBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (courses) {
    return `
            <li>
            <h4>${courses.title}</h4>
            <p>${courses.author}</p>
            <button onclick="">delete</button>
            </li>
        `;
  });
  listCourseBlock.innerHTML = htmls.join("");
}

function handleCreateFrom() {
  var createBtn = document.querySelector("#create");

  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var author = document.querySelector('input[name="author"]').value;

    var formData = {
      name: name,
      author: author,
    };
    createCourse(formData, function () {
      getCourses(renderCourses);
    });
  };
}

function btnRename(id) {
  var name = document.querySelector('input[name="name"]').value;
  var description = document.querySelector('input[name="description"]').value;
  //Dùng toán tử 3 Ngôi c=a>b?a:b c=a nếu a>b ngược lại c=b
  var data =
    name == "" && description == ""
      ? {}
      : description == ""
      ? { name: name }
      : name == ""
      ? { description: description }
      : {
          name: name,
          description: description,
        };
  var options = {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(link + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      getCourses(renderCourses);
    });
  // Reset input name & description
  document.querySelector('input[name="name"]').value = "";
  document.querySelector('input[name="description"]').value = ""``;
}
