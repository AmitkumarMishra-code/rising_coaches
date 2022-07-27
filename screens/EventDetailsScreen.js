import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { MapMarker, MapView } from '@draftbit/maps';
import {
  ButtonOutline,
  CircleImage,
  Icon,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const EventDetailsScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const formatEventDate = dateString => {
    // Type the code for the body of your function or hook here.
    // Functions can be triggered via Button/Touchable actions.
    // Hooks are run per ReactJS rules.

    /* String line breaks are accomplished with backticks ( example: `line one
line two` ) and will not work with special characters inside of quotes ( example: "line one line two" ) */

    // return CustomCode.moment(dateString).format("MMM Do");

    return CustomCode.moment(dateString).format('LLL');
  };

  const { theme } = props;

  const createRSVPPOST = RisingCoachesApi.useCreateRSVPPOST();
  const deleteRSVPDELETE = RisingCoachesApi.useDeleteRSVPDELETE();

  const mapViewsblJJV0KRef = React.useRef();

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <RisingCoachesApi.FetchGetEventDetailGET
        method={'GET'}
        calendar_id={props.route?.params?.navigate_event_id ?? 6}
      >
        {({ loading, error, data, refetchGetEventDetail }) => {
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
              <View style={styles.ViewWW}>
                <MapView
                  style={styles.MapViewsb}
                  latitude={fetchData?.geo?.data?.lat}
                  longitude={fetchData?.geo?.data?.lng}
                  zoom={16}
                  zoomEnabled={true}
                  rotateEnabled={true}
                  scrollEnabled={true}
                  loadingEnabled={true}
                  showsPointsOfInterest={true}
                  apiKey={'AIzaSyC53v7BvSuA1yv7Hwf1rC_9kpHMmmYJJhU'}
                  provider={'google'}
                  showsUserLocation={true}
                  ref={mapViewsblJJV0KRef}
                >
                  <MapMarker
                    latitude={fetchData?.geo?.data?.lat}
                    longitude={fetchData?.geo?.data?.lng}
                    title={fetchData?.event_name}
                    pinColor={theme.colors.primary}
                  />
                </MapView>

                <View style={styles.Viewfh}>
                  <View
                    style={[
                      styles.ViewpZ,
                      {
                        backgroundColor: theme.colors.primary,
                        borderRadius: 8,
                      },
                    ]}
                  >
                    <View style={styles.ViewM3}>
                      <Text
                        style={[styles.TextXT, { color: theme.colors.surface }]}
                      >
                        {formatEventDate(fetchData?.datetime)}{' '}
                      </Text>
                    </View>
                    <>
                      {fetchData?.isRSVP ? null : (
                        <View>
                          <>
                            {fetchData?.isRSVP ? null : (
                              <ButtonOutline
                                onPress={async () => {
                                  try {
                                    await createRSVPPOST.mutateAsync({
                                      event_id: fetchData?.id,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={[
                                  styles.ButtonOutlinezZ,
                                  {
                                    borderColor: theme.colors.surface,
                                    color: theme.colors.surface,
                                  },
                                ]}
                                title={'RSVP'}
                              />
                            )}
                          </>
                        </View>
                      )}
                    </>
                    <>
                      {!fetchData?.isRSVP ? null : (
                        <View>
                          <>
                            {!fetchData?.isRSVP ? null : (
                              <ButtonOutline
                                onPress={async () => {
                                  try {
                                    await deleteRSVPDELETE.mutateAsync({
                                      rsvp_id:
                                        fetchData?.rsvps_of_calendar_of_user
                                          ?.id,
                                    });
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                style={[
                                  styles.ButtonOutlinezY,
                                  {
                                    borderColor: theme.colors.surface,
                                    color: theme.colors.surface,
                                  },
                                ]}
                                title={'Attending'}
                              />
                            )}
                          </>
                        </View>
                      )}
                    </>
                  </View>
                </View>
              </View>

              <View>
                <View style={styles.ViewyA}>
                  <Text style={[styles.TextdA, { color: theme.colors.light }]}>
                    {fetchData?.location}
                  </Text>

                  <Text
                    style={[styles.TextbN, { color: theme.colors.strong }]}
                    textBreakStrategy={'highQuality'}
                    ellipsizeMode={'tail'}
                    allowFontScaling={true}
                    numberOfLines={2}
                  >
                    {fetchData?.event_name}
                  </Text>
                  <Spacer top={8} right={8} bottom={8} left={8} />
                  <View>
                    <View style={styles.View_3J}>
                      <View
                        style={[
                          styles.Viewpr,
                          {
                            borderRadius: 8,
                            borderColor: theme.colors.lightest,
                          },
                        ]}
                      >
                        <Icon
                          name={'Feather/users'}
                          size={24}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.TextzX,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.rsvps_of_event?.length}
                          {' RSVPs'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                      <View
                        style={[
                          styles.Viewbw,
                          {
                            borderColor: theme.colors.lightest,
                            borderRadius: 8,
                          },
                        ]}
                      >
                        <Icon
                          name={'AntDesign/clockcircle'}
                          size={20}
                          color={theme.colors.primary}
                        />
                        <Spacer right={2} left={2} />
                        <Text
                          style={[
                            styles.Textkr,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {fetchData?.duration_minutes}
                          {' minutes'}
                        </Text>
                      </View>
                      <Spacer top={8} right={6} bottom={8} left={6} />
                    </View>
                  </View>
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <Spacer top={12} right={8} bottom={12} left={8} />
                  <View>
                    <Text
                      style={[styles.TextTk, { color: theme.colors.strong }]}
                    >
                      {'Description'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <Text
                      style={[styles.Text_92, { color: theme.colors.medium }]}
                    >
                      {fetchData?.description}
                    </Text>
                  </View>
                  <Spacer top={16} right={8} bottom={16} left={8} />
                  <View>
                    <Text
                      style={[styles.TextD3, { color: theme.colors.strong }]}
                    >
                      {'Attendees'}
                    </Text>
                    <Spacer top={6} right={8} bottom={6} left={8} />
                    <FlatList
                      data={fetchData?.rsvps_of_event}
                      listKey={'QCjytDxx'}
                      keyExtractor={({ item }) =>
                        item?.id || item?.uuid || item
                      }
                      renderItem={({ item }) => {
                        const listData = item;
                        return (
                          <View style={styles.ViewwC}>
                            <CircleImage
                              style={styles.CircleImagelE}
                              source={{
                                uri: `${listData?.rsvp_user?.profile_image?.url}`,
                              }}
                              size={60}
                            />
                            <Text
                              style={[
                                styles.TextHq,
                                { color: theme.colors.strong },
                              ]}
                            >
                              {listData?.rsvp_user?.name}
                            </Text>
                          </View>
                        );
                      }}
                      contentContainerStyle={styles.FlatListQCContent}
                      numColumns={1}
                    />
                  </View>
                </View>
              </View>
            </>
          );
        }}
      </RisingCoachesApi.FetchGetEventDetailGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  MapViewsb: {
    flex: 1,
  },
  TextXT: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 16,
  },
  ViewM3: {
    flex: 1,
  },
  ButtonOutlinezZ: {
    borderRadius: 8,
    fontFamily: 'Poppins_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  ButtonOutlinezY: {
    borderRadius: 8,
    fontFamily: 'Poppins_700Bold',
    borderWidth: 1,
    textAlign: 'center',
    borderTopWidth: 2,
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
  },
  ViewpZ: {
    paddingLeft: 12,
    paddingBottom: 6,
    paddingRight: 8,
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  Viewfh: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
  ViewWW: {
    width: '100%',
    height: 420,
  },
  TextdA: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
  },
  TextbN: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 22,
  },
  TextzX: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  Viewpr: {
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
  Textkr: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    textAlign: 'center',
  },
  Viewbw: {
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
  View_3J: {
    flexDirection: 'row',
  },
  TextTk: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  Text_92: {
    lineHeight: 26,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'left',
    fontSize: 14,
  },
  TextD3: {
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
  },
  CircleImagelE: {
    marginRight: 20,
  },
  TextHq: {
    textAlign: 'left',
    fontFamily: 'Roboto_700Bold',
  },
  ViewwC: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  FlatListQCContent: {
    flex: 1,
  },
  ViewyA: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
  },
});

export default withTheme(EventDetailsScreen);
