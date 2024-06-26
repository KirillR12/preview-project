import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import '@/shared/config/i18n/i18n'
import '@/app/styles/index.css'
import { ThemeProvider } from './app/provider/ui/ThemeProvider'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Контейнер root не найден')
}

const root = createRoot(container)
root.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
)
