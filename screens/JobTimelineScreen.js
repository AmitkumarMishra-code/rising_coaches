import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  Circle,
  Icon,
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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const JobTimelineScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const deleteJobDELETE = RisingCoachesApi.useDeleteJobDELETE();

  const [checkboxRowValue, setCheckboxRowValue] = React.useState('');
  const [checkboxValue, setCheckboxValue] = React.useState(false);
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [datePickerValue2, setDatePickerValue2] = React.useState(new Date());
  const [isAddNew, setIsAddNew] = React.useState(false);
  const [textAreaValue, setTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      hasSafeArea={false}
      hasTopSafeArea={true}
      scrollable={true}
    >
      <View style={styles.View_7X}>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('AddJobScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'AntDesign/pluscircle'}
          size={32}
          color={theme.colors.primary}
        />
      </View>

      <RisingCoachesApi.FetchGetJobTimelineGET user_id={17}>
        {({ loading, error, data, refetchGetJobTimeline }) => {
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
              listKey={'vDrMq7cY'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <View>
                    <View style={styles.View_3y}>
                      <View style={styles.ViewvC}>
                        <Text
                          style={[
                            styles.TextEi,
                            { color: theme.colors.primary },
                          ]}
                        >
                          {listData?.end_date}
                        </Text>

                        <Touchable>
                          <Icon
                            style={styles.Iconcm}
                            name={'MaterialCommunityIcons/briefcase-edit'}
                            size={24}
                            color={theme.colors.secondary}
                          />
                        </Touchable>

                        <Touchable
                          onPress={async () => {
                            try {
                              await deleteJobDELETE.mutateAsync({
                                job_timeline_id: listData?.id,
                              });
                              await refetchGetJobTimeline();
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                        >
                          <Icon
                            style={styles.Icon_5f}
                            name={'MaterialCommunityIcons/briefcase-remove'}
                            size={24}
                            color={theme.colors.error}
                          />
                        </Touchable>
                      </View>

                      <View style={styles.ViewWN}>
                        <Circle size={16} bgColor={theme.colors.primary} />
                        <View
                          style={[
                            styles.Viewii,
                            { backgroundColor: theme.colors.primary },
                          ]}
                        />
                      </View>

                      <View style={styles.Viewlk}>
                        <Text
                          style={[
                            styles.Text_9u,
                            { color: theme.colors.strong },
                          ]}
                        >
                          {listData?.organization}
                          {': '}
                          {listData?.job_title}
                        </Text>
                        <Spacer top={4} right={8} bottom={4} left={8} />
                        <Text
                          style={[
                            styles.TextrD,
                            { color: theme.colors.medium },
                          ]}
                        >
                          {listData?.job_description}
                        </Text>
                        <Spacer top={12} right={8} bottom={12} left={8} />
                      </View>
                    </View>
                  </View>
                );
              }}
              contentContainerStyle={styles.FlatListvDContent}
              numColumns={1}
            />
          );
        }}
      </RisingCoachesApi.FetchGetJobTimelineGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  View_7X: {
    marginTop: 15,
    alignItems: 'center',
    alignContent: 'center',
  },
  TextEi: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 9,
  },
  Iconcm: {
    marginTop: 5,
    marginBottom: 5,
  },
  Icon_5f: {
    marginBottom: 50,
  },
  ViewvC: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Viewii: {
    width: 4,
    flex: 1,
  },
  ViewWN: {
    alignItems: 'center',
    flex: 1,
  },
  Text_9u: {
    fontFamily: 'System',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 16,
  },
  TextrD: {
    fontFamily: 'System',
    fontWeight: '400',
  },
  Viewlk: {
    flex: 4,
  },
  View_3y: {
    flexDirection: 'row',
    minHeight: 150,
  },
  FlatListvDContent: {
    flex: 1,
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 24,
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  FetchEa: {
    minHeight: 40,
  },
});

export default withTheme(JobTimelineScreen);
