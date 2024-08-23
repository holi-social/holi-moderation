import { MantineProvider } from '@mantine/core'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Notifications, notifications } from '@mantine/notifications'
import { ModalsProvider } from '@mantine/modals'
import { SWRConfig } from 'swr'

import { ListReports } from './pages/reports/list'
import { ViewReport } from './pages/reports/view'
import { fetcher } from './fetcher'
import { Login } from './pages/auth/login'
import { Layout } from './pages/appLayout'
import { ListReportsFromUser } from './pages/reports/fromUser'
import { ListUsers } from './pages/moderationUsers/list'
import { AVAILABLE_MODALS } from './modals'

import '@mantine/core/styles.css'
import 'mantine-react-table/styles.css'
import '@mantine/notifications/styles.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Layout>
        <></>
      </Layout>
    ),
  },
  {
    path: '/reports',
    element: (
      <Layout>
        <ListReports />
      </Layout>
    ),
  },
  {
    path: '/reports/:reportId',
    element: (
      <Layout>
        <ViewReport />
      </Layout>
    ),
  },
  {
    path: '/reports/user/:reporterId',
    element: (
      <Layout>
        <ListReportsFromUser />
      </Layout>
    ),
  },
  {
    path: '/users',
    element: (
      <Layout>
        <ListUsers />
      </Layout>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
])

function App() {
  return (
    <MantineProvider>
      <Notifications />
      <ModalsProvider modals={AVAILABLE_MODALS}>
        <SWRConfig
          value={{
            fetcher: fetcher,
            onError: (error: any) => {
              notifications.show({
                title: 'Error',
                // eslint-disable-next-line
                message: error.message.substring(0, 350) + '...',
                color: 'red',
                autoClose: false,
              })
            },
          }}
        >
          <RouterProvider router={router} />
        </SWRConfig>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default App
