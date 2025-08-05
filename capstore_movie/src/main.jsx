import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './Store/index.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});
createRoot(document.getElementById('root')).render(
   <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <App />
    </Provider>
    </QueryClientProvider>
)
