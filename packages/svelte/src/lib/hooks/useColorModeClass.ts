import type { ColorMode, ColorModeClass } from '@xyflow/system';
import { readable, type Readable } from 'svelte/store';

function getMediaQuery() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return null;
  }

  return window.matchMedia('(prefers-color-scheme: dark)');
}

export function useColorModeClass(colorMode: ColorMode = 'light'): Readable<ColorModeClass> {
  const colorModeClass = readable<ColorModeClass>('light', (set) => {
    if (colorMode !== 'system') {
      set(colorMode);

      return;
    }

    const mediaQuery = getMediaQuery();
    const updateColorModeClass = () => set(mediaQuery?.matches ? 'dark' : 'light');

    set(mediaQuery?.matches ? 'dark' : 'light');
    mediaQuery?.addEventListener('change', updateColorModeClass);

    return () => {
      mediaQuery?.removeEventListener('change', updateColorModeClass);
    };
  });

  return colorModeClass;
}
