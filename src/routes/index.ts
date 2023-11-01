import express from 'express'
import { UserRoutes } from '../app/module/user/user.routes'
import { AuthRoutes } from '../app/module/auth/auth.routes'
import { CountryRoutes } from '../app/module/country/country.routes'
import { VendorRoutes } from '../app/module/vendor/vendor.routes'
import { BankRoutes } from '../app/module/bank/bank.routes'
import { VerificationRequestRoutes } from '../app/module/verificationRequest/verificationRequest.routes'
import { ReferenceRoutes } from '../app/module/reference/reference.routes'
import { ViewVideoRoutes } from '../app/module/viewVideo/viewVideo.routes'
const router = express.Router()

const moduleRoutes = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/user',
        route: UserRoutes,
    },
    {
        path: '/country',
        route: CountryRoutes,
    },
    {
        path: '/vendor',
        route: VendorRoutes,
    },
    {
        path: '/bank',
        route: BankRoutes,
    },
    {
        path: '/verification-request',
        route: VerificationRequestRoutes,
    },
    {
        path: '/reference',
        route: ReferenceRoutes,
    },
    {
        path: '/video',
        route: ViewVideoRoutes,
    },
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})




export const Routes = router