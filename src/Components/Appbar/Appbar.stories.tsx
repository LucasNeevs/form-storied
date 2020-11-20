import React, { ReactElement, FunctionComponent } from 'react';
import { storiesOf, StoryContext } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Appbar from './Appbar';

storiesOf('Appbar', module)
  .addDecorator(
    (
      storyFn: FunctionComponent<any>,
      context: StoryContext,
    ) => withConsole()(storyFn)(context),
  )
  .add('Appbar.stories', (): ReactElement => (
    <Appbar />
  ));
