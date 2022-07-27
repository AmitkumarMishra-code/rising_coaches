import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import {
  ButtonSolid,
  DatePicker,
  NumberInput,
  ScreenContainer,
  Spacer,
  TextField,
  withTheme,
} from '@draftbit/ui';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const AddCalendarItemScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const createCalendarItemPOST = RisingCoachesApi.useCreateCalendarItemPOST();

  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [eventNameValue, setEventNameValue] = React.useState('');
  const [locationInputValue, setLocationInputValue] = React.useState('');
  const [numberInputValue, setNumberInputValue] = React.useState('');
  const [sliderValue, setSliderValue] = React.useState(0);
  const [stepperValue, setStepperValue] = React.useState('');
  const [styledTextAreaValue, setStyledTextAreaValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.surface }}
      scrollable={true}
      hasTopSafeArea={true}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={styles.KeyboardAwareScrollViewbsContent}
        extraScrollHeight={72}
      >
        <View style={{ backgroundColor: theme.colors.surface }}>
          <View
            style={[
              styles.ViewmK,
              {
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              },
            ]}
          >
            <Text style={[styles.TextXX, { color: theme.colors.medium }]}>
              {'Event Name'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                const textInputValue = newTextInputValue;
                try {
                  setTextInputValue(textInputValue);
                  setEventNameValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[styles.TextInputC0, { color: theme.colors.strong }]}
              placeholder={'Event Name'}
              value={null}
              keyboardType={'email-address'}
              autoFocus={true}
              enablesReturnKeyAutomatically={true}
            />
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <View
            style={[
              styles.View_5c,
              {
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              },
            ]}
          >
            <Text style={[styles.Text_3b, { color: theme.colors.medium }]}>
              {'Event Date & Start Time'}
            </Text>
            <DatePicker
              onDateChange={newDatePickerValue => {
                try {
                  setDatePickerValue(newDatePickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              label={''}
              date={datePickerValue}
              mode={'datetime'}
              leftIconMode={'inset'}
              type={'underline'}
            />
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <View
            style={[
              styles.Viewf1,
              {
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              },
            ]}
          >
            <Text style={[styles.Text_8M, { color: theme.colors.medium }]}>
              {'Duration'}
            </Text>

            <View style={styles.Viewnb}>
              <View style={styles.ViewJj}>
                <NumberInput
                  onChangeText={newNumberInputValue => {
                    try {
                      setNumberInputValue(newNumberInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.NumberInputHC,
                    { borderColor: theme.colors.divider },
                  ]}
                  value={numberInputValue}
                  placeholder={'Enter duration in minutes'}
                />
              </View>
            </View>
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <View
            style={[
              styles.ViewXg,
              {
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              },
            ]}
          >
            <Text style={[styles.TextbW, { color: theme.colors.medium }]}>
              {'Location'}
            </Text>

            <View style={styles.View_7S}>
              <View style={styles.ViewMj}>
                <TextInput
                  onChangeText={newTextInputValue => {
                    const textInputValue = newTextInputValue;
                    try {
                      setTextInputValue(textInputValue);
                      setLocationInputValue(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[styles.TextInputOb, { color: theme.colors.strong }]}
                  placeholder={'Physical or Virtual Location'}
                  value={null}
                  keyboardType={'decimal-pad'}
                />
              </View>
            </View>
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View>
          <View
            style={[
              styles.Viewvb,
              {
                borderColor: theme.colors.primary,
                backgroundColor: theme.colors.surface,
                borderTopLeftRadius: 6,
                borderTopRightRadius: 6,
              },
            ]}
          >
            <Text style={[styles.TextJb, { color: theme.colors.medium }]}>
              {'Event Details'}
            </Text>

            <View style={styles.Viewel}>
              <View style={styles.View_7j}>
                <TextField
                  onChangeText={newStyledTextAreaValue => {
                    try {
                      setStyledTextAreaValue(newStyledTextAreaValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={{ backgroundColor: theme.colors.surface }}
                  placeholder={'Let everyone know the details of your event'}
                  value={styledTextAreaValue}
                  type={'solid'}
                  multiline={true}
                  numberOfLines={4}
                />
              </View>
            </View>
          </View>
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <ButtonSolid
          onPress={async () => {
            try {
              await createCalendarItemPOST.mutateAsync({
                creator_id: Constants['user_id'],
                description: styledTextAreaValue,
                duration_minutes: numberInputValue,
                event_date: datePickerValue,
                event_day: datePickerValue,
                event_location: locationInputValue,
                event_name: eventNameValue,
              });
              navigation.navigate('CalendarScreen_coaa8c4F');
            } catch (err) {
              console.error(err);
            }
          }}
          style={[
            styles.ButtonSolid_9g,
            { backgroundColor: theme.colors.primary },
          ]}
          title={'Submit'}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextXX: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputC0: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
    marginTop: 6,
  },
  ViewmK: {
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  Text_3b: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_5c: {
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  Text_8M: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  NumberInputHC: {
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
  ViewJj: {
    flex: 1,
  },
  Viewnb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  Viewf1: {
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  TextbW: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputOb: {
    marginLeft: 4,
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 16,
  },
  ViewMj: {
    flex: 1,
  },
  View_7S: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  ViewXg: {
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  TextJb: {
    fontSize: 12,
    fontFamily: 'System',
    fontWeight: '600',
  },
  View_7j: {
    flex: 1,
  },
  Viewel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  Viewvb: {
    paddingLeft: 14,
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    borderBottomWidth: 2,
  },
  ButtonSolid_9g: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  KeyboardAwareScrollViewbsContent: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingRight: 24,
    paddingBottom: 36,
  },
});

export default withTheme(AddCalendarItemScreen);
