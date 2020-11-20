import React, { FunctionComponent, ReactElement } from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf, StoryContext } from '@storybook/react';
import Header from './Header';

storiesOf('Header', module)
  .addDecorator(
    (
      storyFn: FunctionComponent<any>,
      context: StoryContext,
    ) => withConsole()(storyFn)(context),
  )
  .add('Header.stories', (): ReactElement => (
    <Header />
  ));
