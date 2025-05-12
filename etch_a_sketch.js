const button = document.getElementById("change");
createGrid(16)

button.addEventListener("click",()=>{

    let num = parseInt(prompt("Enter the number of pixels"));
    createGrid(num);

})

function createGrid(n){

    const container = document.getElementById("container");
    container.innerHTML = "";

    for(let i = 0; i < n; i++){

        for (let index = 0; index < n; index++) {
            const element = document.createElement("div");
            element.className = "pixel";
            element.style.flex = `0 0 ${100/n}%`

            element.addEventListener("mouseover", 

                (e) => {
                    e.target.style.backgroundColor = "red";
                }
            );

            container.appendChild(element);
            
        }
    }

}





