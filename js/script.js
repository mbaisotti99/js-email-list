
const apiTable = document.querySelector("#apiCall")

const btnGenerate = document.querySelector("#generate")



for (let i = 0; i<10; i++){
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
        apiTable.innerHTML += `<div class="col-6" style="border:1px solid black; border-radius:5px">${resp.data.response}</div>`
    })  
}

btnGenerate.addEventListener("click", function () {
    apiTable.innerHTML = ""
    for (let i = 0; i<10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((resp) =>{
            apiTable.innerHTML += `<div class="col-6" style="border:1px solid black; border-radius:5px">${resp.data.response}</div>`
        })  
    }
})