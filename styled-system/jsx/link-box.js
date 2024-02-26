import { createElement, forwardRef } from 'react'
import { mergeCss } from '../css/css.js';
import { splitProps } from '../helpers.js';
import { getLinkBoxStyle } from '../patterns/link-box.js';
import { styled } from './factory.js';

export const LinkBox = /* @__PURE__ */ forwardRef(function LinkBox(props, ref) {
  const [patternProps, restProps] = splitProps(props, [])

const styleProps = getLinkBoxStyle(patternProps)
const cssProps = { css: mergeCss(styleProps, props.css) }
const mergedProps = { ref, ...restProps, ...cssProps }

return createElement(styled.div, mergedProps)
  })