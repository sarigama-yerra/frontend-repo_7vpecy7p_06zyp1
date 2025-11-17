import Header from './components/Header'
import Hero from './components/Hero'
import Feed from './components/Feed'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Hero />
        <Feed />
      </main>
    </div>
  )
}

export default App
