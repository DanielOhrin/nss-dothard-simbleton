import { getBusiness } from "./database.js"

const businesses = getBusiness()

export const NewYorkBusinesses = () => {
    let html = ``

    businesses.filter(business => business.addressStateCode === "NY").forEach(business => {
        html += `<div class="business">
        <h3>${business.companyName}</h3>
        <p>${business.addressFullStreet}<br>
        ${business.addressCity}, ${business.addressStateCode} ${business.addressZipCode}</p>
        <hr>
    </div>`
    })

    return html
}
