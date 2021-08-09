const routes = [
  {
    path: '/campaigns',
    component: () => import('src/app/pages/newsletter/campaign/views/CampaignIndex'),
    name: 'campaign.index',
    meta: {
      requiresAuth: true,
      route: { title: 'Campanhas pontuais' },
      layout: 'admin'
    }
  },
  {
    path: '/campaigns/email/create/:campaignId',
    component: () => import('src/app/pages/newsletter/campaign/views/EmailCreate'),
    name: 'email.create',
    meta: {
      requiresAuth: true,
      route: { title: 'Campanhas pontuais' },
      layout: 'admin'
    }
  }
]

export default routes
