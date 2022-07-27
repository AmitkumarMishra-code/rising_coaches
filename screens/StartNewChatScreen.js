import React from 'react';
import * as CustomCode from '../components.js';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';

const StartNewChatScreen = props => {
  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.MultiUserTags navigation={props.navigation} />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default StartNewChatScreen;
