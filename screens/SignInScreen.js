import React from 'react';
import * as PivotAnalysisApi from '../apis/PivotAnalysisApi.js';
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

const SignInScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const getTokenPOST = PivotAnalysisApi.useGetTokenPOST();

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
  const [passwordInput, setPasswordInput] = React.useState('');

  return (
    <ScreenContainer>
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewVBContent}
      >
        <View>
          <Text style={styles.Textlh}>{'Welcome!'}</Text>

          <Text style={[styles.TextfO, { color: theme.colors.strong }]}>
            {'Log in to get started'}
          </Text>
        </View>

        <View style={styles.View_78}>
          <Text style={[styles.TextCq, { color: theme.colors.error }]}>
            {Constants['error_message']}
          </Text>
          <TextInput
            onChangeText={newEmailInputValue => {
              try {
                setEmailInput(newEmailInputValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={[styles.TextInputtW, { borderColor: theme.colors.divider }]}
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
            style={[styles.TextInputoA, { borderColor: theme.colors.divider }]}
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
                    const response = await RisingCoachesApi.loginPOST(
                      Constants,
                      { email: emailInput, password: passwordInput }
                    );
                    const message = response.message;
                    const authDetails = response.authDetails;
                    const authTokenFinal = authDetails.authToken;
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: message,
                    });
                    setGlobalVariableValue({
                      key: 'is_loading',
                      value: false,
                    });
                    if (false) {
                      return;
                    }
                    const user_details = authDetails.user;
                    const user_id = user_details.id;
                    const name = user_details.name;
                    const email = user_details.email;
                    const profile_image = user_details.profile_image;
                    const url = profile_image.url;
                    setGlobalVariableValue({
                      key: 'user_image',
                      value: url,
                    });
                    setGlobalVariableValue({
                      key: 'auth_header',
                      value: authTokenFinal,
                    });
                    setGlobalVariableValue({
                      key: 'user_id',
                      value: user_id,
                    });
                    setGlobalVariableValue({
                      key: 'user_name',
                      value: name,
                    });
                    setGlobalVariableValue({
                      key: 'user_email',
                      value: email,
                    });
                    setEmailInput('');
                    navigation.navigate('NewsFeedScreen');
                    setPasswordInput('');
                    setGlobalVariableValue({
                      key: 'error_message',
                      value: '',
                    });
                    const pivotAuthResponse = await getTokenPOST.mutateAsync();
                    const pivotAuth = pivotAuthResponse.access;
                    setGlobalVariableValue({
                      key: 'pivot_auth_header',
                      value: 'Bearer ' + pivotAuth,
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolid_51,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={'Sign In'}
              />
            )}
          </>
          <>
            {!Constants['is_loading'] ? null : (
              <ButtonSolid
                onPress={() => {
                  try {
                    navigation.navigate('NewsFeedScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolid_93,
                  { backgroundColor: theme.colors.primary },
                ]}
                title={''}
                disabled={true}
                loading={true}
              />
            )}
          </>
          <Spacer top={16} right={8} bottom={16} left={8} />
          <View style={styles.View_20}>
            <Text style={[styles.TextyG, { color: theme.colors.strong }]}>
              {"Don't have an account?"}
            </Text>
            <Spacer top={8} right={2} bottom={8} left={2} />
            <Link
              onPress={() => {
                try {
                  navigation.navigate('SignUpScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              style={{ color: theme.colors.primary }}
              title={'Sign up.'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textlh: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextfO: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 4,
  },
  TextCq: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },
  TextInputtW: {
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
  TextInputoA: {
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
  ButtonSolid_51: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  ButtonSolid_93: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingLeft: 16,
  },
  TextyG: {
    marginRight: 2,
  },
  View_20: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  View_78: {
    paddingLeft: 36,
    paddingRight: 36,
    marginTop: 24,
  },
  KeyboardAwareScrollViewVBContent: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default withTheme(SignInScreen);
