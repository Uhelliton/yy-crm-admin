export const menuItems = [
  {
    label: 'menuitems.dashboards.text',
    icon: 'flaticon-diagram',
    prefix: 'dashboard',
    route: 'dashboard.index',
    subItems: []
  },
  {
    label: 'Comunicação',
    icon: 'flaticon-light',
    prefix: 'communication',
    subItems: [
      {
        label: 'Campanhas',
        route: 'campaign.index',
        permission: ''
      },
      {
        label: 'Automações',
        route: 'campaign.index',
        permission: ''
      },
      {
        label: 'Filtros',
        route: 'campaign.index',
        permission: ''
      },
    ]
  },
  {
    label: 'Painel Clientes',
    icon: 'flaticon-users',
    prefix: 'messenger',
    subItems: [
      {
        label: 'Painel',
        link: 'membership/members',
        route: 'member.index',
        permission: ''
      },
      {
        label: 'Chamados',
        link: '/dashboard/saas',
        route: 'account.payable.index',
        permission: ''
      },
      {
        label: 'Contato Telefônico',
        link: '/dashboard/saas',
        route: 'account.payable.index',
        permission: ''
      },
    ]
  },
  {
    label: 'Público',
    icon: 'flaticon-map',
    prefix: 'public',
    subItems: [
      {
        label: 'Dashboard',
        route: 'public.dashboard',
      },
      {
        label: 'Públicos',
        route: 'public.index',
      },
    ]
  },
  {
    label: 'Relatórios',
    icon: 'flaticon-graphic',
    prefix: 'finance',
    subItems: []
  },
  {
    label: 'menuitems.setting.text',
    icon: 'bx-wrench',
    prefix: 'finance',
    subItems: [
      {
        label: 'menuitems.setting.list.user',
        link: '/',
        permission: ''
      },
      {
        label: 'menuitems.setting.list.permission',
        link: '/',
        permission: ''
      },
      {
        label: 'menuitems.setting.list.profile',
        link: '/dashboard/saas',
        permission: ''
      },
    ]
  }
]

