import React from 'react';
import * as AblyChatApi from '../apis/AblyChatApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { ScreenContainer } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';

const ChatScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const isFocused = useIsFocused();
  React.useEffect(async () => {
    try {
      if (!isFocused) {
        return;
      }
      const response = await AblyChatApi.getChatroomGET(Constants, {
        chatroom_id: props.route?.params?.chatroom_id ?? 10,
      });
      setGlobalVariableValue({
        key: 'return_chat',
        value: response,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.ChatComponent chat_id={props.route?.params?.chatroom_id} />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default ChatScreen;
