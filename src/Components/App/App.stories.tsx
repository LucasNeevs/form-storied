import React, { ReactElement, FunctionComponent } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf, StoryContext } from '@storybook/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { withConsole } from '@storybook/addon-console';
import App from './App';

storiesOf('App', module)
  .addDecorator(
    (
      storyFn: FunctionComponent<any>,
      context: StoryContext,
    ) => withConsole()(storyFn)(context),
  )
  .add('App.stories', (): ReactElement => (
    <App />
  ));
