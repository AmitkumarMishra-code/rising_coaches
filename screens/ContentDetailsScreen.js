import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { ScreenContainer, Spacer, WebView, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ContentDetailsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const getImageUrl = userImageObj => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return userImageObj.url;
  };

  const { theme } = props;

  const [new_comment, setNew_comment] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <RisingCoachesApi.FetchGetContentDetailsGET
        method={'GET'}
        folder_content_id={props.route?.params?.navigation_content_id ?? ''}
        onData={async fetchData => {
          try {
            await RisingCoachesApi.getContentDetailsGET(Constants, {
              folder_content_id:
                props.route?.params?.navigation_content_id ?? '',
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        {({ loading, error, data, refetchGetContentDetails }) => {
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
              <>
                {!fetchData?.isFile ? null : (
                  <View style={styles.ViewDV}>
                    <>
                      {!fetchData?.isFile ? null : (
                        <WebView
                          style={styles.WebView_3D}
                          source={{ uri: `${fetchData?.file?.url}` }}
                        />
                      )}
                    </>
                  </View>
                )}
              </>
              <>
                {!fetchData?.isVideo ? null : (
                  <View style={styles.ViewE5}>
                    <>
                      {!fetchData?.isVideo ? null : (
                        <WebView
                          style={styles.WebViewLM}
                          source={{ uri: `${fetchData?.youtube_render_link}` }}
                        />
                      )}
                    </>
                  </View>
                )}
              </>
              <>
                {!fetchData?.isImage ? null : (
                  <View style={styles.ViewhQ}>
                    <ImageBackground
                      style={styles.ImageBackgroundya}
                      source={{ uri: `${fetchData?.image?.url}` }}
                      resizeMode={'contain'}
                    />
                  </View>
                )}
              </>
              <Spacer top={12} right={8} bottom={12} left={8} />
              <View>
                <View style={styles.Viewu2}>
                  <Text style={[styles.Textps, { color: theme.colors.light }]}>
                    {fetchData?.content_type}
                  </Text>

                  <Text
                    style={[styles.Text_8Q, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.content_title}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.ViewRr}>
                      <View
                        style={[
                          styles.ViewYx,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Text
                          style={[
                            styles.TextLq,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {'Uploaded by '}
                          {fetchData && fetchData['_user']?.name}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.View_3S,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Text_2H,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {Constants['user_id']}
                          {' mins ago'}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextTq, { color: theme.colors.strong }]}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.Text_2j, { color: theme.colors.medium }]}
                    >
                      {fetchData?.text_content}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </RisingCoachesApi.FetchGetContentDetailsGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  WebView_3D: {
    flex: 1,
  },
  ViewDV: {
    width: '100%',
    height: 420,
  },
  WebViewLM: {
    flex: 1,
  },
  ViewE5: {
    width: '100%',
    height: 420,
  },
  ImageBackgroundya: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  ViewhQ: {
    width: '100%',
    height: 420,
  },
  Textps: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  Text_8Q: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  TextLq: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  ViewYx: {
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
  Text_2H: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View_3S: {
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
  ViewRr: {
    flexDirection: 'row',
  },
  TextTq: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  Text_2j: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  Viewu2: {
    paddingLeft: 24,
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(ContentDetailsScreen);
