export const menuItems = [
  {
    label: 'menuitems.dashboards.text',
    icon: 'bx-line-chart',
    prefix: 'dashboard',
    subItems: []
  },
  {
    label: 'Comunicação',
    icon: 'bx-dollar-circle',
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
    icon: 'bx-group',
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
    icon: 'bx-id-card',
    prefix: 'finance',
    subItems: [
      {
        label: 'menuitems.cell.list.cell',
        link: '/',
        permission: ''
      }
    ]
  },
  {
    label: 'Relatórios',
    icon: 'bx-id-card',
    prefix: 'finance',
    subItems: [
      {
        label: 'menuitems.cell.list.cell',
        link: '/',
        permission: ''
      }
    ]
  },
  {
    label: 'Ferramentas',
    icon: 'bx-id-card',
    prefix: 'finance',
    subItems: [
      {
        label: 'menuitems.cell.list.cell',
        link: '/',
        permission: ''
      }
    ]
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

