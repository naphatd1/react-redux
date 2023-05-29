import { RouteObject } from "react-router"
// import DLayout from "../pages/dashboard/d-layout"
import DHome from "../pages/dashboard/d-home"
import DLeave from "../pages/dashboard/d-leave"
import DmangeLeave from "../pages/dashboard/d-manage-leave"
import AuthGuard from "../guards/auth-guard"


const routeDashboard: RouteObject[] = [
    {
        path: '/dashboard',
        // element: <DLayout />,
        element: <AuthGuard />,
        children: [
            {
                path: '',
                element: <DHome />
            },
            {
                path: 'request-for-leave',
                element: <DLeave />
            },
            {
                path: 'manage-leave',
                element: <DmangeLeave />
            },
        ]
    }
]


export default routeDashboard