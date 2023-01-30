export interface ISeries {
    title: string;
    lastEpisode: string;
    nextEpisode: string;
    numberOfSeasons: number | string;
    registrationNumber: string;
}

interface Data {
    data: ISeries
}


import { Card } from 'react-bootstrap';

import image from "../images/gameofthrones.jpg";

export function Series(props: Data) {
    return (
        <Card className="singular-card">

            <Card.Body className='card-body-flex'>
                <h2 className={props.data.title != "" ? "h2-date" : "h2-date-empty"}>Data: {props.data.nextEpisode}</h2>
                <Card.Img className={props.data.title != "" ? "card-image" : "card-image-empty"} src={image} />
                <Card.Footer className={props.data.title != "" ? "singular-card-footer" : "singular-card-footer-empty"}>
                    {props.data.title ? props.data.title : "™"}
                </Card.Footer>
            </Card.Body>


        </Card>
    )
}