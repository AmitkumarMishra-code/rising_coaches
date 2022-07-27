import React from 'react';
import * as AblyChatApi from '../apis/AblyChatApi.js';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import {
  Checkbox,
  Divider,
  Icon,
  IconButton,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const InboxScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const followUserPOST = RisingCoachesApi.useFollowUserPOST();
  const unfollowUserDELETE = RisingCoachesApi.useUnfollowUserDELETE();

  const [isAll, setIsAll] = React.useState(true);
  const [isSearch, setIsSearch] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');
  const [textInputValue2, setTextInputValue2] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} hasTopSafeArea={true}>
      <View style={styles.ViewRS}>
        <View style={styles.Viewby}>
          <View style={styles.ViewTh}>
            <>
              {!isSearch ? null : (
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue2(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInputQg,
                    { borderColor: theme.colors.divider },
                  ]}
                  placeholder={'Find a user'}
                  value={textInputValue2}
                  autoFocus={true}
                />
              )}
            </>
          </View>

          <View style={styles.Viewaf}>
            <>
              {isSearch ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsSearch(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon
                    name={'AntDesign/search1'}
                    size={18}
                    color={theme.colors.custom_rgb189_198_212}
                  />
                </Touchable>
              )}
            </>
            <>
              {!isSearch ? null : (
                <Touchable
                  onPress={() => {
                    try {
                      setIsSearch(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <Icon
                    name={'Feather/x'}
                    size={18}
                    color={theme.colors.custom_rgb189_198_212}
                  />
                </Touchable>
              )}
            </>
          </View>
        </View>

        <View style={styles.ViewY5}>
          <View style={styles.View_0K}>
            <Touchable
              onPress={() => {
                try {
                  setIsAll(true);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={[
                  styles.TextIy,
                  { color: theme.colors.custom_rgb149_158_172 },
                ]}
              >
                {'Single'}
              </Text>
              <>
                {!isAll ? null : (
                  <Divider
                    style={styles.DividerZC}
                    color={theme.colors.primary}
                  />
                )}
              </>
            </Touchable>

            <Touchable
              onPress={() => {
                try {
                  setIsAll(false);
                } catch (err) {
                  console.error(err);
                }
              }}
            >
              <Text
                style={[
                  styles.TextL6,
                  { color: theme.colors.custom_rgb149_158_172 },
                ]}
              >
                {'Group'}
              </Text>
              <>
                {isAll ? null : (
                  <Divider
                    style={styles.Divider_5I}
                    color={theme.colors.primary}
                  />
                )}
              </>
            </Touchable>
          </View>

          <View style={styles.ViewTX}>
            <Text style={[styles.TextrB, { color: theme.colors.strong }]}>
              {'Start New Chat'}
            </Text>
            <IconButton
              onPress={() => {
                try {
                  navigation.navigate('StartNewChatScreen');
                } catch (err) {
                  console.error(err);
                }
              }}
              icon={'AntDesign/pluscircle'}
              size={32}
            />
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewDw,
              { backgroundColor: theme.colors.custom_rgb223_223_223 },
            ]}
          />
        </View>
      </View>
      <>
        {!isAll ? null : (
          <ScrollView
            contentContainerStyle={styles.ScrollViewAaContent}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <AblyChatApi.FetchGetUserChatroomsGET>
              {({ loading, error, data, refetchGetUserChatrooms }) => {
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
                    listKey={'Nz6r97K7'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('ChatScreen', {
                                chatroom_id: listData?.id,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <View style={styles.View_4I}>
                            <View style={styles.ViewAZ}>
                              <FlatList
                                data={listData?.not_me_members}
                                listKey={'6dPIRdDm'}
                                keyExtractor={({ item }) =>
                                  item?.id || item?.uuid || item
                                }
                                renderItem={({ item }) => {
                                  const listData = item;
                                  return (
                                    <View
                                      style={[
                                        styles.ViewH2,
                                        {
                                          backgroundColor:
                                            theme.colors.custom_rgb245_245_247,
                                          borderRadius: 10,
                                        },
                                      ]}
                                    >
                                      <View style={styles.ViewOC}>
                                        <Text
                                          style={[
                                            styles.Textku,
                                            {
                                              color:
                                                theme.colors
                                                  .custom_rgb149_158_172,
                                            },
                                          ]}
                                          ellipsizeMode={'tail'}
                                          numberOfLines={1}
                                        >
                                          {listData?.name}
                                        </Text>
                                      </View>
                                      <Image
                                        style={styles.ImageuP}
                                        source={{
                                          uri: `${listData?.profile_image?.url}`,
                                        }}
                                        resizeMode={'cover'}
                                      />
                                    </View>
                                  );
                                }}
                                contentContainerStyle={
                                  styles.FlatList_6dContent
                                }
                                numColumns={1}
                              />
                              <View style={styles.Viewbb}>
                                <Text
                                  style={[
                                    styles.TextVJ,
                                    { color: theme.colors.primaryTitleUiBaeg },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {listData?.title}
                                </Text>
                              </View>
                            </View>
                          </View>
                          <Divider
                            style={styles.DividerzQ}
                            color={theme.colors.divider}
                          />
                        </Touchable>
                      );
                    }}
                    numColumns={1}
                  />
                );
              }}
            </AblyChatApi.FetchGetUserChatroomsGET>
          </ScrollView>
        )}
      </>
      <>
        {isAll ? null : (
          <ScrollView
            contentContainerStyle={styles.ScrollViewrcContent}
            showsVerticalScrollIndicator={true}
            bounces={true}
          >
            <RisingCoachesApi.FetchGetAllUsersGET>
              {({ loading, error, data, refetchGetAllUsers }) => {
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
                    listKey={'fgXantSL'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <>
                          {!listData?.isFollowed ? null : (
                            <Touchable
                              onPress={() => {
                                try {
                                  navigation.navigate('MemberDetailScreen', {
                                    navigate_user_id: listData?.id,
                                  });
                                } catch (err) {
                                  console.error(err);
                                }
                              }}
                            >
                              <View style={styles.Viewkt}>
                                <View style={styles.ViewJr}>
                                  <View
                                    style={[
                                      styles.Vieww4,
                                      {
                                        backgroundColor:
                                          theme.colors.custom_rgb245_245_247,
                                        borderRadius: 10,
                                      },
                                    ]}
                                  >
                                    <Image
                                      style={styles.Imagetd}
                                      source={{
                                        uri: `${listData?.profile_image?.url}`,
                                      }}
                                      resizeMode={'cover'}
                                    />
                                  </View>

                                  <View style={styles.Viewa8}>
                                    <Text
                                      style={[
                                        styles.TextLr,
                                        {
                                          color:
                                            theme.colors.primaryTitleUiBaeg,
                                        },
                                      ]}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                    >
                                      {listData?.name}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.TextQ4,
                                        {
                                          color:
                                            theme.colors.custom_rgb149_158_172,
                                        },
                                      ]}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                    >
                                      {listData?.job_title}
                                    </Text>

                                    <Text
                                      style={[
                                        styles.Textzn,
                                        {
                                          color:
                                            theme.colors.custom_rgb149_158_172,
                                        },
                                      ]}
                                      ellipsizeMode={'tail'}
                                      numberOfLines={1}
                                    >
                                      {listData?.current_university}
                                    </Text>
                                  </View>
                                </View>

                                <View style={styles.ViewA3}>
                                  <Checkbox
                                    onCheck={async () => {
                                      try {
                                        await followUserPOST.mutateAsync({
                                          followed_id: listData?.id,
                                        });
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    onUncheck={async () => {
                                      try {
                                        await unfollowUserDELETE.mutateAsync({
                                          followed_id: listData?.id,
                                        });
                                        await refetchGetAllUsers();
                                      } catch (err) {
                                        console.error(err);
                                      }
                                    }}
                                    checkedIcon={'AntDesign/heart'}
                                    uncheckedIcon={'AntDesign/hearto'}
                                    size={18}
                                    uncheckedColor={theme.colors.primary}
                                    color={theme.colors.primary}
                                    defaultValue={parseBoolean(
                                      listData?.isFollowed
                                    )}
                                  />
                                </View>
                              </View>
                              <Divider
                                style={styles.DivideriI}
                                color={theme.colors.divider}
                              />
                            </Touchable>
                          )}
                        </>
                      );
                    }}
                    numColumns={1}
                  />
                );
              }}
            </RisingCoachesApi.FetchGetAllUsersGET>
          </ScrollView>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextInputQg: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    width: '100%',
  },
  ViewTh: {
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: 'flex-start',
    alignItems: 'flex-start',
    width: '70%',
  },
  Viewaf: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: '10%',
    justifyContent: 'center',
    maxWidth: '10%',
  },
  Viewby: {
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 18,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TextIy: {
    textTransform: 'uppercase',
    marginRight: 18,
    fontFamily: 'Cantarell_400Regular',
    fontSize: 10,
  },
  DividerZC: {
    height: 2,
    marginRight: 15,
    marginTop: 3,
  },
  TextL6: {
    textTransform: 'uppercase',
    marginRight: 18,
    fontFamily: 'Cantarell_400Regular',
    fontSize: 10,
  },
  Divider_5I: {
    height: 2,
    marginRight: 15,
    marginTop: 3,
  },
  View_0K: {
    flexDirection: 'row',
    marginLeft: 12,
    alignItems: 'center',
  },
  TextrB: {
    marginRight: 10,
    fontFamily: 'Cantarell_400Regular',
    fontSize: 10,
  },
  ViewTX: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 5,
  },
  ViewY5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewPy: {
    height: 6,
  },
  ViewsZ: {
    height: 3,
  },
  ViewDw: {
    height: 1,
  },
  ViewQF: {
    height: 1,
  },
  ViewRS: {
    flexGrow: 0,
    flexShrink: 0,
  },
  Textku: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  ViewOC: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  ImageuP: {
    height: 50,
    width: 50,
  },
  ViewH2: {
    alignSelf: 'center',
    alignItems: 'flex-start',
    alignContent: 'stretch',
    justifyContent: 'center',
  },
  FlatList_6dContent: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    alignContent: 'stretch',
  },
  TextVJ: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 11,
  },
  Text_5q: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 11,
  },
  Viewbb: {
    marginLeft: 18,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ViewAZ: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'space-between',
  },
  View_4I: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 9,
    marginBottom: 9,
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  DividerzQ: {
    height: 1,
  },
  FetchcC: {
    minHeight: 40,
  },
  ScrollViewAaContent: {
    paddingBottom: 24,
  },
  Imagetd: {
    height: 50,
    width: 50,
  },
  Vieww4: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextLr: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 11,
  },
  TextQ4: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  Textzn: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  Viewa8: {
    marginLeft: 18,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  ViewJr: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
  },
  ViewA3: {
    justifyContent: 'flex-end',
  },
  Viewkt: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 9,
    marginBottom: 9,
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  DivideriI: {
    height: 1,
  },
  Fetchbq: {
    minHeight: 40,
  },
  ScrollViewrcContent: {
    paddingBottom: 24,
  },
});

export default withTheme(InboxScreen);
