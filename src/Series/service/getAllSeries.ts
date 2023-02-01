import { ISeries } from "..";
import AxiosSingleton from "../../singleton/AxiosSingleton";
import { v4 as uuidv4 } from 'uuid';

async function fetchData() {

    let vector: ISeries[] = [];
    const itemsBeingDisplayed = 4;

    const axios = new AxiosSingleton;
    vector = await axios.getInstance().get("http://localhost:9090/api/v1/series")
        .then(data => {
            data.data.length = 0;
            const registriesNumber = data.data.length;
            if (registriesNumber !== 0) {
                let remainder = itemsBeingDisplayed - (registriesNumber % itemsBeingDisplayed);

                vector.push(...data.data)
                createEmptyItems(vector, remainder);

                return vector
            }
            return createEmptyItems(vector, itemsBeingDisplayed);
        })
        .catch(error => {
            console.error(error)
            return createEmptyItems(vector, itemsBeingDisplayed);
        })

    return vector


}

function createEmptyItems(vector: ISeries[], limit: number) {
    for (let i = 0; i < limit; i++) {
        vector.push(
            {
                title: "",
                lastEpisode: "",
                nextEpisode: "",
                numberOfSeasons: "",
                registrationNumber: "" + uuidv4()
            }
        )

    }

    return vector;
}

export const getAllSeries = await fetchData();