import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import { parseBoolean } from '../utils';
import {
  Button,
  CheckboxRow,
  DatePicker,
  ScreenContainer,
  Spacer,
  withTheme,
} from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const AddJobScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const { theme } = props;
  const { navigation } = props;

  const addJobToTimelinePOST = RisingCoachesApi.useAddJobToTimelinePOST();

  const [descriptionInput, setDescriptionInput] = React.useState('');
  const [endDateInput, setEndDateInput] = React.useState(new Date());
  const [isCurrentInput, setIsCurrentInput] = React.useState(false);
  const [organizationInput, setOrganizationInput] = React.useState('');
  const [titleInput, setTitleInput] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <KeyboardAvoidingView
        style={styles.KeyboardAvoidingViewH0}
        enabled={true}
        behavior={'padding'}
        keyboardVerticalOffset={60}
      >
        <View style={styles.ViewrR}>
          <Text
            style={[
              theme.typography.headline4,
              styles.TextPb,
              { color: theme.colors.strong },
            ]}
          >
            {'Add a Job to your History'}
          </Text>

          <Text
            style={[
              theme.typography.body1,
              styles.Textky,
              { color: theme.colors.medium },
            ]}
          >
            {'Tell us more about your role.'}
          </Text>

          <View>
            <Spacer top={12} right={8} bottom={12} left={8} />
            <Text style={[styles.Textpa, { color: theme.colors.strong }]}>
              {'Organization'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setOrganizationInput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputiJ,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.surface,
                },
              ]}
              placeholder={'Organization...'}
              value={null}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.TextDh, { color: theme.colors.strong }]}>
              {'Title'}
            </Text>
            <TextInput
              onChangeText={newTitleInputValue => {
                try {
                  setTitleInput(newTitleInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputru,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.surface,
                },
              ]}
              placeholder={'Title...'}
              value={null}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>

          <View>
            <Text style={[styles.Text_5C, { color: theme.colors.strong }]}>
              {'Description'}
            </Text>
            <TextInput
              onChangeText={newTextAreaValue => {
                try {
                  setDescriptionInput(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputqJ,
                {
                  borderColor: theme.colors.divider,
                  backgroundColor: theme.colors.surface,
                },
              ]}
              placeholder={
                'Talk about the role your served in and what you were able to accomplish...'
              }
              value={null}
              multiline={true}
              numberOfLines={4}
            />
            <Spacer top={12} right={8} bottom={12} left={8} />
          </View>
        </View>

        <View style={styles.ViewaK}>
          <DatePicker
            onDateChange={newDatePickerValue => {
              try {
                setEndDateInput(newDatePickerValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.DatePickerbQ}
            label={'End Date'}
            date={null}
            mode={'date'}
            leftIconMode={'inset'}
            type={'underline'}
          />
          <Spacer top={12} right={8} bottom={12} left={8} />
          <CheckboxRow
            onPress={newCheckboxRowValue => {
              try {
                setIsCurrentInput(newCheckboxRowValue);
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.CheckboxRow_1y}
            label={'This is my current role'}
            value={null}
          />
        </View>
        <Spacer top={12} right={8} bottom={12} left={8} />
        <Spacer top={12} right={8} bottom={12} left={8} />
        <View style={styles.View_2n}>
          <Button
            onPress={async () => {
              try {
                navigation.navigate('JobTimelineScreen');
                await addJobToTimelinePOST.mutateAsync({
                  end_date: new Date(endDateInput),
                  isCurrentJob: parseBoolean(isCurrentInput),
                  job_description: descriptionInput,
                  job_title: titleInput,
                  organization: organizationInput,
                  user_id: Constants['user_id'],
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={styles.ButtonGO}
            type={'solid'}
          >
            {'Submit'}
          </Button>
        </View>
        <View />
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextPb: {
    textAlign: 'center',
  },
  Textky: {
    marginTop: 16,
    textAlign: 'center',
  },
  Textpa: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    fontFamily: 'Roboto_500Medium',
  },
  TextInputiJ: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  TextDh: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    fontFamily: 'Roboto_500Medium',
  },
  TextInputru: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  Text_5C: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 3,
    fontFamily: 'Roboto_500Medium',
  },
  TextInputqJ: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  ViewrR: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 18,
    marginRight: 18,
    marginTop: 36,
  },
  DatePickerbQ: {
    marginLeft: 20,
    marginRight: 20,
  },
  CheckboxRow_1y: {
    minHeight: 50,
    marginLeft: 30,
    marginRight: 30,
  },
  ViewaK: {
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  ButtonGO: {
    height: 48,
    minWidth: 120,
    opacity: 1,
  },
  View_2n: {
    flexGrow: 1,
    flexShrink: 0,
    marginLeft: 18,
    marginRight: 18,
    justifyContent: 'space-around',
    paddingBottom: 24,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignContent: 'stretch',
  },
  KeyboardAvoidingViewH0: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default withTheme(AddJobScreen);
