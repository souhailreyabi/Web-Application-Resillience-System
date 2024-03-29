module.exports = [
    {
        key: 'metering',
        name: 'Metering',
        icon: 'settings_remote',
        child: [
            {
                name: 'Meters List',
                link: '/app/data/meters'
            }
        ]
    },
    {
        key: 'services',
        name: 'Services',
        icon: 'swap_vert',
        child: [
            {
                name: 'Sanitation',
                link: '/app/data/water-sanitation-services'
            },
            {
                name: 'Water Supply',
                link: '/app/data/water-supply-services'
            }
        ]
    },
    {
        key: 'economic_activities',
        name: 'Eco. Activities',
        icon: 'business',
        child: [
            {
                name: 'ISIC',
                link: '/app/data/economic-activities/international-standard-industrial-classification'
            },
            {
                name: 'National',
                link: '/app/data/economic-activities/national-economic-activities-classification'
            }
        ]
    },


    /* {
    key: 'cl',
    name: 'CL',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'other_page',
        name: 'COMMERCIAL LOSSES',
        title: true
      },
      {
        key: 'CL_SUB_1',
        keyParent: 'cl',
        name: 'SPD',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          }]
      },
      {
        key: 'CL_SUB_2',
        keyParent: 'cl',
        name: 'HM',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          }]
      },
      {
        key: 'CL_SUB_3',
        keyParent: 'cl',
        name: 'MDM',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          }]
      },
      {
        key: 'CL_SUB_4',
        keyParent: 'cl',
        name: 'BDM',
        child: [
          {
            key: 'sub_menu_1',
            name: 'Sub Menu 1',
            link: '/#'
          }]
      }]
  },
  {
    key: 'tl',
    name: 'TL',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'tl',
        name: 'Technical Losses',
        title: true
      },
      {
        key: 'page',
        name: 'Page',
        link: '/page',
        icon: 'ios-person-outline'
      }]
  } */

    /*  {
    key: 'pages',
    name: 'Pages',
    icon: 'ios-paper-outline',
    child: [
      {
        key: 'other_page',
        name: 'Welcome Page',
        title: true,
      },
      {
        key: 'blank',
        name: 'Blank Page',
        link: '/app',
        icon: 'ios-document-outline',
      },
      {
        key: 'main_page',
        name: 'Sample Page',
        title: true,
      },
      {
        key: 'dashboard',
        name: 'Dashboard',
        link: '/app/dashboard',
        icon: 'ios-home-outline',
      },
      {
        key: 'form',
        name: 'Form',
        link: '/app/form',
        icon: 'ios-list-box-outline',
      },
      {
        key: 'table',
        name: 'Table',
        link: '/app/table',
        icon: 'ios-grid-outline',
      },
      {
        key: 'maintenance',
        name: 'Maintenance',
        link: '/maintenance',
        icon: 'ios-build-outline'
      },
      {
        key: 'coming_soon',
        name: 'Coming Soon',
        link: '/coming-soon',
        icon: 'ios-bonfire-outline'
      },
    ]
  } */
    /*  {
      key: 'auth',
      name: 'Auth Page',
      icon: 'ios-contact-outline',
      child: [
        {
          key: 'auth_page',
          name: 'User Authentication',
          title: true,
        },
        {
          key: 'login',
          name: 'Login',
          link: '/login',
          icon: 'ios-person-outline'
        },
        {
          key: 'register',
          name: 'Register',
          link: '/register',
          icon: 'ios-key-outline'
        },
        {
          key: 'reset',
          name: 'Reset Password',
          link: '/reset-password',
          icon: 'ios-undo-outline'
        },
      ]
    },
    {
      key: 'errors',
      name: 'Errors',
      icon: 'ios-paw-outline',
      child: [
        {
          key: 'errors_page',
          name: 'Errors Pages',
          title: true,
        },
        {
          key: 'not_found_page',
          name: 'Not Found Page',
          link: '/app/pages/not-found',
          icon: 'ios-warning-outline'
        },
        {
          key: 'error_page',
          name: 'Error Page',
          link: '/app/pages/error',
          icon: 'ios-warning-outline'
        },
      ]
    },
    {
      key: 'menu_levels',
      name: 'Menu Levels',
      multilevel: true,
      icon: 'ios-menu-outline',
      child: [
        {
          key: 'level_1',
          name: 'Level 1',
          link: '/#'
        },
        {
          key: 'level_2',
          keyParent: 'menu_levels',
          name: 'Level 2',
          child: [
            {
              key: 'sub_menu_1',
              name: 'Sub Menu 1',
              link: '/#'
            },
            {
              key: 'sub_menu_2',
              name: 'Sub Menu 2',
              link: '/#'
            },
          ]
        },
      ]
    } */
];
