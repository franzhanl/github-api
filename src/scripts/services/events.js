import { baseURL, eventsQuantity } from "/src/scripts/variables.js";

async function getEvents(userName){
    let eventsData = await fetch(`${baseURL}/${userName}/events?per_page=${eventsQuantity}`)
    return eventsData.json()
}

export { getEvents }