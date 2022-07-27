import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import {
  Checkbox,
  Divider,
  Icon,
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

const MemberDirectoryScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const followUserPOST = RisingCoachesApi.useFollowUserPOST();
  const unfollowUserDELETE = RisingCoachesApi.useUnfollowUserDELETE();

  const [isAll, setIsAll] = React.useState(true);
  const [isSearch, setIsSearch] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={false} hasTopSafeArea={true}>
      <View style={styles.Viewve}>
        <View style={styles.ViewaF}>
          <View style={styles.View_5m}>
            <>
              {!isSearch ? null : (
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setTextInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInputca,
                    {
                      borderColor: theme.colors.divider,
                      backgroundColor: theme.colors.surface,
                    },
                  ]}
                  placeholder={'Find a user...'}
                  value={textInputValue}
                  autoFocus={true}
                />
              )}
            </>
          </View>

          <View style={styles.Viewbk}>
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

        <View style={styles.ViewlK}>
          <View style={styles.Viewue}>
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
                  styles.TextkW,
                  { color: theme.colors.custom_rgb149_158_172 },
                ]}
              >
                {'All Users'}
              </Text>
              <>
                {!isAll ? null : (
                  <Divider
                    style={styles.Divider_27}
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
                  styles.TextFd,
                  { color: theme.colors.custom_rgb149_158_172 },
                ]}
              >
                {'Followed'}
              </Text>
              <>
                {isAll ? null : (
                  <Divider
                    style={styles.DividerZq}
                    color={theme.colors.primary}
                  />
                )}
              </>
            </Touchable>
          </View>
        </View>

        <View>
          <View
            style={[
              styles.ViewiY,
              { backgroundColor: theme.colors.custom_rgb223_223_223 },
            ]}
          />
        </View>
      </View>
      <>
        {!isAll ? null : (
          <ScrollView
            contentContainerStyle={styles.ScrollViewbBContent}
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
                    listKey={'qU9aIYVc'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
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
                          <View style={styles.ViewRe}>
                            <View style={styles.ViewVi}>
                              <View
                                style={[
                                  styles.View_8A,
                                  {
                                    backgroundColor:
                                      theme.colors.custom_rgb245_245_247,
                                    borderRadius: 10,
                                  },
                                ]}
                              >
                                <Image
                                  style={styles.Image_72}
                                  source={{
                                    uri: `${listData?.profile_image?.url}`,
                                  }}
                                  resizeMode={'cover'}
                                />
                              </View>

                              <View style={styles.Viewfz}>
                                <Text
                                  style={[
                                    styles.TextxQ,
                                    { color: theme.colors.primaryTitleUiBaeg },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {listData?.name}
                                </Text>

                                <Text
                                  style={[
                                    styles.TextkK,
                                    {
                                      color: theme.colors.custom_rgb149_158_172,
                                    },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {listData?.job_title}
                                </Text>

                                <Text
                                  style={[
                                    styles.TextzG,
                                    {
                                      color: theme.colors.custom_rgb149_158_172,
                                    },
                                  ]}
                                  ellipsizeMode={'tail'}
                                  numberOfLines={1}
                                >
                                  {listData?.current_university}
                                </Text>
                              </View>
                            </View>

                            <View style={styles.Viewhl}>
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
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                checkedIcon={'AntDesign/heart'}
                                uncheckedIcon={'AntDesign/hearto'}
                                size={18}
                                uncheckedColor={theme.colors.primary}
                                color={theme.colors.primary}
                                defaultValue={listData?.isFollowed}
                              />
                            </View>
                          </View>
                          <Divider
                            style={styles.DivideroE}
                            color={theme.colors.divider}
                          />
                        </Touchable>
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
      <>
        {isAll ? null : (
          <ScrollView
            contentContainerStyle={styles.ScrollViewhWContent}
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
                    listKey={'PTSXSrrw'}
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
                              <View style={styles.ViewuQ}>
                                <View style={styles.ViewXj}>
                                  <View
                                    style={[
                                      styles.Viewyz,
                                      {
                                        backgroundColor:
                                          theme.colors.custom_rgb245_245_247,
                                        borderRadius: 10,
                                      },
                                    ]}
                                  >
                                    <Image
                                      style={styles.ImageBt}
                                      source={{
                                        uri: `${listData?.profile_image?.url}`,
                                      }}
                                      resizeMode={'cover'}
                                    />
                                  </View>

                                  <View style={styles.ViewGn}>
                                    <Text
                                      style={[
                                        styles.Text_08,
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
                                        styles.TextcP,
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
                                        styles.Text_0S,
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

                                <View style={styles.ViewM7}>
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
                                style={styles.DividerVl}
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
  TextInputca: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
  },
  View_5m: {
    flexGrow: 0,
    flexShrink: 0,
    alignSelf: 'stretch',
    minWidth: '70%',
  },
  Viewbk: {
    flexDirection: 'row',
    flexGrow: 0,
    flexShrink: 0,
    minWidth: '10%',
    justifyContent: 'center',
    maxWidth: '10%',
  },
  ViewaF: {
    flexDirection: 'row',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 18,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  TextkW: {
    textTransform: 'uppercase',
    marginRight: 18,
    fontFamily: 'Cantarell_400Regular',
    fontSize: 10,
  },
  Divider_27: {
    height: 2,
    marginRight: 15,
    marginTop: 3,
  },
  TextFd: {
    textTransform: 'uppercase',
    marginRight: 18,
    fontFamily: 'Cantarell_400Regular',
    fontSize: 10,
  },
  DividerZq: {
    height: 2,
    marginRight: 15,
    marginTop: 3,
  },
  Viewue: {
    flexDirection: 'row',
    marginLeft: 12,
    alignItems: 'center',
  },
  ViewlK: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingBottom: 12,
  },
  ViewyH: {
    height: 6,
  },
  ViewQm: {
    height: 3,
  },
  ViewiY: {
    height: 1,
  },
  ViewK9: {
    height: 1,
  },
  Viewve: {
    flexGrow: 0,
    flexShrink: 0,
  },
  Image_72: {
    height: 50,
    width: 50,
  },
  View_8A: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextxQ: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 11,
  },
  TextkK: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  TextzG: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  Viewfz: {
    marginLeft: 18,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  ViewVi: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
  },
  Viewhl: {
    justifyContent: 'flex-end',
  },
  ViewRe: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 9,
    marginBottom: 9,
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  DivideroE: {
    height: 1,
  },
  Fetchse: {
    minHeight: 40,
  },
  ScrollViewbBContent: {
    paddingBottom: 24,
  },
  ImageBt: {
    height: 50,
    width: 50,
  },
  Viewyz: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_08: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 11,
  },
  TextcP: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  Text_0S: {
    fontFamily: 'Cantarell_400Regular',
    fontSize: 9,
    marginTop: 3,
  },
  ViewGn: {
    marginLeft: 18,
    flexGrow: 1,
    flexShrink: 0,
    justifyContent: 'center',
  },
  ViewXj: {
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 0,
  },
  ViewM7: {
    justifyContent: 'flex-end',
  },
  ViewuQ: {
    flexDirection: 'row',
    marginLeft: 12,
    marginRight: 12,
    marginTop: 9,
    marginBottom: 9,
    flexGrow: 1,
    flexShrink: 0,
    alignSelf: 'stretch',
  },
  DividerVl: {
    height: 1,
  },
  FetchEp: {
    minHeight: 40,
  },
  ScrollViewhWContent: {
    paddingBottom: 24,
  },
});

export default withTheme(MemberDirectoryScreen);
