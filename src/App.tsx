import { Card } from 'react-bootstrap'

import { useEffect, useState } from 'react';

import "./app.css";

import { getAllSeries } from './Series/service/getAllSeries';

import { ISeries, Series } from './Series';

function App() {

  const [series, setSeries] = useState<ISeries[]>([]);

  useEffect(() => {
    setSeries(getAllSeries);
  }, []
  )


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
