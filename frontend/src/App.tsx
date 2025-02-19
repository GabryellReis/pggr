import './App.css'
import ShinyText from './components/shiny-text/ShinyText'
import TextPressure from './components/pressure/TextPressure'
import Particles from './components/particles/Particles'

function App() {
  return (

    <div className='bg-zinc-900 w-screen h-full'>
      {/* header */}
      <header className='bg-zinc-600 h-[8%] opacity-45 flex items-center p-4'>
        <ul className='flex flex-row gap-6'>
          <li className='text-xl hover:cursor-pointer hover:text-2xl transition-all'><ShinyText text='about' disabled={false} speed={3} className='custom-class' /></li>
          <li className='text-xl hover:cursor-pointer hover:text-2xl transition-all'><ShinyText text='portfolio' disabled={false} speed={3} className='custom-class' /></li>
          <li className='text-xl hover:cursor-pointer hover:text-2xl transition-all'><ShinyText text='contact us' disabled={false} speed={3} className='custom-class' /></li>

        </ul>
      </header>
      {/* corpo */}
      <main>
        <div>
          <div style={{ width: '100vw', height: '0px', position: 'relative', display: "flex" }}>
            <Particles particleCount={500} particleSpread={10} particleBaseSize={900} />
          </div>
          {/* portifolio */}
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <TextPressure text='Gabryell Reis' />
          </div>
        </div>

      </main>

    </div>
  )
}

export default App
