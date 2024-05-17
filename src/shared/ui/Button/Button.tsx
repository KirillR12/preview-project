import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

type ButtonThemeType = 'clear' | 'clear_outline' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonThemeType
    square?: boolean
    disabled?: boolean
    fillWidth?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = 'clear',
        square,
        disabled,
        fillWidth,
        ...otherProps
    } = props

    const mods = {
        [styles.square]: square,
        [styles.disabled]: disabled,
        [styles.fillWidth]: fillWidth,
    }

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(styles.Button, mods, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
