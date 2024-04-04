import publicPages from "../page/NonAuthPage"
import {DashBoard, TranscitionHistory} from "../page/AuthPage"

const {LoginPage,RegistrationPage}:any = publicPages
const privateRoute=[
    { path: '/dashBoard', component: DashBoard },
    { path: '/history', component: TranscitionHistory },

]

const publicRoutes=[
    { path: '/', component: LoginPage },
    { path: '/login', component: LoginPage },
    { path: '/registration', component:RegistrationPage }
]

export {privateRoute, publicRoutes}