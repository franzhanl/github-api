import { baseURL } from "/src/scripts/variables.js";

async function getEvents(userName){
    let eventsData = await fetch(`${baseURL}/${userName}/events?per_page=10`)
    return eventsData.json()
}

export { getEvents }