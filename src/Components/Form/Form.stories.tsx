import React, { FunctionComponent, ReactElement } from 'react';
import { withConsole } from '@storybook/addon-console';
import { storiesOf, StoryContext } from '@storybook/react';
import { IForm } from './Form.types';
import Form from './Form';

storiesOf('Form', module)
  .addDecorator(
    (
      storyFn: FunctionComponent<any>,
      context: StoryContext,
    ) => withConsole()(storyFn)(context),
  )
  .add('Form.stories', (): ReactElement<IForm> => (
    <Form />
  ));
