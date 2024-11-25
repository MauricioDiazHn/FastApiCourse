import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Inicio',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Administracion',
    title: true
  },
  {
    name: 'Proyectos',
    url: '/proyectos',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Target Principal',
        url: '/proyectos/target-principal',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Target Adicional',
        url: '/proyectos/target-adicional',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Solicitud aprobacion presupuesto',
        url: '/proyectos/solicitud-aprobacion-presupuesto',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Compras',
    url: '/compras',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Solicitud',
        url: '/compras/solicitud',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Pedidos',
        url: '/compras/pedidos',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Timer',
    url: '/timer',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Timer Proyecto',
        url: '/timer/timer-proyecto',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Monitor Timer Proyectos',
        url: '/timer/monitor-timer-proyectos',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Inventarios',
    url: '/inventarios',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Entradas',
        url: '/inventarios/entradas',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Salidas',
        url: '/inventarios/salidas',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Traslados',
        url: '/inventarios/Traslados',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Conteo',
        url: '/inventarios/conteo',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Empleados',
        url: '/inventarios/empleados',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Validation',
        url: '/forms/validation',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Reportes',
    url: '/reportes',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Existencias',
        url: '/reportes/existencias',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Kardex',
        url: '/reportes/kardex',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Ventas',
        url: '/reportes/ventas',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Compras',
        url: '/reportes/compras',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cuentas por cobrar',
        url: '/reportes/cuentas-por-cobrar',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Cuentas por pagar',
        url: '/reportes/cuentas-por-pagar',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    name: 'Configuraciones',
    url: '/configuraciones',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Cambio de clave',
        url: '/configuraciones/cambio-de-clave',
        icon: 'nav-icon-bullet'
      },
      {
        name: 'Parametros y maestros',
        url: '/configuraciones/parametros-y-maestros',
        icon: 'nav-icon-bullet'
      }
    ]
  },
  {
    title: true,
    name: 'Links',
    class: 'mt-auto'
  },
  {
    name: 'Docs',
    url: 'https://coreui.io/angular/docs/5.x/',
    iconComponent: { name: 'cil-description' },
    attributes: { target: '_blank' }
  }
];
