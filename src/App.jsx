import { MemberPortalScreen } from './components/MemberPortalScreen'
import { ToastProvider } from './context/ToastContext'

/**
 * This whole site is the member portal, there is no PIN gate and no
 * #my-club hash check here, both of those belonged to the old combined
 * deployment, where this screen was one of two branches behind a hash.
 * Splitting it into its own repository removed the need for that
 * branching entirely, this file only ever renders one thing.
 */
export default function App() {
  return (
    <ToastProvider>
      <MemberPortalScreen />
    </ToastProvider>
  )
}
