import './App.css'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import StatCard from './components/StatCard'
import RaceTable from './components/RaceTable'

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />

        <section className="dashboard">
          <h1>Dashboard</h1>
          <p className="subtitle">
            Thunder Motorsport ⚡
          </p>

          <div className="stats">
            <StatCard
              title="Corridas"
              value="24"
              icon="🏁"
            />

            <StatCard
              title="Vitórias"
              value="12"
              icon="🏆"
            />

            <StatCard
              title="Melhor Tempo"
              value="4.32s"
              icon="⏱️"
            />

            <StatCard
              title="Status"
              value="Pronto"
              icon="🔧"
            />
          </div>

          <RaceTable />
        </section>
      </main>
    </div>
  )
}

export default App