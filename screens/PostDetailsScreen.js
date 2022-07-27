import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  CircleImage,
  Divider,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const PostDetailsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const getImageUrl = userImageObj => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return userImageObj.url;
  };

  const { theme } = props;

  const createCommentPOST = RisingCoachesApi.useCreateCommentPOST();

  const [new_comment, setNew_comment] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <RisingCoachesApi.FetchGetPostGET
        method={'GET'}
        post_id={props.route?.params?.feed_post_id ?? ''}
      >
        {({ loading, error, data, refetchGetPost }) => {
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
              <View style={styles.ViewLT}>
                <ImageBackground
                  style={styles.ImageBackgroundfV}
                  source={{ uri: `${fetchData?.image?.url}` }}
                  resizeMode={'cover'}
                >
                  <View style={styles.Viewbp}>
                    <View
                      style={[
                        styles.ViewV7,
                        {
                          backgroundColor: theme.colors.primary,
                          borderRadius: 8,
                        },
                      ]}
                    >
                      <View style={styles.Viewpd}>
                        <Text
                          style={[
                            styles.TextbV,
                            { color: theme.colors.surface },
                          ]}
                        >
                          {fetchData?.post_title}
                        </Text>
                      </View>
                    </View>
                  </View>
                </ImageBackground>
              </View>

              <View>
                <View style={styles.ViewL1}>
                  <Text style={[styles.TextSB, { color: theme.colors.light }]}>
                    {fetchData?.city}
                  </Text>

                  <Text
                    style={[styles.TextKo, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.ViewAD}>
                      <View
                        style={[
                          styles.ViewiF,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'AntDesign/heart'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Textha,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.like_count}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.ViewGY,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'FontAwesome/commenting'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Texth5,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.number_of_comments_of_news_feed_posts}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.View_3C,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Textvs,
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
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.TextVN, { color: theme.colors.medium }]}
                    >
                      {fetchData?.post_content}
                    </Text>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.Textqa, { color: theme.colors.strong }]}
                    >
                      {'Comments'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <View style={styles.Viewif}>
                      <TextInput
                        onChangeText={newTextInputValue => {
                          try {
                            setNew_comment(newTextInputValue);
                          } catch (err) {
                            console.error(err);
                          }
                        }}
                        style={[
                          styles.TextInputNh,
                          { borderColor: theme.colors.divider },
                        ]}
                        placeholder={'Leave a comment...'}
                        value={new_comment}
                        multiline={true}
                      />
                      <>
                        {Constants['is_loading'] ? null : (
                          <ButtonSolid
                            onPress={async () => {
                              try {
                                setGlobalVariableValue({
                                  key: 'is_loading',
                                  value: true,
                                });
                                await createCommentPOST.mutateAsync({
                                  author_user_id: Constants['user_id'],
                                  comment_text: new_comment,
                                  feed_post_id:
                                    props.route?.params?.feed_post_id ?? '',
                                });
                                setGlobalVariableValue({
                                  key: 'is_loading',
                                  value: false,
                                });
                                await refetchGetPost();
                                setGlobalVariableValue({
                                  key: 'is_loading',
                                  value: '',
                                });
                                setNew_comment('');
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonSolidUZ,
                              { backgroundColor: theme.colors.primary },
                            ]}
                            title={'Submit'}
                          />
                        )}
                      </>
                      <>
                        {!Constants['is_loading'] ? null : (
                          <ButtonSolid
                            onPress={async () => {
                              try {
                                setGlobalVariableValue({
                                  key: 'is_loading',
                                  value: true,
                                });
                                await createCommentPOST.mutateAsync({
                                  author_user_id: Constants['user_id'],
                                  comment_text: new_comment,
                                  feed_post_id:
                                    props.route?.params?.feed_post_id ?? '',
                                });
                                setGlobalVariableValue({
                                  key: 'is_loading',
                                  value: false,
                                });
                                await refetchGetPost();
                              } catch (err) {
                                console.error(err);
                              }
                            }}
                            style={[
                              styles.ButtonSolidwa,
                              { backgroundColor: theme.colors.primary },
                            ]}
                            title={''}
                            disabled={true}
                            loading={true}
                          />
                        )}
                      </>
                    </View>
                    <FlatList
                      data={
                        fetchData && fetchData['_comments_of_news_feed_posts']
                      }
                      listKey={'Yhjz0gXX'}
                      keyExtractor={({ item }) =>
                        item?.id || item?.uuid || item
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <>
                            <Divider
                              style={styles.DividerIA}
                              color={theme.colors.divider}
                            />
                            <View style={styles.ViewkW}>
                              <View
                                style={[
                                  styles.Viewh9,
                                  {
                                    backgroundColor:
                                      theme.colors.custom_rgb245_245_247,
                                    borderRadius: 10,
                                  },
                                ]}
                              >
                                <CircleImage
                                  source={{
                                    uri: `${listData?.commenting_user?.profile_image?.url}`,
                                  }}
                                  size={30}
                                />
                              </View>

                              <View style={styles.Viewdi}>
                                <Text
                                  style={[
                                    styles.TextS6,
                                    { color: theme.colors.secondary },
                                  ]}
                                >
                                  {listData?.commenting_user?.name}
                                </Text>

                                <Text style={{ color: theme.colors.strong }}>
                                  {listData?.comment_text}
                                </Text>
                              </View>
                            </View>
                          </>
                        );
                      }}
                      style={styles.FlatListYh}
                      contentContainerStyle={styles.FlatListYhContent}
                      numColumns={1}
                    />
                    <Divider
                      style={styles.DividerOF}
                      color={theme.colors.lightest}
                    />
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                </View>
              </View>
            </>
          );
        }}
      </RisingCoachesApi.FetchGetPostGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextbV: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  Viewpd: {
    flex: 1,
  },
  ViewV7: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 8,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbp: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ImageBackgroundfV: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  ViewLT: {
    width: '100%',
    height: 420,
  },
  TextSB: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  TextKo: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  Textha: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewiF: {
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
  Texth5: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  ViewGY: {
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
  Textvs: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  View_3C: {
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
  ViewAD: {
    flexDirection: 'row',
  },
  TextKv: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextVN: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  Textqa: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  TextInputNh: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    paddingLeft: 8,
    width: '70%',
  },
  ButtonSolidUZ: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  ButtonSolidwa: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    width: 80,
  },
  Viewif: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  DividerIA: {
    height: 1,
    width: '100%',
    marginTop: 10,
  },
  Viewh9: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  TextS6: {
    fontFamily: 'Roboto_700Bold',
    marginTop: 5,
    marginBottom: 2,
    textAlign: 'left',
  },
  Viewdi: {
    alignSelf: 'flex-start',
  },
  ViewkW: {
    marginTop: 8,
    alignSelf: 'stretch',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlatListYh: {
    width: '100%',
  },
  FlatListYhContent: {
    flex: 1,
  },
  DividerOF: {
    height: 1,
    marginTop: 12,
    marginBottom: 12,
  },
  ViewL1: {
    paddingLeft: 24,
    paddingTop: 0,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(PostDetailsScreen);
