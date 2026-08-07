import { races } from '../data/races'

function RaceTable() {
  return (
    <section className="race-section">
      <h2>Últimas corridas</h2>

      <table>
        <thead>
          <tr>
            <th>Evento</th>
            <th>Pista</th>
            <th>Tempo</th>
            <th>Posição</th>
          </tr>
        </thead>

        <tbody>
          {races.map((race) => (
            <tr key={race.id}>
              <td>{race.event}</td>
              <td>{race.track}</td>
              <td>{race.time}</td>
              <td>{race.position}º</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default RaceTable