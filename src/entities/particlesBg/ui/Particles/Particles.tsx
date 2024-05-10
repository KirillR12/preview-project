import styles from './styles.module.css'
import { memo } from 'react'
import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import Particles from 'react-tsparticles'
import type { Container, Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export const ParticlesBg = memo(() => {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine)
        await loadSlim(engine)
    }, [])

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => {
            await console.log(container)
        },
        []
    )

    const isModule = useMediaQuery({ query: '(min-width: 900px)' })

    const value = isModule ? 10 : 50

    return (
        <Particles
            className={styles.particles}
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 160,
                particles: {
                    color: {
                        value: 'rgb(154, 92, 255)',
                    },
                    links: {
                        color: 'rgb(154, 92, 255)',
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 3,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 1000,
                        },
                        value: value,
                    },
                },
            }}
        />
    )
})
