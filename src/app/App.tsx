import { MainPage } from '@/pages/MainPage'
import './styles/index.css'
import classNames from 'classnames'
import { useTheme } from '@/shared/hooks/useTheme'

export function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <MainPage />
        </div>
    )
}
