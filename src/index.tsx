import { createRoot } from 'react-dom/client'
import { App } from './app/App'
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
