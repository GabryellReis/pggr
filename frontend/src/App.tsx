import './App.css'
import ShinyText from './components/shiny-text/ShinyText'
import TextPressure from './components/pressure/TextPressure'
import Particles from './components/particles/Particles'
import SpotlightCard from './components/card/card'
import { useState } from 'react'
import { FaChevronCircleDown, FaChevronCircleUp, FaCrown, FaLinkedin } from "react-icons/fa";

function App() {
  const [focused, setFocused] = useState("")

  return (

    <div className='bg-zinc-900 w-screen h-full'>
      {/* header */}
      <header className='bg-zinc-600 h-[8%] w-screen z-50  flex items-center p-4 fixed top-0'>
        <ul className='flex flex-row gap-6'>
          <a className='text-xl hover:cursor-pointer hover:text-2xl' href='#about'><ShinyText text='about' disabled={false} speed={3} className='custom-class' /></a>
          <a className='text-xl hover:cursor-pointer hover:text-2xl' href='#portfolio'><ShinyText text='portfolio' disabled={false} speed={3} className='custom-class' /></a>
          <a className='text-xl hover:cursor-pointer hover:text-2xl' href='#contact'><ShinyText text='contact us' disabled={false} speed={3} className='custom-class' /></a>

        </ul>
      </header>
      {/* corpo */}
      <main>
        {/* about */}
        <div id='about' className='flex h-[100vh] flex-col items-center'>
          <div style={{ width: '100vw', height: '10vh', position: 'relative', display: "flex" }}>
            <Particles particleCount={500} particleSpread={10} particleBaseSize={100} />
          </div>
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <TextPressure text='Gabryell Reis' />
          </div>
          <div className='text-white w-[90vw] p-4 rounded-xl min-h-[50vh] gap-2 bg-zinc-600 flex flex-row justify-center items-center'>
            <h2></h2>
          </div>
        </div>

        {/* portfolio */}
        <div id='portfolio' className='flex h-[100vh] flex-col items-center'>
          <div style={{ width: '100vw', height: '10vh', position: 'relative', display: "flex" }}>
            <Particles particleCount={500} particleSpread={10} particleBaseSize={100} />
          </div>
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <TextPressure text='Achievements' />
          </div>

          <div className='text-white w-[90vw] p-4 rounded-xl min-h-[50vh] gap-2 bg-zinc-600 flex flex-row justify-center items-center'>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className='w-1/3 min-h-[50%] flex flex-col'>
              <FaCrown color='FFD700' />
              <ShinyText text='ASPEN' className='text-2xl' />
              <hr />
              {
                focused == "1" ?
                  <div className='mb-10 transition-all'>
                    <h2>Texto sobre o aspen</h2>
                    <h2>Texto sobre o aspen</h2>
                    <h2>Texto sobre o aspen</h2>
                    <h2>Texto sobre o aspen</h2>
                    <h2>Texto sobre o aspen</h2>
                  </div>
                  : <></>
              }
              <div className='hover:cursor-pointer' onClick={() => {
                focused == "1" ? setFocused("") : setFocused("1")
              }}>
                {
                  focused ? <ShinyText text={<FaChevronCircleUp size={30} />} className='relative' /> : <ShinyText text={<FaChevronCircleDown size={30} />} className='relative' />
                }
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className='w-1/3 min-h-[50%] flex flex-col'>
              <FaCrown color='FFD700' />
              <ShinyText text='LDB' className='text-2xl' />
              <hr />
              {
                focused == "2" ?
                  <div className='mb-10 transition-all'>
                    <h2>Texto sobre o LDB</h2>
                    <h2>Texto sobre o LDB</h2>
                    <h2>Texto sobre o LDB</h2>
                    <h2>Texto sobre o LDB</h2>
                    <h2>Texto sobre o LDB</h2>
                  </div>
                  : <></>
              }
              <div className='hover:cursor-pointer' onClick={() => {
                focused == "2" ? setFocused("") : setFocused("2")
              }}>
                {
                  focused ? <ShinyText text={<FaChevronCircleUp size={30} />} className='relative' /> : <ShinyText text={<FaChevronCircleDown size={30} />} className='relative' />
                }
              </div>
            </SpotlightCard>
            <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className='w-1/3 min-h-[50%] flex flex-col'>
              <FaCrown color='FFD700' />
              <ShinyText text='Mentoring and Development' className='text-2xl' />
              <hr />
              {
                focused == "3" ?
                  <div className='mb-10 transition-all'>
                    <h2>Texto sobre o ?</h2>
                    <h2>Texto sobre o ?</h2>
                    <h2>Texto sobre o ?</h2>
                    <h2>Texto sobre o ?</h2>
                    <h2>Texto sobre o ?</h2>
                  </div>
                  : <></>
              }
              <div className='hover:cursor-pointer' onClick={() => {
                focused == "3" ? setFocused("") : setFocused("3")
              }}>
                {
                  focused ? <ShinyText text={<FaChevronCircleUp size={30} />} className='relative' /> : <ShinyText text={<FaChevronCircleDown size={30} />} className='relative' />
                }
              </div>
            </SpotlightCard>
          </div>

        </div>

        {/* contact */}
        <div id='contact' className='flex h-[100vh] flex-col items-center'>
          <div style={{ width: '100vw', height: '10vh', position: 'relative', display: "flex" }}>
            <Particles particleCount={500} particleSpread={10} particleBaseSize={100} />
          </div>
          <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
            <TextPressure text='Talk to me' />
          </div>


          <div className='text-white w-[90vw] p-4 rounded-xl h-[100vh] bg-zinc-600 flex justify-center items-start'>
              <FaLinkedin />
            <h2 className='relative -bottom-[95%]'>Send me a e-mail in: <strong className='text-sky-500'>gabryellreis32@gmail.com</strong></h2>
          </div>
        </div>
      </main>

      {/* footer */}
      <footer>
        <div style={{ width: '100vw', height: '100vh', position: 'relative', display: "flex" }}>
          <Particles particleCount={500} particleSpread={10} particleBaseSize={100} />
        </div>
      </footer>

    </div>
  )
}

export default App
