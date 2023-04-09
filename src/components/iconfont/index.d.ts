/* eslint-disable */
import React, { FunctionComponent } from 'react';

interface Props {
  name: 'a-1' | 'a-11' | 'header' | 'header1';
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

declare const IconFont: FunctionComponent<Props>;

export default IconFont;
