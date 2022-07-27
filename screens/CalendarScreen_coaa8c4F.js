import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as CustomCode from '../components.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as Utils from '../utils';
import { IconButton, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';

const CalendarScreen_coaa8c4F = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const isFocused = useIsFocused();
  React.useEffect(async () => {
    try {
      if (!isFocused) {
        return;
      }
      const response = await RisingCoachesApi.getCalendarGET(Constants);
      setGlobalVariableValue({
        key: 'return_calendar',
        value: response,
      });
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      style={{ backgroundColor: theme.colors.surface }}
      hasSafeArea={true}
      scrollable={false}
    >
      <View style={styles.Viewkx}>
        <Text style={[styles.TextZq, { color: theme.colors.strong }]}>
          {'Add Event'}
        </Text>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('AddCalendarItemScreen');
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'AntDesign/pluscircle'}
          size={32}
          color={theme.colors.primary}
        />
      </View>
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.AgendaComponent navigation={props.navigation} />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  TextZq: {
    marginRight: 8,
  },
  Viewkx: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'stretch',
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 12,
    paddingBottom: 10,
  },
});

export default withTheme(CalendarScreen_coaa8c4F);
