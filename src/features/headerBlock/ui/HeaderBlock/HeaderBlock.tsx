import { memo } from 'react'
import { HStack } from '@/shared/ui/Stack'
import { Text } from '@/shared/ui/Text'
import { headerBlockData } from '../../model/data/data'
import styles from './styles.module.css'
import classNames from 'classnames'
import { Link } from 'react-scroll'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Icon } from '@/shared/ui/Icon'
import darkTheme from '@/shared/assets/svg/darkTheme.svg'

interface HeaderBlockProps {
    className?: string
}

export const HeaderBlock = memo((props: HeaderBlockProps) => {
    const { className } = props

    return (
        <HStack
            justify="between"
            max
            className={classNames(styles.HeaderBlock, {}, [className])}
        >
            <Text
                title="Fedotov"
                tag="h4"
                className={styles.text}
                weight="ligth"
            />
            <HStack align="center" gap="40">
                {headerBlockData.map((el) => (
                    <Button theme={ButtonTheme.CLEAR}>
                        <Link
                            key={el.href}
                            activeClass="active"
                            to={el.href}
                            spy={true}
                            smooth={true}
                            duration={700}
                        >
                            <Text
                                title={el.text}
                                tag="h4"
                                className={styles.text}
                                weight="ligth"
                            />
                        </Link>
                    </Button>
                ))}
                <Icon Svg={darkTheme} />
            </HStack>
        </HStack>
    )
})
