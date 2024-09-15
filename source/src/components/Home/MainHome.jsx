import categories from '@/assets/categories.json'
import { ImInfinite } from 'react-icons/im'
import { BiTimeFive } from 'react-icons/bi'
import { TbDeviceGamepad2 } from 'react-icons/tb'
import Image from 'next/image'
import PageFooter from '../PageFooter'
import playSound from '@/helpers/playSound'
import './globals.css';

export default function MainHome () {
  function handleTitleHover (e) {
    e.target.classList.add('jello-vertical')
    e.target.style.color = categories[Math.floor(Math.random() * categories.length)].color
    e.target.addEventListener('animationend', () => e.target.classList.remove('jello-vertical'))
  }

  const handleTitleLeave = (e) => (e.target.style.color = 'white')

  function handlePlay () {
    playSound('pop')
    document.getElementById('newGameDialog')?.showModal()
  }

  return (
    <main className='min-h-screen flex flex-col'>
      {/* Main Heading and Play Button */}
      <section className='flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-screen text-center text-white relative' style={{ backgroundImage: 'url("/bg-home.svg")' }}>
        <article className='relative z-10'>
          <h1 className='text-8xl font-medium w-full uppercase' translate='no'>
            {'QuizWhiz'.split('').map((letter, index) => (
              <span key={index} id={letter + index + 10} className='relative inline-block transition-all duration-300' onMouseEnter={handleTitleHover} onMouseLeave={handleTitleLeave}>
                {letter}
              </span>
            ))}
          </h1>
          <p className='mb-20'>
            Play Legislature Quiz!
          </p>
          <button onClick={handlePlay} id='play' className='btn-primary uppercase px-6 py-4 text-lg max-w-md w-full mx-auto mt-10'>
            Play
          </button>

          <button onClick={handlePlay} id='play' className='btn-primary uppercase px-6 py-4 text-lg max-w-md w-full mx-auto mt-10'>
            Exit
          </button>

        </article>
      </section>
      <PageFooter />
    </main>
  )
}
