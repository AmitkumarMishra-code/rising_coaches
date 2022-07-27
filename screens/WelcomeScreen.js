import React from 'react';
import Images from '../config/Images';
import {
  ButtonOutline,
  ButtonSolid,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

const WelcomeScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      scrollable={false}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <ImageBackground
        style={styles.ImageBackgrounduL}
        source={Images.ScreenShot20220627At64622AM}
        resizeMode={'cover'}
      >
        <View>
          <Text style={[styles.TextuJ, { color: theme.colors.strongInverse }]}>
            {'Welcome'}
          </Text>

          <Text style={[styles.Text_4B, { color: theme.colors.strongInverse }]}>
            {'Lets get started.'}
          </Text>
        </View>
        <View />
        <View>
          <ButtonSolid
            onPress={() => {
              try {
                navigation.navigate('SignUpScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_9r,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Sign Up'}
          />
          <ButtonOutline
            onPress={() => {
              try {
                navigation.navigate('SignInScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonOutlineCQ,
              {
                borderColor: theme.colors.lightInverse,
                color: theme.colors.strongInverse,
              },
            ]}
            title={'Log In'}
          />
        </View>
      </ImageBackground>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextuJ: {
    textAlign: 'center',
    fontSize: 36,
    fontFamily: 'System',
    fontWeight: '700',
    marginBottom: 8,
  },
  Text_4B: {
    textAlign: 'center',
    fontFamily: 'System',
    fontWeight: '500',
    fontSize: 16,
  },
  ButtonSolid_9r: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonOutlineCQ: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 16,
  },
  ImageBackgrounduL: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default withTheme(WelcomeScreen);
