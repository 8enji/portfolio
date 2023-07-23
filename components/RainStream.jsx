import React, { useState } from 'react'
import useInterval from '@use-it/interval'

const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const nums = '0123456789';

const VALID_CHARS = katakana + latin + nums

const MIN_STREAM_SIZE = 15
const MAX_STREAM_SIZE = 50

const getRandInRange = (min, max) => 
    Math.floor(Math.random() * (max - min)) + min

const getRandChar = () => 
    VALID_CHARS.charAt(Math.floor(Math.random() * VALID_CHARS.length))

const getRandStream = () =>
    new Array(getRandInRange(MIN_STREAM_SIZE, MAX_STREAM_SIZE)).fill().map(_ => getRandChar())

const RainStream = () => {
    const stream = getRandStream()
    const [topPadding, setTopPadding] = useState(stream.length * -50);

    useInterval(() => {
        if (topPadding > window.innerHeight) {
            // setTopPadding(0)
        } else {
            setTopPadding(topPadding + 44) 
        }
    }, 200)

  return (
    <div className='text-[#20c20e] [writing-mode:vertical-rl] [text-orientation:upright]
        [whiteSpace:nowrap] [userSelect:none] text-[20px] [text-shadow:_2px_0px_8px_rgb(32_194_14_/_80%)]'>
      {stream.map((char, index) => (
        <a style={{
            color: index==stream.length - 1 ? '#fff' : undefined,
            opacity: index < 6 ? .1 + index * .15 : 1,
            textShadow: index == stream.length - 1 ? '0 0 20px rgba(255,255,255,1)' : undefined,
            marginTop: -1
        }}>
            {char}
        </a>
      ))}
    </div>
  )
}

export default RainStream
