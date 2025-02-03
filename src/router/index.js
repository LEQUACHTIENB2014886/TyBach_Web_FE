import { createRouter, createWebHistory } from 'vue-router';
import Homepage from '../views/HomePage/Homepage.vue';
import Overview from '../views/Introduce/Overview.vue';
import DevelopmentHistory from '../views/Introduce/DevelopmentHistory.vue';
import LaborRights from '../views/SocialResponsibility/LaborRights.vue';
import OccupationalHealthSafety from '../views/SocialResponsibility/OccupationalHealthSafety.vue';
import EnvironmentalProtection from '../views/SocialResponsibility/EnvironmentalProtection.vue';
import PartyActivities from '../views/BranchActivities/PartyActivities.vue';
import CompanyActivities from '../views/CompanyActivities/CompanyActivities.vue';
import ActivityVideos from '../views/CompanyActivities/ActivityVideos.vue';
import JobInformation from '../views/Recruitment/JobInformation.vue';
import HumanResources from '../views/Recruitment/HumanResources.vue';
import ContactUs from '../views/Contact/ContactUs.vue';
import SubmitApplication from '../views/Contact/SubmitApplication.vue';

const routes = [
  { path: '/', component: Homepage },
  { path: '/introduce/overview', component: Overview },
  { path: '/introduce/development-history', component: DevelopmentHistory },
  { path: '/social-responsibility/labor-rights', component: LaborRights },
  { path: '/social-responsibility/occupational-health-safety', component: OccupationalHealthSafety },
  { path: '/social-responsibility/environmental-protection', component: EnvironmentalProtection },
  { path: '/branch-activities', component: PartyActivities },
  { path: '/company-activities/company-activities', component: CompanyActivities },
  { path: '/company-activities/activity-videos', component: ActivityVideos },
  { path: '/recruitment/job-information', component: JobInformation },
  { path: '/recruitment/human-resources', component: HumanResources },
  { path: '/contact/contact-us', component: ContactUs },
  { path: '/contact/submit-application', component: SubmitApplication },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
