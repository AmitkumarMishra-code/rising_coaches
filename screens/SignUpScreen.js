import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  Link,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignUpScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const createAccountPOST = RisingCoachesApi.useCreateAccountPOST();

  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      if (!Constants['auth_header']) {
        return;
      }
      navigation.navigate('NewsFeedScreen');
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  const [emailInput, setEmailInput] = React.useState('');
  const [nameInput, setNameInput] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewaaContent}
      >
        <View>
          <Text style={styles.TextZ2}>{'Welcome!'}</Text>

          <Text style={[styles.TextU2, { color: theme.colors.strong }]}>
            {'Create an account to get started'}
          </Text>
        </View>

        <View style={styles.ViewTR}>
          <Text style={[styles.TextVi, { color: theme.colors.error }]}>
            {Constants['error_message']}
          </Text>
          <TextInput
            onChangeText={newNameInputValue => {
              try {
                setNameInput(newNameInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputbg, { borderColor: theme.colors.divider }]}
            value={null}
            placeholder={'Name'}
            autoCapitalize={'words'}
            autoFocus={true}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmailInput(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputf3, { borderColor: theme.colors.divider }]}
            value={null}
            placeholder={'Email'}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            textContentType={'emailAddress'}
          />
          <Spacer top={12} right={8} bottom={8} left={8} />
          <TextInput
            onChangeText={newPasswordInputValue => {
              try {
                setPasswordInput(newPasswordInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputJj, { borderColor: theme.colors.divider }]}
            value={null}
            placeholder={'Password'}
            secureTextEntry={true}
            autoCapitalize={'none'}
            textContentType={'password'}
          />
          <Spacer top={24} right={8} bottom={24} left={8} />
          <>
            {Constants['is_loading'] ? null : (
              <ButtonSolid
                onPress={async () => {
                  try {
                    setGlobalVariableValue({
                      key: 'is_loading',
                      value: true,
                    });
                    const response = await createAccountPOST.mutateAsync({
                      email: emailInput,
                      handle: emailInput,
                      name: nameInput,
                      password: passwordInput,
                      profile_image: '',
                    });
                    const message = response.message;
                    const authToken = response.authToken;
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: message,
                    });
                    setGlobalVariableValue({
                      key: 'is_loading',
                      value: false,
                    });
                    if (!authToken) {
                      return;
                    }
                    const id = response.id;
                    const name = response.name;
                    const email = response.email;
                    setGlobalVariableValue({
                      key: 'auth_header',
                      value: 'Bearer ' + authToken,
                    });
                    setGlobalVariableValue({
                      key: 'user_id',
                      value: id,
                    });
                    setGlobalVariableValue({
                      key: 'user_name',
                      value: name,
                    });
                    setGlobalVariableValue({
                      key: 'user_email',
                      value: email,
                    });
                    setNameInput('');
                    setEmailInput('');
                    setPasswordInput('');
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: '',
                    });
                    navigation.navigate('NewsFeedScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolidVE,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign up'}
              />
            )}
          </>
          <>
            {!Constants['is_loading'] ? null : (
              <ButtonSolid
                style={[
                  styles.ButtonSolidcl,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={''}
                disabled={true}
                loading={true}
              />
            )}
          </>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.ViewFj}>
            <Text style={[styles.TextF8, { color: theme.colors.strong }]}>
              {'Have an account?'}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('SignInScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign in.'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextZ2: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextU2: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 4,
  },
  TextVi: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputbg: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextInputf3: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  TextInputJj: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
    paddingBottom: 16,
    borderRadius: 8,
  },
  ButtonSolidVE: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  ButtonSolidcl: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  TextF8: {
    marginRight: 2,
  },
  ViewFj: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  ViewTR: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  KeyboardAwareScrollViewaaContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(SignUpScreen);
