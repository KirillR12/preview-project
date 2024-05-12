import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Button, ButtonTheme } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import styles from './styles.module.css'
import { useMediaQuery } from 'react-responsive'

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const isModuleSize = useMediaQuery({ query: '(min-width: 1020px)' })

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggle}>
            <Text
                title={t('eng')}
                tag={isModuleSize ? 'h4' : 'h3'}
                className={styles.text}
                weight="ligth"
                btn
            />
        </Button>
    )
})
