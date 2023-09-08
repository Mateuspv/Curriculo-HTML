divExperiencias = document.querySelector("#experiencies")

experiencias = [
    {
        "empresa" : "empresa Y",
        "cargo" : "",
        "descricao-cargo" : "",

    }
]

divExperience = document.createElement("div")
divExperience.setAttribute("class", "experience")

empresa = document.createElement("h3")
empresa.setAttribute("class", "empresa")
empresa.innerText = experiencias[0].empresa

divExperience.appendChild(empresa)
divExperiencias.appendChild(divExperience)