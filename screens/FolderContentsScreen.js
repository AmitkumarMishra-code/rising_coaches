import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import {
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
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Fetch } from 'react-request';

const FolderContentsScreen = props => {
  const { theme } = props;
  const { navigation } = props;

  return (
    <ScreenContainer scrollable={true} hasTopSafeArea={true}>
      <View style={styles.ViewF1}>
        <Text style={[styles.Textry, { color: theme.colors.strong }]}>
          {'Add new item'}
        </Text>
        <IconButton
          onPress={() => {
            try {
              navigation.navigate('UploadContentScreen', {
                navigation_folder_id: props.route?.params?.folder_id ?? 1,
              });
            } catch (err) {
              console.error(err);
            }
          }}
          icon={'Ionicons/add-circle-sharp'}
          size={32}
        />
      </View>

      <RisingCoachesApi.FetchGetUserFolderContentsGET
        folder_id={props.route?.params?.folder_id ?? 1}
      >
        {({ loading, error, data, refetchGetUserFolderContents }) => {
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
              listKey={'SbNZYkOe'}
              keyExtractor={({ item }) => item?.id || item?.uuid || item}
              renderItem={({ item }) => {
                const listData = item;
                return (
                  <Touchable
                    onPress={() => {
                      try {
                        navigation.navigate('ContentDetailsScreen', {
                          navigation_content_id: listData?.id,
                        });
                      } catch (err) {
                        console.error(err);
                      }
                    }}
                  >
                    <View style={styles.Viewkb}>
                      <>
                        {!listData?.isFile ? null : (
                          <View
                            style={[
                              styles.ViewYN,
                              {
                                borderColor: theme.colors.strong,
                                backgroundColor: theme.colors.secondary,
                              },
                            ]}
                          >
                            <Icon
                              style={styles.Icon_9p}
                              name={'FontAwesome/file-text-o'}
                              size={45}
                              color={theme.colors.surface}
                            />
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.isImage ? null : (
                          <View
                            style={[
                              styles.Viewar,
                              { borderColor: theme.colors.strong },
                            ]}
                          >
                            <Image
                              style={styles.ImageXA}
                              source={{ uri: `${listData?.image?.url}` }}
                              resizeMode={'cover'}
                            />
                          </View>
                        )}
                      </>
                      <>
                        {!listData?.isVideo ? null : (
                          <View
                            style={[
                              styles.ViewRD,
                              { borderColor: theme.colors.strong },
                            ]}
                          >
                            <Image
                              style={styles.ImageyZ}
                              source={{ uri: `${listData?.youtube_thumbnail}` }}
                              resizeMode={'cover'}
                            />
                          </View>
                        )}
                      </>
                      <View
                        style={[
                          styles.View_7k,
                          { borderColor: theme.colors.divider },
                        ]}
                      >
                        <View style={styles.ViewYn}>
                          <Text
                            style={[
                              styles.TextDk,
                              { color: theme.colors.light },
                            ]}
                          >
                            {listData?.content_type}
                          </Text>

                          <Text
                            style={[
                              styles.Text_9p,
                              { color: theme.colors.strong },
                            ]}
                            ellipsizeMode={'tail'}
                            numberOfLines={2}
                          >
                            {listData?.content_title}
                          </Text>

                          <Text
                            style={[
                              styles.TextqK,
                              { color: theme.colors.primary },
                            ]}
                          >
                            {'Uploaded By '}
                            {listData?.user_details?.name}
                          </Text>
                        </View>

                        <View style={styles.View_3J}>
                          <Icon
                            name={'Feather/chevron-right'}
                            size={24}
                            color={theme.colors.light}
                          />
                        </View>
                      </View>
                    </View>
                  </Touchable>
                );
              }}
              contentContainerStyle={styles.FlatListSbContent}
              numColumns={1}
            />
          );
        }}
      </RisingCoachesApi.FetchGetUserFolderContentsGET>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Textry: {
    marginRight: 5,
    fontFamily: 'Roboto_400Regular',
    fontSize: 12,
  },
  ViewF1: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
  Icon_9p: {
    minWidth: 100,
    minHeight: 100,
    width: 100,
    height: 100,
  },
  ViewYN: {
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
  },
  ImageXA: {
    width: 100,
    height: 100,
  },
  Viewar: {
    borderBottomWidth: 1,
  },
  ImageyZ: {
    width: 100,
    height: 100,
  },
  ViewRD: {
    borderBottomWidth: 1,
  },
  TextDk: {
    fontFamily: 'System',
    fontWeight: '400',
    fontSize: 10,
  },
  Text_9p: {
    fontFamily: 'System',
    fontWeight: '600',
    marginTop: 2,
  },
  TextqK: {
    fontFamily: 'System',
    fontWeight: '400',
    marginTop: 4,
  },
  ViewYn: {
    flex: 1,
  },
  View_3J: {
    marginLeft: 8,
  },
  View_7k: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingRight: 12,
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  Viewkb: {
    flexDirection: 'row',
  },
  FlatListSbContent: {
    flex: 1,
  },
  FetchPS: {
    minHeight: 40,
  },
});

export default withTheme(FolderContentsScreen);
