"use client"

import { useCallback, useRef } from "react"

/**
 * Synthesizes a subtle paper-rustle sound with the Web Audio API.
 * White noise burst -> bandpass (~800Hz, Q=2) -> short decay envelope with a tiny reverb tail.
 */
export function usePageSound() {
  const ctxRef = useRef<AudioContext | null>(null)

  const play = useCallback(() => {
    if (typeof window === "undefined") return
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
    if (!AC) return

    if (!ctxRef.current) ctxRef.current = new AC()
    const ctx = ctxRef.current
    if (ctx.state === "suspended") ctx.resume()

    const now = ctx.currentTime
    const duration = 0.26

    // white noise buffer
    const bufferSize = Math.floor(ctx.sampleRate * duration)
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / bufferSize)
    }

    const noise = ctx.createBufferSource()
    noise.buffer = buffer

    const bandpass = ctx.createBiquadFilter()
    bandpass.type = "bandpass"
    bandpass.frequency.value = 800
    bandpass.Q.value = 2

    const gain = ctx.createGain()
    // attack 5ms, decay ~250ms
    gain.gain.setValueAtTime(0, now)
    gain.gain.linearRampToValueAtTime(0.16, now + 0.005)
    gain.gain.exponentialRampToValueAtTime(0.0008, now + duration)

    // tiny reverb tail via short feedback delay
    const delay = ctx.createDelay()
    delay.delayTime.value = 0.03
    const feedback = ctx.createGain()
    feedback.gain.value = 0.15
    const wet = ctx.createGain()
    wet.gain.value = 0.25

    noise.connect(bandpass)
    bandpass.connect(gain)
    gain.connect(ctx.destination)

    gain.connect(delay)
    delay.connect(feedback)
    feedback.connect(delay)
    delay.connect(wet)
    wet.connect(ctx.destination)

    noise.start(now)
    noise.stop(now + duration)
  }, [])

  return play
}
