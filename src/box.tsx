import { styled } from '../styled-system/jsx'
 
export const Box = styled('div', {
  base: {
    background: '$yellow-100',
  },
  variants: {
    foo: {
      success: { background: '$success' },
      error: { background: '$error' },
      info: { background: '$info' },
    },
  },
})