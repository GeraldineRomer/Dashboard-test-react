/* components > Layouts > Pages > routes */
import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { Admin } from "../pages/admin/Admin";
import { SignIn } from "../pages/admin/SignIn";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound/NotFound";
const AdminRoutes = [
    {path: '/admin', component: Admin, layout: GeneralLayout},
    {path: '/admin/sign-in', component: SignIn,layout: GeneralLayout}
];
const GeneralRoutes = [
    {path: '/',component: Home,layout: GeneralLayout},
    {path: '/contact',component: Contact,layout: GeneralLayout},
    {path: '*',component: NotFound,layout: GeneralLayout}
];

const allRoutesProject = [...AdminRoutes,...GeneralRoutes];
export default allRoutesProject;
