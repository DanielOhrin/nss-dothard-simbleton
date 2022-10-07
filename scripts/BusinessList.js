import { getBusiness } from "./database.js"

const businesses = getBusiness()

export const BusinessList = () => {
    let html = ``

    businesses.forEach(business => {
        html += `<div class="business">
            <h3>${business.companyName}</h3>
            <p>${business.addressFullStreet}<br>
            ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
            <hr>
        </div>`
    })

    return html
}

// document.querySelector(`#content`).addEventListener(
//     "keydown",
//     e => {
//         if (e.keyCode === 13) {
//             const parentHTMLElement = document.querySelector(`.foundBusinesses`)

//             const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(document.querySelector(`#companySearch`).value.toLowerCase()))

//             console.log(document.querySelector(`#companySearch`).value)
//             if (document.querySelector(`#companySearch`).value && foundBusiness) {
//                 parentHTMLElement.innerHTML = `<div class="foundBusiness">
//                 <h3>${foundBusiness.companyName}</h3>
//                 <p>${foundBusiness.addressFullStreet}<br>
//                 ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}</p>
//                 <hr>
//                 </div>`
//             } else {
//                 parentHTMLElement.innerHTML = ``
//             }
//         }
//     }
// )
/*
    On pressing enter in the input field, compare the business database (name) with what was typed in the input field.
    For the match found, change .foundBusinesses to display that business.
*/
