
window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
        response.json().then(function(responsejson){
            console.log(response);
            console.log(" reponsejson " + responsejson);
            let container  = document.getElementById('count');
            count.innerHTML += ` ${responsejson.length}`;
            for(let i = 0; i< responsejson.length; i++){
                responsejson.sort(function(a,b){
                    return (a.hoursInSpace < b.hoursInSpace)? 1 : -1
                });
                let container = document.getElementById("container");
                console.log(container);
                container.innerHTML += `
                    <div class="astronaut" >
                        <div class="bio">
                            <h3>${responsejson[i].firstName} ${responsejson[i].lastName} </h3>
                                <ul>
                                    <li>Hours in space: ${responsejson[i].hoursInSpace} </li>
                                    <li style="color:${responsejson[i].active ? 'green;' : 'red;'}">Active: ${responsejson[i].active}</li>
                                    <li>Skills: ${responsejson[i].skills}</li>
                                </ul>
                        </div>
                    <img class ="avatar" src=${responsejson[i].picture}>
                </div>  
                `;  
            }
        });
    });
});

