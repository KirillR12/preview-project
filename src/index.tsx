import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { QueryClient, QueryClientProvider } from 'react-query'

const container = document.getElementById('root')
if (!container) {
    throw new Error('Контейнер root не найден')
}

const queryClient = new QueryClient()

const root = createRoot(container)
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
)
