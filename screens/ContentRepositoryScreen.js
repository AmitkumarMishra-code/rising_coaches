import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import {
  ButtonSolid,
  IconButton,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const ContentRepositoryScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  const [showPersonal, setShowPersonal] = React.useState(true);
  const [showRising, setShowRising] = React.useState(false);
  const [showShared, setShowShared] = React.useState(false);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.background }}
      scrollable={true}
      hasSafeArea={false}
      hasTopSafeArea={true}
    >
      <View>
        <View
          style={[
            styles.ViewrB,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 14,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.ViewC6}>
            <>
              {!showPersonal ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidWR,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Personal Folders'}
                />
              )}
            </>
            <>
              {showPersonal ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowPersonal(true);
                      setShowRising(false);
                      setShowShared(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidbH,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Personal Folders'}
                />
              )}
            </>
          </View>

          <View style={styles.ViewIa}>
            <>
              {!showRising ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidpu,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Rising Coaches'}
                />
              )}
            </>
            <>
              {showRising ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowRising(true);
                      setShowPersonal(false);
                      setShowShared(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidwx,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Rising Coaches'}
                />
              )}
            </>
          </View>

          <View style={styles.ViewuI}>
            <>
              {!showShared ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidXL,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Shared Folders'}
                />
              )}
            </>
            <>
              {showShared ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowPersonal(false);
                      setShowRising(false);
                      setShowShared(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidvn,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Shared Folders'}
                />
              )}
            </>
          </View>
        </View>
      </View>
      <>
        {!showPersonal ? null : (
          <View style={styles.Viewly}>
            <Text style={[styles.Textrf, { color: theme.colors.strong }]}>
              {'Create New Folder'}
            </Text>
            <IconButton icon={'Ionicons/add-circle-sharp'} size={32} />
          </View>
        )}
      </>
      <>
        {!showPersonal ? null : (
          <RisingCoachesApi.FetchGetUserFoldersGET method={'GET'}>
            {({ loading, error, data, refetchGetUserFolders }) => {
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
                    {null ? null : (
                      <FlatList
                        data={fetchData}
                        listKey={'O5zsMtXb'}
                        keyExtractor={({ item }) =>
                          item?.id || item?.uuid || item
                        }
                        renderItem={({ item }) => {
                          const personalGridData = item;
                          return (
                            <View style={styles.ViewYn}>
                              <Touchable
                                onPress={() => {
                                  try {
                                    navigation.navigate(
                                      'FolderContentsScreen',
                                      { folder_id: personalGridData?.id }
                                    );
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                              >
                                <View
                                  style={[
                                    styles.Viewa0,
                                    {
                                      borderRadius: 12,
                                      borderColor: theme.colors.divider,
                                      backgroundColor: theme.colors.surface,
                                    },
                                  ]}
                                >
                                  <View
                                    style={[
                                      styles.ViewEj,
                                      {
                                        backgroundColor: theme.colors.secondary,
                                      },
                                    ]}
                                  >
                                    <View style={styles.ViewFI}>
                                      <Text
                                        style={[
                                          styles.Text_5A,
                                          { color: theme.colors.surface },
                                        ]}
                                      >
                                        {personalGridData?.name}
                                      </Text>
                                    </View>
                                  </View>

                                  <View style={styles.Viewgq}>
                                    <Text
                                      style={[
                                        styles.TextSM,
                                        { color: theme.colors.strong },
                                      ]}
                                      numberOfLines={1}
                                      ellipsizeMode={'tail'}
                                    >
                                      {personalGridData?.properties?.name}{' '}
                                    </Text>

                                    <View style={styles.ViewqE}>
                                      <Text
                                        style={[
                                          styles.TextWs,
                                          { color: theme.colors.primary },
                                        ]}
                                      >
                                        {'12'}
                                      </Text>

                                      <Text
                                        style={[
                                          styles.TextGV,
                                          { color: theme.colors.primary },
                                        ]}
                                      >
                                        {' media items'}
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              </Touchable>
                            </View>
                          );
                        }}
                        contentContainerStyle={styles.FlatListO5Content}
                        numColumns={2}
                      />
                    )}
                  </>
                  <>
                    {!null ? null : (
                      <FlatList
                        data={fetchData}
                        listKey={'GwLOilAu'}
                        keyExtractor={({ item }) =>
                          item?.id || item?.uuid || item
                        }
                        renderItem={({ item }) => {
                          const listData = item;
                          return (
                            <>
                              <View style={styles.View_4H}>
                                <Touchable>
                                  <View
                                    style={[
                                      styles.ViewLA,
                                      {
                                        borderRadius: 12,
                                        borderColor: theme.colors.divider,
                                        backgroundColor: theme.colors.surface,
                                      },
                                    ]}
                                  >
                                    <View style={styles.View_5v}>
                                      <ImageBackground
                                        style={styles.ImageBackgroundwi}
                                        source={{
                                          uri: `${listData?.properties?.image_url}`,
                                        }}
                                        resizeMode={'cover'}
                                      />
                                    </View>

                                    <View style={styles.Viewhp}>
                                      <Text
                                        style={[
                                          styles.Text_1o,
                                          { color: theme.colors.light },
                                        ]}
                                      >
                                        {listData?.properties?.city}
                                      </Text>

                                      <Text
                                        style={[
                                          styles.Text_3e,
                                          { color: theme.colors.strong },
                                        ]}
                                        numberOfLines={1}
                                        ellipsizeMode={'tail'}
                                      >
                                        {listData?.properties?.name}{' '}
                                      </Text>

                                      <View style={styles.Viewqv}>
                                        <Text
                                          style={[
                                            styles.Textck,
                                            { color: theme.colors.primary },
                                          ]}
                                        >
                                          {'$'}
                                          {listData?.properties?.nightly_price}
                                        </Text>

                                        <Text
                                          style={[
                                            styles.Texta2,
                                            { color: theme.colors.primary },
                                          ]}
                                        >
                                          {'/night'}
                                        </Text>
                                      </View>
                                    </View>
                                  </View>
                                </Touchable>
                              </View>
                              <Spacer top={8} right={8} bottom={8} left={8} />
                            </>
                          );
                        }}
                        contentContainerStyle={styles.FlatListGwContent}
                      />
                    )}
                  </>
                </>
              );
            }}
          </RisingCoachesApi.FetchGetUserFoldersGET>
        )}
      </>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidWR: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidbH: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewC6: {
    flex: 1,
  },
  ButtonSolidpu: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidwx: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewIa: {
    flex: 1,
  },
  ButtonSolidXL: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidvn: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ViewuI: {
    flex: 1,
  },
  ViewrB: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Textrf: {
    marginRight: 5,
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  Viewly: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  Text_5A: {
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    alignSelf: 'center',
  },
  ViewFI: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  ViewEj: {
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextSM: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 12,
  },
  TextWs: {
    fontFamily: 'Poppins_600SemiBold',
  },
  TextGV: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  ViewqE: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewgq: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    justifyContent: 'space-between',
    flex: 1,
  },
  Viewa0: {
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  ViewYn: {
    flex: 1,
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  FlatListO5Content: {
    paddingLeft: 8,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
  },
  ImageBackgroundwi: {
    width: '100%',
    height: '100%',
  },
  View_5v: {
    flex: 1,
  },
  Text_1o: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 10,
  },
  Text_3e: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 14,
  },
  Textck: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  Texta2: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 10,
  },
  Viewqv: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  Viewhp: {
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
    paddingBottom: 12,
    flex: 3,
    justifyContent: 'center',
  },
  ViewLA: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  View_4H: {
    flex: 1,
  },
  FlatListGwContent: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingRight: 16,
    paddingBottom: 16,
  },
});

export default withTheme(ContentRepositoryScreen);
