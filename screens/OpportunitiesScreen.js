import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonOutline,
  ButtonSolid,
  Divider,
  Icon,
  IconButton,
  Link,
  ScreenContainer,
  Surface,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Fetch } from 'react-request';

const OpportunitiesScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

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

  const todayDate = () => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return CustomCode.moment().format('MMM Do');
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

  // Takes image obj and returns the url within
  const getImageUrl = userImageObj => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return userImageObj.url;
  };

  const formatScoreDate = dateString => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    return CustomCode.moment(dateString).format('MMM Do');
  };

  const { theme } = props;
  const { navigation } = props;

  const [isCompany, setIsCompany] = React.useState(false);
  const [showNav, setShowNav] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={[styles.screen, { backgroundColor: theme.colors.surface }]}
      hasTopSafeArea={false}
      hasSafeArea={false}
    >
      <View style={styles.Viewua}>
        <View
          style={[styles.ViewaS, { backgroundColor: theme.colors.background }]}
        >
          <View style={styles.ViewAY}>
            <View style={styles.ViewZ9}>
              <>
                {!isCompany ? null : (
                  <ButtonSolid
                    onPress={() => {
                      try {
                        navigation.navigate('CreatePostScreen');
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                    style={[
                      styles.ButtonSolidYb,
                      { backgroundColor: theme.colors.secondary },
                    ]}
                    title={'+ Add Opportunity '}
                  />
                )}
              </>
              <TextInput
                onChangeText={newTextInputValue => {
                  try {
                    setTextInputValue(newTextInputValue);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                style={[
                  styles.TextInputso,
                  { borderColor: theme.colors.divider },
                ]}
                placeholder={'Search Opportunities...'}
                value={textInputValue}
              />
            </View>

            <View style={styles.Viewo0}>
              <IconButton
                icon={'Foundation/filter'}
                size={40}
                color={theme.colors.primary}
              />
            </View>
          </View>
          <Divider style={styles.DividerXv} color={theme.colors.lightest} />
          <KeyboardAwareScrollView
            contentContainerStyle={styles.KeyboardAwareScrollViewtLContent}
            showsVerticalScrollIndicator={true}
            keyboardShouldPersistTaps={'never'}
          >
            <>
              {!Constants['is_loading'] ? null : (
                <ButtonOutline
                  style={styles.ButtonOutlinegD}
                  title={''}
                  disabled={true}
                  loading={true}
                />
              )}
            </>
            <RisingCoachesApi.FetchGetOpportunitiesGET>
              {({ loading, error, data, refetchGetOpportunities }) => {
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
                    data={fetchData}
                    listKey={'CNwhekO1'}
                    keyExtractor={({ item }) => item?.id || item?.uuid || item}
                    renderItem={({ item }) => {
                      const listData = item;
                      return (
                        <Touchable
                          onPress={() => {
                            try {
                              navigation.navigate('OpportunityDetailsScreen', {
                                opportunity_id: listData?.id,
                              });
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Surface
                            style={[
                              styles.Surfacemb,
                              {
                                backgroundColor: theme.colors.surface,
                                borderRadius: 20,
                              },
                            ]}
                            elevation={1}
                          >
                            <View style={styles.View_2G}>
                              <View style={styles.ViewpK}>
                                <View
                                  style={[
                                    styles.ViewtT,
                                    {
                                      backgroundColor:
                                        theme.colors.custom_rgb245_245_247,
                                      borderRadius: 10,
                                    },
                                  ]}
                                >
                                  <Image
                                    style={styles.ImageWb}
                                    source={{
                                      uri: `${listData?.company_logo?.url}`,
                                    }}
                                    resizeMode={'contain'}
                                  />
                                </View>

                                <View style={styles.Views5}>
                                  <Text
                                    style={[
                                      styles.Textxy,
                                      { color: theme.colors.medium },
                                    ]}
                                  >
                                    {listData?.company_name}
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.ViewbK}>
                                <Link
                                  style={[
                                    styles.LinkF6,
                                    { color: theme.colors.primary },
                                  ]}
                                  title={'View Details'}
                                />
                              </View>
                            </View>

                            <View style={[styles.ViewIN, { borderRadius: 12 }]}>
                              <View style={styles.View_5T}>
                                <View>
                                  <Text
                                    style={[
                                      styles.TextDy,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.opportunity_title}
                                  </Text>
                                </View>

                                <View
                                  style={[
                                    styles.ViewQ4,
                                    {
                                      backgroundColor: theme.colors.background,
                                      borderRadius: 10,
                                    },
                                  ]}
                                >
                                  <Text
                                    style={[
                                      styles.TextzE,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {'Meal Benefit'}
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.Viewbl}>
                                <View style={styles.ViewzI}>
                                  <Icon
                                    style={styles.Icon_81}
                                    name={'FontAwesome/money'}
                                    size={20}
                                    color={theme.colors.light}
                                  />
                                  <Text
                                    style={[
                                      styles.Textst,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.price_range}{' '}
                                    {listData?.compensation_rate}
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.Viewbs}>
                                <View style={styles.ViewD1}>
                                  <Icon
                                    style={styles.Icon_5m}
                                    name={'FontAwesome/map-marker'}
                                    size={20}
                                    color={theme.colors.light}
                                  />
                                  <Text
                                    style={[
                                      styles.Textlw,
                                      { color: theme.colors.strong },
                                    ]}
                                  >
                                    {listData?.city}
                                    {', '}
                                    {listData?.state}
                                  </Text>
                                </View>

                                <View>
                                  <Text
                                    style={[
                                      styles.TextmB,
                                      { color: theme.colors.primary },
                                    ]}
                                  >
                                    {listData?.opportunity_type}
                                  </Text>
                                </View>
                              </View>

                              <View style={styles.ViewWf}>
                                <View style={styles.View_7N}>
                                  <Icon
                                    style={styles.IconQp}
                                    name={'Feather/briefcase'}
                                    size={20}
                                    color={theme.colors.light}
                                  />
                                  <Text
                                    style={[
                                      styles.TextKK,
                                      { color: theme.colors.light },
                                    ]}
                                  >
                                    {listData?.years_of_exp_range}
                                  </Text>
                                </View>

                                <View>
                                  <Text
                                    style={[
                                      styles.TextFY,
                                      { color: theme.colors.error },
                                    ]}
                                  >
                                    {'2 Days Left'}
                                  </Text>
                                </View>
                              </View>
                            </View>
                          </Surface>
                        </Touchable>
                      );
                    }}
                    style={styles.FlatListCN}
                    contentContainerStyle={styles.FlatListCNContent}
                    numColumns={1}
                    horizontal={false}
                  />
                );
              }}
            </RisingCoachesApi.FetchGetOpportunitiesGET>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidYb: {
    borderRadius: 8,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  TextInputso: {
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
  ViewZ9: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    width: '70%',
  },
  Viewo0: {
    alignSelf: 'stretch',
    alignContent: 'stretch',
    width: '30%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  ViewAY: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 10,
  },
  DividerXv: {
    height: 1,
  },
  ButtonOutlinegD: {
    backgroundColor: 'transparent',
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    borderWidth: 1,
    textAlign: 'center',
  },
  ImageWb: {
    width: 50,
    height: 50,
  },
  ViewtT: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Textxy: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 2,
  },
  Views5: {
    marginLeft: 10,
  },
  ViewpK: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  LinkF6: {
    textDecorationLine: 'underline',
    fontFamily: 'Roboto_700Bold',
  },
  ViewbK: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  View_2G: {
    flexDirection: 'row',
    marginBottom: 3,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  TextDy: {
    fontFamily: 'Roboto_700Bold',
  },
  TextzE: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewQ4: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  View_5T: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  Icon_81: {
    marginRight: 3,
  },
  Textst: {
    fontFamily: 'Roboto_400Regular',
  },
  ViewzI: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewbl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  Icon_5m: {
    marginRight: 3,
  },
  Textlw: {
    fontSize: 12,
  },
  ViewD1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextmB: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  Viewbs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  IconQp: {
    marginRight: 3,
  },
  TextKK: {
    fontSize: 12,
  },
  View_7N: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextFY: {
    fontSize: 12,
  },
  ViewWf: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  ViewIN: {
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
  Surfacemb: {
    marginTop: 10,
    marginBottom: 10,
    alignContent: 'stretch',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
  },
  FlatListCN: {
    width: '100%',
  },
  FlatListCNContent: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  FetchGs: {
    minHeight: 40,
  },
  KeyboardAwareScrollViewtLContent: {
    alignItems: 'center',
  },
  ViewaS: {
    flex: 1,
  },
  Viewua: {
    flex: 1,
  },
  screen: {
    flexDirection: 'row',
  },
});

export default withTheme(OpportunitiesScreen);
