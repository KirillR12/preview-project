import { memo } from 'react'
import { PreviewBlock } from '@/widgets/Preview'
import { ProjectBlock } from '@/features/projectBlock'
import { FiguresLayer } from '@/widgets/FiguresLayer'
import styles from './styles.module.css'
import { SteckBlock } from '@/features/steckBlock'
import { EducationBlock } from '@/features/educationBlock'
import { ContactBlock } from '@/features/contactBlock'
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from 'tsparticles-slim'

 interface MainPageProps {
   className?: string
}

export const MainPage = memo((props: MainPageProps) => {

const {
className
} = props

const particlesInit = useCallback(async (engine: Engine) => {
  console.log(engine);
  await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
  await console.log(container);
}, []);


    return (
    <div className={className}>
<PreviewBlock/>
  <FiguresLayer>
            <ProjectBlock className={styles.pop}/>
  </FiguresLayer>
  <SteckBlock/>
  <EducationBlock />
  <ContactBlock/>
  <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "rgb(154, 92, 255)",
                    },
                    links: {
                        color: "rgb(154, 92, 255)",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
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
                        value: 50,
                    },
                },
            }}
        />
    </div>
  )
 }) 