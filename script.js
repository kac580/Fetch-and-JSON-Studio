// TODO: add code here
window.addEventListener("load", function () {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        // console.log(response);
        let json = [];
        let index = 0;
        response.json().then(function (json) {

            // let name = json.firstName + ' ' + json.lastName;
            const div = document.getElementById("container");
            for (let index = 0; index < json.length; index++) {
                div.innerHTML += `
            <div class = "astronaut">
                <div class = "bio">
                    <h3> ${json[index].firstName + ' ' + json[index].lastName}</h3>
                    <ul>
                    <li> Hours in Space: ${json[index].hoursInSpace}</li>
                    <li> Active: ${json[index].active}</li>
                    <li> Skills: ${json[index].skills}</li>
                    </ul>
                </div>
                    <img class = "avatar" src = ${json[index].picture}>

            </div>
            `;
            };
        });

    });

});