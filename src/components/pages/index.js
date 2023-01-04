import Home01 from './Home01';
import Home02 from './Home02';
import AboutUs from './AboutUs';
import AboutDetails from './AboutDetails';
import AboutTeam from './AboutTeam';
import AboutCarres from './AboutCarres';
import Services from './Services';
import ServiceDetail from './ServiceDetail';
import Projects from './Projects';
import ProjectFullWidth from './ProjectFullWidth';
import ProjectDetail from './ProjectDetail';
import Testimonial from './Testimonial';
import PricePage from './PricePage';
import Blog from './Blog';
import BlogSingle from './BlogSingle';
import Contact01 from './Contact01';
import Contact02 from './Contact02';
import ITsupport from './services/ITsupport';
import CyberSecurity from './services/CyberSecurity';
import CloudServices from './services/CloudServices';
import Microsoft365 from './services/Microsoft365';
import PitchTraining from './services/PitchTraining';
import WebDesign from './services/WebDesign';

const routes = [
  { path: '/', component: Home01 },
  { path: '/home-02', component: Home02 },
  { path: '/about-us', component: AboutUs },
  { path: '/about-detail', component: AboutDetails },
  { path: '/about-team', component: AboutTeam },
  { path: '/about-carees', component: AboutCarres },
  { path: '/services', component: Services },
  { path: '/services-detail', component: ServiceDetail },
  { path: '/services/itsupport', component: ITsupport },
  { path: '/services/cybersecurity', component: CyberSecurity },
  { path: '/services/cloudservices', component: CloudServices },
  { path: '/services/microsoft365', component: Microsoft365 },
  { path: '/services/pitchtraining', component: PitchTraining },
  { path: '/services/webdesign', component: WebDesign },

  { path: '/project', component: Projects },
  { path: '/project-full-width', component: ProjectFullWidth },
  { path: '/project-detail', component: ProjectDetail },
  { path: '/page-testimonial', component: Testimonial },
  { path: '/page-pricing', component: PricePage },
  { path: '/blog', component: Blog },
  { path: '/blog-single', component: BlogSingle },
  { path: '/contact', component: Contact01 },
  { path: '/contact-02', component: Contact02 },
];

export default routes;
