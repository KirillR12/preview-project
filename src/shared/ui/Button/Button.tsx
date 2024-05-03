import { ButtonHTMLAttributes, FC } from 'react'
import styles from './styles.module.css'
import classNames from 'classnames'

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    OUTLINE_RED = 'outlineRed',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
    CLEAR_INVERTED = 'clear_inverted',
    FORM_THEME = 'form_theme',
}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    square?: boolean
    size?: ButtonSize
    disabled?: boolean
    fillWidth?: boolean
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ButtonTheme.CLEAR,
        square,
        disabled,
        fillWidth,
        size = ButtonSize.M,
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
                styles[size],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
