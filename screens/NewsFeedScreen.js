import React from 'react';
import * as PivotAnalysisApi from '../apis/PivotAnalysisApi.js';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  ButtonSolid,
  Checkbox,
  Circle,
  CircleImage,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const NewsFeedScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();
  const isWinner = custom => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    if ((custom = '')) {
      return true;
    } else false;
  };

  const formatScoreDate = dateString => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return CustomCode.moment(dateString).format('MMM Do');
  };

  const todayDate = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return CustomCode.moment().format('MMM Do');
  };

  // Takes image obj and returns the url within
  const getImageUrl = userImageObj => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return userImageObj.url;
  };

  // Converts a date
  const convertDate = dateString => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    // Using moment's inbuilt function to get relative time.
    return CustomCode.moment(dateString).fromNow().toString();
  };

  const { theme } = props;
  const { navigation } = props;

  const followUserPOST = RisingCoachesApi.useFollowUserPOST();
  const unfollowUserDELETE = RisingCoachesApi.useUnfollowUserDELETE();
  const addLikePOST = RisingCoachesApi.useAddLikePOST();
  const removeLikeDELETE = RisingCoachesApi.useRemoveLikeDELETE();

  const [showNav, setShowNav] = React.useState(false);

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.surface }]}
      hasTopSafeArea={false}
      hasSafeArea={false}
    >
      <>
        {!showNav ? null : (
          <Surface
            style={[
              styles.SurfaceSL,
              { backgroundColor: theme.colors.surface },
            ]}
          >
            <View
              style={[
                styles.Viewih,
                { backgroundColor: theme.colors.secondary },
              ]}
            >
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('MemberDetailScreen', {
                      navigate_user_id: Constants['user_id'],
                    });
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.Viewon}>
                  <Circle size={64} bgColor={theme.colors.surface}>
                    <CircleImage
                      source={{ uri: `${Constants['user_image']}` }}
                      size={80}
                    />
                  </Circle>

                  <View style={styles.ViewIf}>
                    <Text
                      style={[styles.Textpf, { color: theme.colors.surface }]}
                    >
                      {Constants['user_name']}
                    </Text>
                  </View>
                </View>
              </Touchable>
            </View>

            <View style={styles.View_8P}>
              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.Viewj1}>
                  <Icon name={'Feather/home'} size={24} />
                  <Text style={[styles.Textif, { color: theme.colors.strong }]}>
                    {'Home'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                    navigation.navigate('ContentRepositoryScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewFF}>
                  <Icon name={'Feather/folder'} size={24} />
                  <Text style={[styles.TexthB, { color: theme.colors.strong }]}>
                    {'Content Repository'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                    navigation.navigate('MemberDirectoryScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewIr}>
                  <Icon name={'AntDesign/contacts'} size={24} />
                  <Text style={[styles.TextPG, { color: theme.colors.strong }]}>
                    {'Directory'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                    navigation.navigate('InboxScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.Viewft}>
                  <Icon name={'Feather/message-square'} size={24} />
                  <Text style={[styles.TextlA, { color: theme.colors.strong }]}>
                    {'Inbox'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                    navigation.navigate('CalendarScreen_coaa8c4F');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewkJ}>
                  <Icon name={'AntDesign/calendar'} size={24} />
                  <Text style={[styles.TextfN, { color: theme.colors.strong }]}>
                    {'Calendar'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                    navigation.navigate('OpportunitiesScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewKe}>
                  <Icon name={'Ionicons/business-outline'} size={24} />
                  <Text style={[styles.Textzr, { color: theme.colors.strong }]}>
                    {'Opportunities'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setShowNav(false);
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.View_18}>
                  <Icon name={'Feather/user'} size={24} />
                  <Text style={[styles.TextTG, { color: theme.colors.strong }]}>
                    {'Profile'}
                  </Text>
                </View>
              </Touchable>

              <Touchable
                onPress={() => {
                  try {
                    setGlobalVariableValue({
                      key: 'auth_header',
                      value: '',
                    });
                    navigation.navigate('WelcomeScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
              >
                <View style={styles.ViewM9}>
                  <Icon name={'Feather/log-out'} size={24} />
                  <Text style={[styles.Texte9, { color: theme.colors.strong }]}>
                    {'Sign out'}
                  </Text>
                </View>
              </Touchable>
            </View>
          </Surface>
        )}
      </>
      <View style={styles.ViewhC}>
        <View
          style={[
            styles.View_6H,
            { backgroundColor: theme.colors.custom_rgb255_255_255 },
          ]}
        >
          <View style={styles.ViewZf}>
            <Icon
              name={'Feather/home'}
              size={26}
              color={theme.colors.secondary}
            />
            <Text style={[styles.Textsa, { color: theme.colors.secondary }]}>
              {'Rising Coaches'}
            </Text>
          </View>
          <Checkbox
            onPress={newCheckboxValue => {
              try {
                setShowNav(newCheckboxValue);
              } catch (err) {
                console.error(err);
              }
            }}
            status={showNav}
            color={theme.colors.secondary}
            uncheckedColor={theme.colors.secondary}
            checkedIcon={'Feather/x'}
            uncheckedIcon={'Feather/menu'}
            size={32}
          />
        </View>

        <View
          style={[styles.ViewFs, { backgroundColor: theme.colors.background }]}
        >
          <View style={styles.View_8t}>
            <Surface
              style={[
                styles.Surface_8O,
                { backgroundColor: theme.colors.primary, borderRadius: 6 },
              ]}
            >
              <Text style={[styles.TextI6, { color: theme.colors.surface }]}>
                {todayDate()}
              </Text>

              <Text style={[styles.TextuX, { color: theme.colors.surface }]}>
                {'NCAA'}
              </Text>
            </Surface>

            <ScrollView
              style={styles.ScrollViewTZ}
              contentContainerStyle={styles.ScrollViewTZContent}
              showsVerticalScrollIndicator={false}
              bounces={true}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <PivotAnalysisApi.FetchGetScoresGET
                league_id={1}
                limit={30}
                start_date_after={'2021-11-30'}
                state_date_before={'2021-11-30'}
              >
                {({ loading, error, data, refetchGetScores }) => {
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
                    <FlatList
                      data={fetchData?.results}
                      listKey={'nSlUEAFF'}
                      keyExtractor={({ item }) =>
                        item?.id || item?.uuid || item
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <View style={styles.ViewOt}>
                            <Surface
                              style={[
                                styles.SurfaceYf,
                                {
                                  borderRadius: 6,
                                  backgroundColor: theme.colors.surface,
                                },
                              ]}
                              elevation={0}
                            >
                              <View style={styles.View_5A}>
                                <View style={styles.ViewVx}>
                                  <View style={styles.View_8d}>
                                    <CircleImage
                                      style={styles.CircleImageqf}
                                      source={{
                                        uri: `${listData?.home?.team?.image}`,
                                      }}
                                      size={60}
                                    />
                                    <Text
                                      style={[
                                        styles.TexttL,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {listData?.home?.team?.name_short}
                                      {': '}
                                      {listData?.home_points}
                                    </Text>
                                  </View>

                                  <View style={styles.View_9b}>
                                    <CircleImage
                                      style={styles.CircleImageYB}
                                      source={{
                                        uri: `${listData?.visitor?.team?.image}`,
                                      }}
                                      size={60}
                                    />
                                    <Text
                                      style={[
                                        styles.TextdA,
                                        { color: theme.colors.strong },
                                      ]}
                                    >
                                      {listData?.visitor?.team?.name_short}
                                      {': '}
                                      {listData?.visitor_points}
                                    </Text>
                                  </View>
                                </View>

                                <View style={styles.ViewfR}>
                                  <View style={styles.Viewhn}>
                                    <Text
                                      style={[
                                        styles.Text_2J,
                                        { color: theme.colors.medium },
                                      ]}
                                    >
                                      {'Final'}
                                    </Text>
                                  </View>

                                  <View style={styles.ViewTy}>
                                    <Text
                                      style={[
                                        styles.Textkz,
                                        { color: theme.colors.medium },
                                      ]}
                                    >
                                      {formatScoreDate(listData?.start_time)}
                                    </Text>
                                  </View>
                                </View>
                              </View>
                            </Surface>
                          </View>
                        );
                      }}
                      contentContainerStyle={styles.FlatListnSContent}
                      numColumns={1}
                      horizontal={true}
                    />
                  );
                }}
              </PivotAnalysisApi.FetchGetScoresGET>
            </ScrollView>
          </View>

          <Touchable
            onPress={() => {
              try {
                navigation.navigate('LiveMeetingScreen');
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.TouchablewI}
          >
            <View style={styles.Viewks}>
              <IconButton icon={'MaterialIcons/live-tv'} size={32} />
              <Text style={[styles.Text_1B, { color: theme.colors.strong }]}>
                {'Live Now: Rising Coaches Announcements'}
              </Text>
            </View>
          </Touchable>

          <View style={styles.ViewKp}>
            <View style={styles.View_6C}>
              <ButtonSolid
                onPress={() => {
                  try {
                    navigation.navigate('CreatePostScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.ButtonSolidhi,
                  { backgroundColor: theme.colors.secondary },
                ]}
                title={'+ Add Post '}
              />
            </View>

            <View style={styles.ViewII}>
              <IconButton
                icon={'Foundation/filter'}
                size={40}
                color={theme.colors.primary}
              />
            </View>
          </View>
          <Divider style={styles.DividerON} color={theme.colors.lightest} />
          <KeyboardAwareScrollView
            contentContainerStyle={styles.KeyboardAwareScrollViewNMContent}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps={'never'}
          >
            <>
              {!Constants['is_loading'] ? null : (
                <ButtonOutline
                  style={styles.ButtonOutlinejC}
                  title={''}
                  disabled={true}
                  loading={true}
                />
              )}
            </>
            <RisingCoachesApi.FetchGetFeedGET>
              {({ loading, error, data, refetchGetFeed }) => {
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
                  <FlatList
                    data={fetchData?.items}
                    listKey={'8r43f59I'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('PostDetailsScreen', {
                                feed_post_id: listData?.id,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Surface
                            style={[
                              styles.Surface_86,
                              {
                                backgroundColor: theme.colors.surface,
                                borderRadius: 20,
                              },
                            ]}
                            elevation={1}
                          >
                            <View style={styles.VieweY}>
                              <View style={styles.Viewk8}>
                                <View
                                  style={[
                                    styles.Viewvo,
                                    {
                                      backgroundColor:
                                        theme.colors.custom_rgb245_245_247,
                                      borderRadius: 10,
                                    },
                                  ]}
                                >
                                  <CircleImage
                                    source={{
                                      uri: `${getImageUrl(
                                        listData?.author?.profile_image
                                      )}`,
                                    }}
                                    size={50}
                                  />
                                </View>

                                <View style={styles.ViewmS}>
                                  <Text
                                    style={[
                                      styles.TextCa,
                                      { color: theme.colors.medium },
                                    ]}
                                  >
                                    {listData?.author?.name}
                                  </Text>

                                  <Text
                                    style={[
                                      styles.Text_8y,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {'Basketball Coach'}
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.ViewwM}>
                                <>
                                  {listData?.isMine ? null : (
                                    <View>
                                      <>
                                        {listData?.isFollowed ? null : (
                                          <ButtonSolid
                                            onPress={async () => {
                                              try {
                                                await followUserPOST.mutateAsync(
                                                  {
                                                    followed_id:
                                                      listData?.author_user_id,
                                                  }
                                                );
                                                await refetchGetFeed();
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                            style={[
                                              styles.ButtonSolidMU,
                                              {
                                                backgroundColor:
                                                  theme.colors.primary,
                                              },
                                            ]}
                                            title={'Follow'}
                                          />
                                        )}
                                      </>
                                      <>
                                        {!listData?.isFollowed ? null : (
                                          <ButtonOutline
                                            onPress={async () => {
                                              try {
                                                await unfollowUserDELETE.mutateAsync(
                                                  {
                                                    followed_id:
                                                      listData?.author_user_id,
                                                  }
                                                );
                                                await refetchGetFeed();
                                              } catch (err) {
                                                console.error(err);
                                              }
                                            }}
                                            style={styles.ButtonOutlineAY}
                                            title={'Following'}
                                          />
                                        )}
                                      </>
                                    </View>
                                  )}
                                </>
                                <Icon
                                  style={styles.IconJU}
                                  name={
                                    'MaterialCommunityIcons/dots-horizontal-circle-outline'
                                  }
                                  size={35}
                                  color={theme.colors.secondary}
                                />
                              </View>
                            </View>

                            <View style={styles.ViewbI}>
                              <Text style={{ color: theme.colors.strong }}>
                                {listData?.post_content}
                              </Text>
                            </View>

                            <View style={[styles.ViewsS, { borderRadius: 12 }]}>
                              <ImageBackground
                                style={styles.ImageBackground_5y}
                                source={{ uri: `${listData?.image?.url}` }}
                                resizeMode={'cover'}
                              >
                                <View style={styles.ViewMZ}>
                                  <>
                                    {!listData?.isSponsored ? null : (
                                      <View
                                        style={[
                                          styles.ViewbN,
                                          {
                                            backgroundColor:
                                              theme.colors.primary,
                                            borderRadius: 8,
                                          },
                                        ]}
                                      >
                                        <View style={styles.ViewWm}>
                                          <Text
                                            style={[
                                              styles.Text_7z,
                                              { color: theme.colors.surface },
                                            ]}
                                          >
                                            {'Sponsored'}
                                          </Text>
                                        </View>
                                      </View>
                                    )}
                                  </>
                                </View>
                              </ImageBackground>
                            </View>

                            <View style={styles.ViewYL}>
                              <View style={styles.ViewMx}>
                                <View style={styles.Viewhl}>
                                  <>
                                    {listData?.liked ? null : (
                                      <Touchable
                                        onPress={async () => {
                                          try {
                                            await addLikePOST.mutateAsync({
                                              feed_post_id: listData?.id,
                                            });
                                            await refetchGetFeed();
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }}
                                      >
                                        <>
                                          {listData?.liked ? null : (
                                            <Icon
                                              style={styles.Iconqd}
                                              name={'AntDesign/hearto'}
                                              size={20}
                                              color={theme.colors.error}
                                            />
                                          )}
                                        </>
                                      </Touchable>
                                    )}
                                  </>
                                  <>
                                    {!listData?.liked ? null : (
                                      <Touchable
                                        onPress={async () => {
                                          try {
                                            await removeLikeDELETE.mutateAsync({
                                              post_id: listData?.id,
                                            });
                                            await refetchGetFeed();
                                          } catch (err) {
                                            console.error(err);
                                          }
                                        }}
                                      >
                                        <>
                                          {!listData?.liked ? null : (
                                            <Icon
                                              style={styles.Iconiy}
                                              name={'AntDesign/heart'}
                                              size={20}
                                              color={theme.colors.error}
                                            />
                                          )}
                                        </>
                                      </Touchable>
                                    )}
                                  </>
                                  <Text style={{ color: theme.colors.strong }}>
                                    {listData?.like_count}
                                  </Text>
                                </View>

                                <View style={styles.Viewdo}>
                                  <Icon
                                    style={styles.IconfU}
                                    name={'Ionicons/chatbox-ellipses'}
                                    size={20}
                                    color={theme.colors.medium}
                                  />
                                  <Text style={{ color: theme.colors.strong }}>
                                    {
                                      listData?.number_of_comments_of_news_feed_posts
                                    }
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.View_4G}>
                                <Text
                                  style={[
                                    styles.Textq9,
                                    { color: theme.colors.strong },
                                  ]}
                                >
                                  {convertDate(listData?.created_at)}
                                </Text>
                              </View>
                            </View>
                            <FlatList
                              data={listData?.last_two_comments?.items}
                              listKey={'LSSEuytA'}
                              keyExtractor={({ item }) =>
                                item?.id || item?.uuid || item
                              }
                              renderItem={({ item }) => {
                                const listData = item;
                                return (
                                  <>
                                    <Divider
                                      style={styles.Divider_5L}
                                      color={theme.colors.divider}
                                    />
                                    <View style={styles.ViewmI}>
                                      <View
                                        style={[
                                          styles.ViewSC,
                                          {
                                            backgroundColor:
                                              theme.colors
                                                .custom_rgb245_245_247,
                                            borderRadius: 10,
                                          },
                                        ]}
                                      >
                                        <CircleImage
                                          source={{
                                            uri: `${getImageUrl(
                                              listData?.comment_author
                                                ?.profile_image
                                            )}`,
                                          }}
                                          size={30}
                                        />
                                      </View>

                                      <View style={styles.ViewLL}>
                                        <Text
                                          style={[
                                            styles.TextMx,
                                            { color: theme.colors.secondary },
                                          ]}
                                        >
                                          {listData?.comment_author?.name}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Textjw,
                                            { color: theme.colors.strong },
                                          ]}
                                        >
                                          {listData?.comment_text}
                                        </Text>
                                      </View>
                                    </View>
                                  </>
                                );
                              }}
                              style={styles.FlatListLS}
                              contentContainerStyle={styles.FlatListLSContent}
                              numColumns={1}
                            />
                            <View>
                              <Text
                                style={[
                                  styles.Text_5I,
                                  { color: theme.colors.primary },
                                ]}
                              >
                                {'See more'}
                              </Text>
                            </View>
                          </Surface>
                        </Touchable>
                      );
                    }}
                    style={styles.FlatList_8r}
                    contentContainerStyle={styles.FlatList_8rContent}
                    numColumns={1}
                    horizontal={false}
                  />
                );
              }}
            </RisingCoachesApi.FetchGetFeedGET>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textpf: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewIf: {
    marginLeft: 12,
    flex: 1,
  },
  Viewon: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewih: {
    paddingLeft: 24,
    paddingTop: 72,
    paddingRight: 24,
    paddingBottom: 24,
  },
  Textif: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  Viewj1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  TexthB: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewFF: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  TextPG: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewIr: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  TextlA: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  Viewft: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  TextfN: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewkJ: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  Textzr: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewKe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingRight: 24,
    paddingTop: 12,
    paddingBottom: 12,
  },
  TextTG: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  View_18: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 24,
    paddingTop: 12,
    paddingRight: 24,
    paddingBottom: 12,
  },
  Texte9: {
    marginLeft: 8,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 18,
  },
  ViewM9: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 24,
    paddingLeft: 24,
  },
  View_8P: {
    flex: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
  SurfaceSL: {
    flex: 2,
    position: 'absolute',
    top: 0,
    height: '100%',
    zIndex: 5,
    width: '80%',
  },
  Textsa: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 20,
    marginLeft: 6,
    flex: 1,
  },
  ViewZf: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  View_6H: {
    paddingLeft: 20,
    paddingTop: 60,
    paddingRight: 20,
    paddingBottom: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextI6: {
    fontFamily: 'Roboto_500Medium',
    alignSelf: 'center',
    fontSize: 16,
  },
  TextuX: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
    alignSelf: 'center',
  },
  Surface_8O: {
    minHeight: 40,
    width: 71,
    height: 71,
    justifyContent: 'space-around',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 15,
  },
  CircleImageqf: {
    width: 20,
    height: 20,
  },
  TexttL: {
    marginLeft: 5,
  },
  View_8d: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  CircleImageYB: {
    width: 20,
    height: 20,
  },
  TextdA: {
    marginLeft: 5,
  },
  View_9b: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ViewVx: {
    marginLeft: 5,
    alignSelf: 'flex-start',
  },
  Text_2J: {
    marginLeft: 5,
  },
  Viewhn: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  Textkz: {
    marginLeft: 5,
  },
  ViewTy: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ViewfR: {
    marginLeft: 5,
    alignSelf: 'flex-end',
  },
  View_5A: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignContent: 'center',
  },
  SurfaceYf: {
    minHeight: 40,
    width: 200,
    height: 71,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  ViewOt: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'stretch',
    alignSelf: 'stretch',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    marginTop: 10,
  },
  FlatListnSContent: {
    flex: 1,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  FetchE5: {
    minHeight: 40,
  },
  ScrollViewTZ: {
    flexGrow: 1,
  },
  ScrollViewTZContent: {
    alignContent: 'stretch',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  View_8t: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  Text_1B: {
    fontFamily: 'Roboto_400Regular',
    marginLeft: 5,
  },
  Viewks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TouchablewI: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
  },
  ButtonSolidhi: {
    borderRadius: 8,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  View_6C: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    width: '70%',
  },
  ViewII: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ViewKp: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 0,
    marginBottom: 10,
  },
  DividerON: {
    height: 1,
  },
  ButtonOutlinejC: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  Viewvo: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextCa: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 2,
  },
  Text_8y: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewmS: {
    marginLeft: 10,
  },
  Viewk8: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonSolidMU: {
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonOutlineAY: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'Roboto_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  IconJU: {
    marginLeft: 10,
  },
  ViewwM: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  VieweY: {
    flexDirection: 'row',
    marginBottom: 3,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  ViewbI: {
    marginBottom: 5,
    marginTop: 5,
    alignSelf: 'flex-start',
    alignContent: 'stretch',
  },
  Text_7z: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  ViewWm: {
    flex: 1,
  },
  ViewbN: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 8,
  },
  ViewMZ: {
    minHeight: 50,
    maxWidth: '40%',
  },
  ImageBackground_5y: {
    width: '100%',
    height: '100%',
    minWidth: 320,
  },
  ViewsS: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    overflow: 'hidden',
    maxWidth: '100%',
    maxHeight: 300,
    minWidth: 280,
    minHeight: 180,
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 8,
  },
  Iconqd: {
    marginLeft: 10,
    marginRight: 5,
  },
  Iconiy: {
    marginLeft: 10,
    marginRight: 5,
  },
  Viewhl: {
    flexDirection: 'row',
  },
  IconfU: {
    marginLeft: 10,
    marginRight: 5,
  },
  Viewdo: {
    flexDirection: 'row',
  },
  ViewMx: {
    flexDirection: 'row',
  },
  Textq9: {
    alignSelf: 'flex-end',
  },
  View_4G: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'flex-end',
  },
  ViewYL: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  Divider_5L: {
    height: 1,
    width: '100%',
    marginTop: 10,
  },
  ViewSC: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  TextMx: {
    fontFamily: 'Roboto_700Bold',
    marginTop: 5,
    marginBottom: 2,
    textAlign: 'left',
  },
  Textjw: {
    textAlign: 'left',
  },
  ViewLL: {
    alignSelf: 'stretch',
  },
  ViewmI: {
    marginTop: 8,
    alignSelf: 'stretch',
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  FlatListLS: {
    width: '100%',
  },
  FlatListLSContent: {
    flex: 1,
  },
  Text_5I: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'left',
  },
  Surface_86: {
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'stretch',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    justifyContent: 'center',
    minHeight: 400,
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
  },
  FlatList_8r: {
    width: '100%',
  },
  FlatList_8rContent: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Fetchvl: {
    minHeight: 40,
  },
  KeyboardAwareScrollViewNMContent: {
    alignItems: 'center',
  },
  ViewFs: {
    flex: 1,
  },
  ViewhC: {
    flex: 1,
  },
  screen: {
    flexDirection: 'row',
  },
});

export default withTheme(NewsFeedScreen);
