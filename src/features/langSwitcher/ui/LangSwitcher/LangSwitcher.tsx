import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import { Button } from '@/shared/ui/Button'
import { Text } from '@/shared/ui/Text'
import { useMediaQuery } from 'react-responsive'

export const LangSwitcher = memo(() => {
    const { t, i18n } = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    const isModuleSize = useMediaQuery({ query: '(min-width: 1020px)' })

    return (
        <Button onClick={toggle}>
            <Text
                title={t('Eng')}
                tag={isModuleSize ? 'h4' : 'h3'}
                weight="ligth"
            />
        </Button>
    )
})
