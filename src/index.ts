import type { PluginDefinition } from '@yaakapp/api';

export const plugin: PluginDefinition = {
  themes: [
    {
      id: 'carbonfox',
      label: 'Carbonfox',
      dark: true,
      base: {
        surface: '#161616',
        surfaceHighlight: '#252525',
        text: '#CDCECF',
        textSubtle: '#b6b8bb',
        textSubtlest: '#7b7c7e',
        selection: '#415166',
        surfaceActive: '#29394e',
        border: '#252525',
        borderSubtle: '#29394e',
        primary: '#be95ff',
        secondary: '#78a9ff',
        info: '#52bdff',
        success: '#3ddbd9',
        notice: '#F4A261',
        warning: '#be95ff',
        danger: '#ee5396',
      },
      components: {
        dialog: {
          surface: '#252525',
          border: '#29394e',
        },
        sidebar: {
          surface: '#0c0c0c',
          border: '#161616',
        },
        appHeader: {
          surface: '#0c0c0c',
          border: '#161616',
        },
        responsePane: {
          surface: '#161616',
          border: '#252525',
        },
        button: {
          primary: '#be95ff',
          secondary: '#78a9ff',
          info: '#52bdff',
          success: '#3ddbd9',
          notice: '#F4A261',
          warning: '#be95ff',
          danger: '#ee5396',
        },
      },
    },
  ],
};
