import classNames from 'classnames'
import './styles/index.css'
import { MainPage } from '@/pages/MainPage'
import { useTheme } from '@/shared/hooks/useTheme'

export function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <MainPage />
        </div>
    )
}
