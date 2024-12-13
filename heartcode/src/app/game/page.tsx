"use client"
import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import useInterval from '@use-it/interval'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import type { AppProps } from 'next/app'

// Import initial FontAwesome Styles: https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-476276516
import '@fortawesome/fontawesome-svg-core/styles.css'

// Import FontAwesome Icons
import { config, library } from '@fortawesome/fontawesome-svg-core'
import {
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(
  faStar,
  faArrowUp,
  faArrowRight,
  faArrowDown,
  faArrowLeft,
  faTrophy,
  faGithub
)
config.autoAddCss = false

type Apple = {
  x: number
  y: number
}

type Velocity = {
  dx: number
  dy: number
}

type SnakePart = {
  x: number
  y: number
}

type Snake = {
  head: { x: number; y: number }
  trail: SnakePart[]
}

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasWidth = 1000
  const canvasHeight = 550
  const canvasGridSize = 40

  const minGameSpeed = 10
  const maxGameSpeed = 15

  const [gameDelay, setGameDelay] = useState<number>(1000 / minGameSpeed)
  const [countDown, setCountDown] = useState<number>(4)
  const [running, setRunning] = useState(false)
  const [isLost, setIsLost] = useState(false)
  const [highscore, setHighscore] = useState(0)
  const [newHighscore, setNewHighscore] = useState(false)
  const [score, setScore] = useState(0)
  const [snake, setSnake] = useState<Snake>({
    head: { x: 12, y: 9 },
    trail: [],
  })
  const [apple, setApple] = useState<Apple>({ x: -1, y: -1 })
  const [velocity, setVelocity] = useState<Velocity>({ dx: 0, dy: 0 })
  const [previousVelocity, setPreviousVelocity] = useState<Velocity>({
    dx: 0,
    dy: 0,
  })

  const clearCanvas = (ctx: CanvasRenderingContext2D) =>
    ctx.clearRect(-1, -1, canvasWidth + 2, canvasHeight + 2)

  const generateApplePosition = (): Apple => {
    const x = Math.floor(Math.random() * (canvasWidth / canvasGridSize))
    const y = Math.floor(Math.random() * (canvasHeight / canvasGridSize))
    if (
      (snake.head.x === x && snake.head.y === y) ||
      snake.trail.some((snakePart) => snakePart.x === x && snakePart.y === y)
    ) {
      return generateApplePosition()
    }
    return { x, y }
  }

  const startGame = () => {
    setGameDelay(1000 / minGameSpeed)
    setIsLost(false)
    setScore(0)
    setSnake({
      head: { x: 12, y: 9 },
      trail: [],
    })
    setApple(generateApplePosition())
    setVelocity({ dx: 0, dy: -1 })
    setRunning(true)
    setNewHighscore(false)
    setCountDown(3)
    const music = document.getElementById("music") as HTMLAudioElement | null
    music?.play()
  }

  const gameOver = () => {
    if (score > highscore) {
      setHighscore(score)
      localStorage.setItem('highscore', score.toString())
      setNewHighscore(true)
    }
    setIsLost(true)
    setRunning(false)
    setVelocity({ dx: 0, dy: 0 })
    setCountDown(4)
    const music = document.getElementById("music") as HTMLAudioElement | null
    music?.load()
  }

  const fillRect = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number
  ) => {
    ctx.fillRect(x, y, w, h)
  }

  const drawSnake = (ctx: CanvasRenderingContext2D) => {
    const img = document.createElement("img")
    img.src = "policeman.png"
    const pat = ctx.createPattern(img, "repeat")
    if (pat) ctx.fillStyle = pat

    fillRect(
      ctx,
      snake.head.x * canvasGridSize,
      snake.head.y * canvasGridSize,
      canvasGridSize,
      canvasGridSize
    )

    snake.trail.forEach((snakePart) => {
      fillRect(
        ctx,
        snakePart.x * canvasGridSize,
        snakePart.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
    })
  }

  const drawApple = (ctx: CanvasRenderingContext2D) => {
    const img = document.createElement("img")
    img.src = "pill.png"
    const pat = ctx.createPattern(img, "repeat")
    if (pat) ctx.fillStyle = pat

    if (
      apple &&
      typeof apple.x !== 'undefined' &&
      typeof apple.y !== 'undefined'
    ) {
      fillRect(
        ctx,
        apple.x * canvasGridSize,
        apple.y * canvasGridSize,
        canvasGridSize,
        canvasGridSize
      )
    }
  }

  const updateSnake = () => {
    const nextHeadPosition = {
      x: snake.head.x + velocity.dx,
      y: snake.head.y + velocity.dy,
    }
    if (
      nextHeadPosition.x < 0 ||
      nextHeadPosition.y < 0 ||
      nextHeadPosition.x >= canvasWidth / canvasGridSize ||
      nextHeadPosition.y >= canvasHeight / canvasGridSize
    ) {
      gameOver()
      return
    }

    if (nextHeadPosition.x === apple.x && nextHeadPosition.y === apple.y) {
      setScore((prevScore) => prevScore + 1)
      setApple(generateApplePosition())
    }

    const updatedSnakeTrail = [...snake.trail, { ...snake.head }]
    while (updatedSnakeTrail.length > score + 2) updatedSnakeTrail.shift()
    if (
      updatedSnakeTrail.some(
        (snakePart) =>
          snakePart.x === nextHeadPosition.x &&
          snakePart.y === nextHeadPosition.y
      )
    ) {
      gameOver()
      return
    }

    setPreviousVelocity({ ...velocity })
    setSnake({
      head: { ...nextHeadPosition },
      trail: [...updatedSnakeTrail],
    })
  }

  useEffect(() => {
    const canvas = canvasRef?.current
    const ctx = canvas?.getContext('2d')

    if (ctx && !isLost) {
      clearCanvas(ctx)
      drawApple(ctx)
      drawSnake(ctx)
    }
  }, [snake])

 useInterval(
    () => {
      if (!isLost) {
        updateSnake()
      }
    },
    running && countDown === 0 ? gameDelay : null
  )
  // Countdown Interval
  useInterval(
    () => {
      setCountDown((prevCountDown) => prevCountDown - 1)
    },
    countDown > 0 && countDown < 4 ? 800 : null
  )

  useEffect(() => {
    setHighscore(
      localStorage.getItem('highscore')
        ? parseInt(localStorage.getItem('highscore')!, 10)
        : 0
    )
  }, [])

  useEffect(() => {
    if (score > minGameSpeed && score <= maxGameSpeed) {
      setGameDelay(1000 / score)
    }
  }, [score])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        [
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'w',
          'a',
          's',
          'd',
        ].includes(e.key)
      ) {
        let velocity = { dx: 0, dy: 0 }

        switch (e.key) {
          case 'ArrowRight':
          case 'd':
            velocity = { dx: 1, dy: 0 }
            break
          case 'ArrowLeft':
          case 'a':
            velocity = { dx: -1, dy: 0 }
            break
          case 'ArrowDown':
          case 's':
            velocity = { dx: 0, dy: 1 }
            break
          case 'ArrowUp':
          case 'w':
            velocity = { dx: 0, dy: -1 }
            break
        }
        if (
          !(previousVelocity.dx + velocity.dx === 0 &&
            previousVelocity.dy + velocity.dy === 0)
        ) {
          setVelocity(velocity)
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [previousVelocity])

  return (
    <>
      <main>
        <h1 className='text-center font-bold text-2xl'>
          Confiscate The Drugs
        </h1>
        <p className='text-center font-medium text-1xl'>
          Click Start Game to play
        </p>
        <audio id="music" src="Moosic.mp3"></audio>
        <canvas
          className='border-4 border-gray-500 mx-auto'
          ref={canvasRef}
          width={canvasWidth + 1}
          height={canvasHeight + 1}
        />
        <div className='text-center flex justify-around w-[1000px] mx-auto py-0.5'>
          <p>Score: {score}</p>
          <p>Highscore: {highscore > score ? highscore : score}</p>
          {!isLost && countDown > 0 ? (
            <Button variant="outline" onClick={startGame}>
              {countDown === 4 ? 'Start Game' : countDown}
            </Button>
          ) : null}
          {isLost && (
            <div className="game-overlay flex justify-between w-1/2 font-bold">
              <p className="large">GAME OVER</p>
              <p className="final-score font-bold">
                {newHighscore ? `🎉 New Highscore 🎉` : `You scored: ${score}`}
              </p>
              {!running && isLost && (
                <Button variant="outline" onClick={startGame}>
                  RESTART GAME
                </Button>
              )}
            </div>
          )}
           <div className="controls">
              <p>How to Play?</p>
              <p className='border-gray-500 border'>
                <FontAwesomeIcon icon={['fas', 'arrow-up']} />
                <FontAwesomeIcon className="ml-2 mr-1" icon={['fas', 'arrow-right']} />
                <FontAwesomeIcon className="ml-1 mr-2" icon={['fas', 'arrow-down']} />
                <FontAwesomeIcon icon={['fas', 'arrow-left']} />
              </p>
            </div>
        </div>
      </main>
    </>
  )
}
