import { getPurchasingAgent } from "./database.js"

let agents = getPurchasingAgent()

export const AgentList = () => {
    let html = ``

    agents.forEach(agent => {
        html += `<div class="agent">
        <h3>${agent.nameFirst} ${agent.nameLast}</h3>
        <h4>${agent.companyName}</h4>
        <h4>${agent.phoneWork}</h4>
        <hr>
    </div>`
    })
    
    return html    
}

document.querySelector(`#content`).addEventListener(
    "keydown",
    e => {
        if (e.keyCode === 13) {
            const parentHTMLElement = document.querySelector(`.foundBusinesses`)
            let foundAgent

            if (agents.find(agent => agent.nameFirst.toLowerCase().includes(document.querySelector(`#companySearch`).value.toLowerCase()))) {
                foundAgent = agents.find(agent => agent.nameFirst.toLowerCase().includes(document.querySelector(`#companySearch`).value.toLowerCase()))

            } else if (agents.find(agent => agent.nameLast.toLowerCase().includes(document.querySelector(`#companySearch`).value.toLowerCase()))) {
                foundAgent = agents.find(agent => agent.nameLast.toLowerCase().includes(document.querySelector(`#companySearch`).value.toLowerCase()))
                
            } else {
                foundAgent = ``
            }

            console.log(document.querySelector(`#companySearch`).value)

            if (document.querySelector(`#companySearch`).value && foundAgent) {
                parentHTMLElement.innerHTML = `<div class="agent">
                <h3>${foundAgent.nameFirst} ${foundAgent.nameLast}</h3>
                <h4>${foundAgent.companyName}</h4>
                <h4>${foundAgent.phoneWork}</h4>
                <hr>
            </div>`
            } else {
                parentHTMLElement.innerHTML = ``
            }
        }
    }
)