import * as React from 'react';
import {mountWithAppProvider} from '../../../../../../../../tests/utilities';

import Secondary from '../Secondary';

describe('Secondary()', () => {
  it('mounts', () => {
    const secondary = mountWithAppProvider(<Secondary expanded />);
    expect(secondary.exists()).toBe(true);
  });
});