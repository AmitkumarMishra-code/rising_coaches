import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  Icon,
  Picker,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const UploadContentScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const createContentPOST = RisingCoachesApi.useCreateContentPOST();

  const [descriptionInput, setDescriptionInput] = React.useState('');
  const [fileBase, setFileBase] = React.useState('');
  const [imageBase, setImageBase] = React.useState('');
  const [pickerOptions, setPickerOptions] = React.useState([
    'ACC',
    'Big Ten',
    'Pac 12',
    'SEC',
  ]);
  const [pickerValue, setPickerValue] = React.useState('');
  const [showFile, setShowFile] = React.useState(false);
  const [showImage, setShowImage] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(true);
  const [titleTextInput, setTitleTextInput] = React.useState('');
  const [videoLinkInput, setVideoLinkInput] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View>
        <View
          style={[
            styles.Viewjx,
            {
              backgroundColor: theme.colors.divider,
              borderRadius: 14,
              borderColor: theme.colors.lightest,
            },
          ]}
        >
          <View style={styles.Viewha}>
            <>
              {!showVideo ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidjx,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Video'}
                />
              )}
            </>
            <>
              {showVideo ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowImage(false);
                      setShowFile(false);
                      setShowVideo(true);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidCS,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Video'}
                />
              )}
            </>
          </View>

          <View style={styles.View_8h}>
            <>
              {!showImage ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidfT,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'Image'}
                />
              )}
            </>
            <>
              {showImage ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowVideo(false);
                      setShowImage(true);
                      setShowFile(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidyv,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'Image'}
                />
              )}
            </>
          </View>

          <View style={styles.Viewkt}>
            <>
              {!showFile ? null : (
                <ButtonSolid
                  style={[
                    styles.ButtonSolidZ6,
                    { backgroundColor: theme.colors.primary },
                  ]}
                  title={'File'}
                />
              )}
            </>
            <>
              {showFile ? null : (
                <ButtonSolid
                  onPress={() => {
                    try {
                      setShowFile(true);
                      setShowVideo(false);
                      setShowImage(false);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.ButtonSolidCq,
                    {
                      backgroundColor: theme.colors.divider,
                      color: theme.colors.light,
                    },
                  ]}
                  title={'File'}
                />
              )}
            </>
          </View>
        </View>
      </View>

      <View style={styles.ViewMc}>
        <View style={styles.Viewca}>
          <>
            {!showFile ? null : (
              <View style={styles.ViewZQ}>
                <Text style={[styles.Textiv, { color: theme.colors.strong }]}>
                  {'Upload Your File'}
                </Text>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <Touchable
                  onPress={async () => {
                    try {
                      const file_base = await Utils.selectFile({});
                      setFileBase(file_base);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <>
                      {!imageBase ? null : (
                        <Image
                          style={styles.Imageld}
                          source={{ uri: `${fileBase}` }}
                          resizeMode={'cover'}
                        />
                      )}
                    </>
                    <>
                      {fileBase ? null : (
                        <Icon
                          name={'AntDesign/addfile'}
                          size={80}
                          color={theme.colors.secondary}
                        />
                      )}
                    </>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          <>
            {!showImage ? null : (
              <View style={styles.ViewwQ}>
                <Text style={[styles.Textpw, { color: theme.colors.strong }]}>
                  {'Upload Your Image'}
                </Text>
                <Spacer top={8} right={8} bottom={8} left={8} />
                <Touchable
                  onPress={async () => {
                    try {
                      const base64_image = await Utils.openImagePicker({
                        mediaTypes: 'Images',
                      });
                      setImageBase(base64_image);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                >
                  <View>
                    <>
                      {!imageBase ? null : (
                        <Image
                          style={styles.ImageZm}
                          source={{ uri: `${imageBase}` }}
                          resizeMode={'cover'}
                        />
                      )}
                    </>
                    <>
                      {imageBase ? null : (
                        <CircleImage source={Images.UploadIcon} size={100} />
                      )}
                    </>
                  </View>
                </Touchable>
              </View>
            )}
          </>
          <Spacer top={8} right={8} bottom={8} left={8} />
          <>
            {!showVideo ? null : (
              <View>
                <Text style={[styles.Text_6d, { color: theme.colors.strong }]}>
                  {'YouTube Video URL Link'}
                </Text>
                <TextInput
                  onChangeText={newTextInputValue => {
                    try {
                      setVideoLinkInput(newTextInputValue);
                    } catch (err) {
                      console.error(err);
                    }
                  }}
                  style={[
                    styles.TextInputoP,
                    { borderColor: theme.colors.divider },
                  ]}
                  placeholder={'Enter the YouTube link...'}
                  value={videoLinkInput}
                />
                <Spacer top={8} right={8} bottom={8} left={8} />
              </View>
            )}
          </>
          <View>
            <Text style={[styles.TextcX, { color: theme.colors.strong }]}>
              {'Category'}
            </Text>
            <Picker
              style={styles.PickerYT}
              placeholder={'Select an option'}
              leftIconMode={'inset'}
              type={'solid'}
              iconSize={24}
            />
          </View>
          <Spacer top={8} right={8} bottom={8} left={8} />
          <View>
            <Text style={[styles.TextNl, { color: theme.colors.strong }]}>
              {'Post Title'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTitleTextInput(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput_80,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Enter a title...'}
              value={titleTextInput}
            />
            <Spacer top={8} right={8} bottom={8} left={8} />
          </View>

          <View>
            <Text style={[styles.Text_5z, { color: theme.colors.strong }]}>
              {'Post Description'}
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
                styles.TextInputzK,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Insert your post details here...'}
              value={descriptionInput}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Spacer top={8} right={8} bottom={8} left={8} />
        </View>

        <View style={styles.ViewoR}>
          <ButtonSolid
            onPress={async () => {
              try {
                setGlobalVariableValue({
                  key: 'is_loading',
                  value: true,
                });
                const response = await createContentPOST.mutateAsync({
                  content_title: titleTextInput,
                  content_type: 'Video',
                  file_content: fileBase,
                  folder_id: props.route?.params?.navigation_folder_id ?? 1,
                  image_content: imageBase,
                  isFile: showFile,
                  isImage: showImage,
                  isShared: true,
                  isVideo: showVideo,
                  tags: ['Tag One', 'Tag Two'],
                  text_content: descriptionInput,
                  youtubeID: videoLinkInput,
                });
                navigation.goBack();
                setGlobalVariableValue({
                  key: 'is_loading',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolid_37,
              { backgroundColor: theme.colors.secondary },
            ]}
            title={'Add Content'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  ButtonSolidjx: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidCS: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  Viewha: {
    flex: 1,
  },
  ButtonSolidfT: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidyv: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  View_8h: {
    flex: 1,
  },
  ButtonSolidZ6: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  ButtonSolidCq: {
    borderRadius: 0,
    fontFamily: 'Roboto_700Bold',
    textAlign: 'center',
    fontSize: 12,
  },
  Viewkt: {
    flex: 1,
  },
  Viewjx: {
    flexDirection: 'row',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  Textiv: {
    fontFamily: 'System',
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  Imageld: {
    width: 150,
    height: 150,
  },
  ViewZQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textpw: {
    fontFamily: 'System',
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  ImageZm: {
    width: 150,
    height: 150,
  },
  ViewwQ: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text_6d: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputoP: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  TextcX: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  PickerYT: {
    fontSize: 12,
    maxHeight: 40,
    marginTop: 10,
  },
  TextNl: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_80: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  Text_5z: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputzK: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  Viewca: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  ButtonSolid_37: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  ViewoR: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 40,
  },
  ViewMc: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    height: '100%',
  },
});

export default withTheme(UploadContentScreen);
