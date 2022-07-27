import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const MemberDetailScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <RisingCoachesApi.FetchGetUserDetailGET
        method={'GET'}
        user_id={props.route?.params?.navigate_user_id ?? ''}
        onData={async fetchData => {
          try {
            const response = await RisingCoachesApi.getUserDetailGET(
              Constants,
              { user_id: null }
            );
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({ loading, error, data, refetchGetUserDetail }) => {
          const fetchData = data;
          if (!fetchData || loading) {
            return <ActivityIndicator />;
          }

          if (error) {
            return (
              <Text style={{ textAlign: 'center' }}>
                There was a problem fetching this data
              </Text>
            );
          }

          return (
            <>
              <View style={styles.ViewrD}>
                <ImageBackground
                  style={styles.ImageBackgroundG2}
                  source={{ uri: `${fetchData?.profile_image?.url}` }}
                  resizeMode={'cover'}
                >
                  <View style={styles.Viewzg}>
                    <View
                      style={[
                        styles.ViewEQ,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <View style={styles.ViewTo}>
                        <Text
                          style={[
                            styles.TextrX,
                            { color: theme.colors.surface },
                          ]}
                        >
                          {fetchData?.name}
                        </Text>
                      </View>

                      <View>
                        <ButtonOutline
                          onPress={() => {
                            try {
                              navigation.navigate('ChatScreen');
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          style={[
                            styles.ButtonOutlinela,
                            {
                              borderColor: theme.colors.surface,
                              color: theme.colors.surface,
                            },
                          ]}
                          title={'Message'}
                        />
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.ViewhP}>
                  <Text style={[styles.Textn8, { color: theme.colors.light }]}>
                    {fetchData?.job_title}
                  </Text>

                  <Text
                    style={[styles.Textza, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.current_university}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.ViewYF}>
                      <Touchable
                        onPress={() => {
                          try {
                            navigation.navigate('JobTimelineScreen');
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={styles.Touchableoh}
                      >
                        <View
                          style={[
                            styles.ViewBZ,
                            {
                              borderRadius: 8,
                              borderColor: theme.colors.lightest,
                            },
                          ]}
                        >
                          <Icon
                            name={'MaterialIcons/work'}
                            size={24}
                            color={theme.colors.primary}
                          />
                          <Spacer right={2} left={2} />
                          <Text
                            style={[
                              styles.TextpY,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'Job Timeline'}
                          </Text>
                        </View>
                      </Touchable>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <Touchable style={styles.TouchableKZ}>
                        <View
                          style={[
                            styles.ViewJX,
                            {
                              borderColor: theme.colors.lightest,
                              borderRadius: 8,
                            },
                          ]}
                        >
                          <Icon
                            name={'Entypo/back-in-time'}
                            size={20}
                            color={theme.colors.primary}
                          />
                          <Spacer right={2} left={2} />
                          <Text
                            style={[
                              styles.TextVx,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'Recent Posts'}
                          </Text>
                        </View>
                      </Touchable>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <Touchable style={styles.Touchablebu}>
                        <View
                          style={[
                            styles.ViewYI,
                            {
                              borderRadius: 8,
                              borderColor: theme.colors.lightest,
                            },
                          ]}
                        >
                          <Icon
                            name={'AntDesign/folder1'}
                            size={24}
                            color={theme.colors.primary}
                          />
                          <Spacer right={2} left={2} />
                          <Text
                            style={[
                              styles.Textbf,
                              { color: theme.colors.medium },
                            ]}
                          >
                            {'Public Folders'}
                          </Text>
                        </View>
                      </Touchable>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextAf, { color: theme.colors.strong }]}
                    >
                      {'Bio'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.TextgZ, { color: theme.colors.medium }]}
                    >
                      {fetchData?.bio}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextSi, { color: theme.colors.strong }]}
                    >
                      {'Social Media'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.ViewVW}>
                      <View style={styles.View_8P}>
                        <Text
                          style={[
                            styles.TextVb,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Facebook'}
                        </Text>
                      </View>

                      <View style={styles.ViewXP}>
                        <Text
                          style={[
                            styles.Textkt,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {null}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerLv}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewiH}>
                      <View style={styles.ViewKD}>
                        <Text
                          style={[
                            styles.TextBt,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Instagram'}
                        </Text>
                      </View>

                      <View style={styles.ViewjD}>
                        <>
                          {!fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.TextqU,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {null}
                            </Text>
                          )}
                        </>
                        <>
                          {fetchData?.min_stay ? null : (
                            <Text
                              style={[
                                styles.Textjj,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {null}
                            </Text>
                          )}
                        </>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerTL}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewUk}>
                      <View style={styles.ViewQc}>
                        <Text
                          style={[
                            styles.TextjT,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'Twitter'}
                        </Text>
                      </View>

                      <View style={styles.View_2q}>
                        <Text
                          style={[
                            styles.Text_3C,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {null}
                        </Text>
                      </View>
                    </View>
                    <Divider
                      style={styles.DividerHL}
                      color={theme.colors.lightest}
                    />
                    <View style={styles.ViewQr}>
                      <View style={styles.Viewem}>
                        <Text
                          style={[
                            styles.TextU0,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {'University Bio'}
                        </Text>
                      </View>

                      <View style={styles.ViewiR}>
                        <Text
                          style={[
                            styles.TextPF,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {null}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </RisingCoachesApi.FetchGetUserDetailGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextrX: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  ViewTo: {
    flex: 1,
  },
  ButtonOutlinela: {
    borderRadius: 8,
    fontFamily: 'Poppins_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  ViewEQ: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 8,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewzg: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ImageBackgroundG2: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  ViewrD: {
    width: '100%',
    height: 420,
  },
  Textn8: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Textza: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  TextpY: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewBZ: {
    flexDirection: 'row',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    alignItems: 'center',
    alignSelf: 'stretch',
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    justifyContent: 'center',
  },
  Touchableoh: {
    maxWidth: '30%',
  },
  TextVx: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewJX: {
    flexDirection: 'row',
    flex: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    justifyContent: 'center',
  },
  TouchableKZ: {
    maxWidth: '30%',
  },
  Textbf: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewYI: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    justifyContent: 'center',
  },
  Touchablebu: {
    maxWidth: '30%',
  },
  ViewYF: {
    flexDirection: 'row',
  },
  TextAf: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextgZ: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  TextSi: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextVb: {
    fontFamily: 'Poppins_400Regular',
  },
  View_8P: {
    flex: 1,
  },
  Textkt: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewXP: {
    flex: 1,
  },
  ViewVW: {
    flexDirection: 'row',
  },
  DividerLv: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextBt: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewKD: {
    flex: 1,
  },
  TextqU: {
    fontFamily: 'Poppins_500Medium',
  },
  Textjj: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewjD: {
    flex: 1,
  },
  ViewiH: {
    flexDirection: 'row',
  },
  DividerTL: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextjT: {
    fontFamily: 'Poppins_400Regular',
  },
  ViewQc: {
    flex: 1,
  },
  Text_3C: {
    fontFamily: 'Poppins_500Medium',
  },
  View_2q: {
    flex: 1,
  },
  ViewUk: {
    flexDirection: 'row',
  },
  DividerHL: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  TextU0: {
    fontFamily: 'Poppins_400Regular',
  },
  Viewem: {
    flex: 1,
  },
  TextPF: {
    fontFamily: 'Poppins_500Medium',
  },
  ViewiR: {
    flex: 1,
  },
  ViewQr: {
    flexDirection: 'row',
  },
  ViewhP: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(MemberDetailScreen);
