import styles from './styles.module.css'
import { memo } from 'react'
import { useCallback } from 'react'
import { useMediaQuery } from 'react-responsive'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

const ParticlesBg = memo(() => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine)
    }, [])

    const isModule = useMediaQuery({ query: '(min-width: 900px)' })

    const value = isModule ? 10 : 50

    return (
        <Particles
            className={styles.particles}
            id="tsparticles"
            init={particlesInit}
            options={{
                fpsLimit: 160,
                particles: {
                    color: {
                        value: 'rgb(112, 22, 255)',
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

export default ParticlesBg
