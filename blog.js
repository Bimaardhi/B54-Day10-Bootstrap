var dataProject = [];

function addProject(event) {
    event.preventDefault();

    let nama = document.getElementById("name").value;
    let start = document.getElementById("email").value;
    let end = document.getElementById("phone").value;
    let message = document.getElementById("text-area").value;
    let upload = document.getElementById("formFile").files[0];
    let uploadURL = URL.createObjectURL(upload);


    if (nama === "") {
        return alert("Please entered your project name!")
    } else if (start === "") {
        return alert("Please entered your start date!")
    } else if (end === "") {
        return alert("Please entered your end date!")
    } else if (message === "") {
        return alert("Please entered description!")
    } else if (uploadURL === "") {
        return alert("Please upload your image!")
    }


    dataProject.push({
        nama: nama,
        start: start,
        end: end,
        message: message,
        upload: uploadURL,
    })

    console.log(dataProject);

    newData()
}

function newData() {
    document.getElementById("card").innerHTML = ""

    for (let i = 0; i < dataProject.length; i++) {
        const project = dataProject[i]


        document.getElementById("card").innerHTML += `
        <div class="card" style="width: 18rem; margin: auto;">
        <img src="${project.upload}" class="card-img-top" alt="dumbways">
        <div class="card-body">
          <h5 class="card-title">${project.nama}</h5>
          <p class="card-text">${project.message}</p>
          <a href="#" class="btn btn-primary">edit</a>
        </div>
      </div>
    
    `
    }

}