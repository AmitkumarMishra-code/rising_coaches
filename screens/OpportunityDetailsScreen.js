import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import {
  ButtonSolid,
  Icon,
  ScreenContainer,
  Spacer,
  Surface,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { Fetch } from 'react-request';

const OpportunityDetailsScreen = props => {
  const { theme } = props;

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <RisingCoachesApi.FetchGetOpportunityDetailGET
        opportunity_id={props.route?.params?.opportunity_id ?? 1}
      >
        {({ loading, error, data, refetchGetOpportunityDetail }) => {
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
            <Surface
              style={[
                styles.Surfaceqd,
                { backgroundColor: theme.colors.surface, borderRadius: 20 },
              ]}
              elevation={1}
            >
              <View style={styles.Viewbu}>
                <View style={styles.View_2Z}>
                  <View
                    style={[
                      styles.Viewb2,
                      {
                        backgroundColor: theme.colors.custom_rgb245_245_247,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Image
                      style={styles.ImagegV}
                      source={{ uri: `${fetchData?.company_logo?.url}` }}
                      resizeMode={'contain'}
                    />
                  </View>

                  <View style={styles.ViewYz}>
                    <Text
                      style={[styles.Text_4q, { color: theme.colors.medium }]}
                    >
                      {fetchData?.company_name}
                    </Text>
                  </View>
                </View>
                <View style={styles.ViewZ7} />
              </View>

              <View style={[styles.Viewaj, { borderRadius: 12 }]}>
                <View style={styles.ViewbB}>
                  <View>
                    <Text
                      style={[styles.TextKQ, { color: theme.colors.strong }]}
                    >
                      {fetchData?.opportunity_title}
                    </Text>
                  </View>

                  <View
                    style={[
                      styles.ViewTF,
                      {
                        backgroundColor: theme.colors.background,
                        borderRadius: 10,
                      },
                    ]}
                  >
                    <Text
                      style={[styles.Textsd, { color: theme.colors.strong }]}
                    >
                      {'Meal Benefit'}
                    </Text>
                  </View>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.ViewxO}>
                  <View>
                    <Text
                      style={[styles.TextDY, { color: theme.colors.strong }]}
                    >
                      {'Description\n'}
                    </Text>
                  </View>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View>
                  <Text style={[styles.TextDk, { color: theme.colors.medium }]}>
                    {fetchData?.description}
                  </Text>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.View_0p}>
                  <View style={styles.Viewk4}>
                    <Icon
                      style={styles.IcontU}
                      name={'FontAwesome/money'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Text
                      style={[styles.TextLQ, { color: theme.colors.strong }]}
                    >
                      {fetchData?.price_range} {fetchData?.compensation_rate}
                    </Text>
                  </View>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.ViewdV}>
                  <View style={styles.ViewuN}>
                    <Icon
                      style={styles.Iconov}
                      name={'FontAwesome/map-marker'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Text
                      style={[styles.Textcg, { color: theme.colors.strong }]}
                    >
                      {fetchData?.city}
                      {', '}
                      {fetchData?.state}
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={[styles.Textgn, { color: theme.colors.primary }]}
                    >
                      {fetchData?.opportunity_type}
                    </Text>
                  </View>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View style={styles.ViewO4}>
                  <View style={styles.View_8L}>
                    <Icon
                      style={styles.Iconzr}
                      name={'Feather/briefcase'}
                      size={20}
                      color={theme.colors.light}
                    />
                    <Text
                      style={[styles.TextyZ, { color: theme.colors.light }]}
                    >
                      {fetchData?.years_of_exp_range}
                    </Text>
                  </View>

                  <View>
                    <Text
                      style={[styles.TextVm, { color: theme.colors.error }]}
                    >
                      {'2 Days Left'}
                    </Text>
                  </View>
                </View>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <View>
                  <ButtonSolid
                    style={[
                      styles.ButtonSolidUU,
                      { backgroundColor: theme.colors.primary },
                    ]}
                    title={'Apply'}
                  />
                </View>
              </View>
            </Surface>
          );
        }}
      </RisingCoachesApi.FetchGetOpportunityDetailGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ImagegV: {
    width: 50,
    height: 50,
  },
  Viewb2: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text_4q: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    marginBottom: 2,
  },
  ViewYz: {
    marginLeft: 10,
  },
  View_2Z: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ViewZ7: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Viewbu: {
    flexDirection: 'row',
    marginBottom: 3,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
  },
  TextKQ: {
    fontFamily: 'Roboto_700Bold',
  },
  Textsd: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewTF: {
    paddingTop: 8,
    paddingLeft: 8,
    paddingBottom: 8,
    paddingRight: 8,
  },
  ViewbB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  TextDY: {
    fontFamily: 'Roboto_700Bold',
  },
  ViewxO: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  TextDk: {
    marginTop: 10,
    marginBottom: 10,
  },
  IcontU: {
    marginRight: 3,
  },
  TextLQ: {
    fontFamily: 'Roboto_400Regular',
  },
  Viewk4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  View_0p: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  Iconov: {
    marginRight: 3,
  },
  Textcg: {
    fontSize: 12,
  },
  ViewuN: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Textgn: {
    fontSize: 12,
    fontFamily: 'Roboto_400Regular',
  },
  ViewdV: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  Iconzr: {
    marginRight: 3,
  },
  TextyZ: {
    fontSize: 12,
  },
  View_8L: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextVm: {
    fontSize: 12,
  },
  ViewO4: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 5,
    marginRight: 5,
  },
  ButtonSolidUU: {
    borderRadius: 8,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
  },
  Viewaj: {
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    overflow: 'hidden',
    maxWidth: '100%',
    minWidth: 280,
    alignContent: 'center',
    marginTop: 5,
    marginBottom: 8,
  },
  Surfaceqd: {
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
  FetchJv: {
    minHeight: 40,
  },
});

export default withTheme(OpportunityDetailsScreen);
