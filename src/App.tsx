import { Card } from 'react-bootstrap'
import axios from "axios";

import { useEffect, useState } from 'react';

import "./app.css";

import { ISeries, Series } from './Series';

function App() {

  const [series, setSeries] = useState<ISeries[]>([]);

  useEffect(() => {
    fetchData()
  }, []
  )

  const fetchData = async () => {
    await axios.get("http://localhost:9090/api/v1/series")
      .then(data => {
        let remainder = 4 - (data.data.length % 4);
        console.table(remainder, data.data.length)
        let vector: ISeries[] = [];
        vector.push(...data.data)
        for (let i = 0; i < remainder; i++) {
          vector.push(
            {
              title: "",
              lastEpisode: "",
              nextEpisode: "",
              numberOfSeasons: "",
              registrationNumber: "" + i
            }
          )

        }
        setSeries(vector)
        console.log(vector)
        // setSeries([...series, ...vector])
      })
      .catch(error => console.error(error))
  }

  return (
    <div className="app">



      <div className='aside'>
      </div>

      <main>
        <header className='header'>
          Corporação Capsula // Séries
        </header>
        <Card className='classe-principal'>

          <Card.Title className='title'>
            Essa semana
          </Card.Title>

          <Card.Body className="cards">
            {
              series.map(element => {
                return <Series key={element.registrationNumber} data={element} />
              })
            }
          </Card.Body>

          <Card.Title className="title">
            Próximos Lançamentos
          </Card.Title>
          <Card.Body className="cards" >
            {
              series.map(element => {
                return <Series key={element.registrationNumber} data={element} />
              })
            }
          </Card.Body>

        </Card>
      </main>

    </div>
  )
}

export default App
