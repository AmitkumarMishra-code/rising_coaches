import React from 'react';
import * as RisingCoachesApi from '../apis/RisingCoachesApi.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import Images from '../config/Images';
import * as Utils from '../utils';
import {
  ButtonSolid,
  CircleImage,
  Picker,
  ScreenContainer,
  Spacer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const CreatePostScreen = props => {
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;

  const setGlobalVariableValue = GlobalVariables.useSetValue();

  const { theme } = props;
  const { navigation } = props;

  const createPostPOST = RisingCoachesApi.useCreatePostPOST();

  const [imageBase, setImageBase] = React.useState('');
  const [pickerOptions, setPickerOptions] = React.useState([
    'ACC',
    'Big Ten',
    'Pac 12',
    'SEC',
  ]);
  const [pickerValue, setPickerValue] = React.useState('');
  const [postDescInputValue, setPostDescInputValue] = React.useState('');
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View style={styles.View_0t}>
        <View style={styles.View_0l}>
          <View style={styles.ViewnR}>
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
                      style={styles.Image_3q}
                      source={{ uri: `${imageBase}` }}
                      resizeMode={'cover'}
                    />
                  )}
                </>
                <>
                  {imageBase ? null : (
                    <CircleImage source={Images.UploadIcon} size={180} />
                  )}
                </>
              </View>
            </Touchable>
          </View>

          <View style={styles.Viewqy}>
            <Text style={[styles.TextwJ, { color: theme.colors.strong }]}>
              {imageBase}
              {'\n'}
            </Text>
          </View>
        </View>

        <View style={styles.View_34}>
          <View>
            <Text style={[styles.TextMt, { color: theme.colors.strong }]}>
              {'Category'}
            </Text>
            <Picker
              onValueChange={newPickerValue => {
                try {
                  setPickerValue(newPickerValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={styles.PickerXv}
              options={pickerOptions}
              placeholder={'Select an option'}
              leftIconMode={'inset'}
              type={'solid'}
              iconSize={24}
            />
          </View>
          <Spacer top={8} right={8} bottom={8} left={8} />
          <View>
            <Text style={[styles.Textua, { color: theme.colors.strong }]}>
              {'Post Title'}
            </Text>
            <TextInput
              onChangeText={newTextInputValue => {
                try {
                  setTextInputValue(newTextInputValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInput_6H,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Enter a title...'}
              value={textInputValue}
            />
            <Spacer top={8} right={8} bottom={8} left={8} />
          </View>

          <View>
            <Text style={[styles.Textm4, { color: theme.colors.strong }]}>
              {'Post Description'}
            </Text>
            <TextInput
              onChangeText={newTextAreaValue => {
                try {
                  setPostDescInputValue(newTextAreaValue);
                } catch (err) {
                  console.error(err);
                }
              }}
              style={[
                styles.TextInputdi,
                { borderColor: theme.colors.divider },
              ]}
              placeholder={'Insert your post details here...'}
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <Spacer top={8} right={8} bottom={8} left={8} />
        </View>

        <View style={styles.View_7m}>
          <ButtonSolid
            onPress={async () => {
              try {
                setGlobalVariableValue({
                  key: 'is_loading',
                  value: true,
                });
                navigation.navigate('NewsFeedScreen');
                const response = await createPostPOST.mutateAsync({
                  author_user_id: Constants['user_id'],
                  image: imageBase,
                  post_content: postDescInputValue,
                  post_title: textInputValue,
                  post_type: 'Normal',
                  tags: pickerValue,
                });
                setGlobalVariableValue({
                  key: 'is_loading',
                  value: false,
                });
              } catch (err) {
                console.error(err);
              }
            }}
            style={[
              styles.ButtonSolidF3,
              { backgroundColor: theme.colors.primary },
            ]}
            title={'Submit Post'}
          />
        </View>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  Image_3q: {
    width: 250,
    height: 250,
  },
  ViewnR: {
    alignItems: 'center',
  },
  TextwJ: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'System',
    fontWeight: '600',
  },
  Viewqy: {
    marginTop: 16,
  },
  View_0l: {
    paddingLeft: 40,
    paddingTop: 40,
    paddingRight: 40,
    paddingBottom: 20,
  },
  TextMt: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  PickerXv: {
    fontSize: 12,
    maxHeight: 40,
    marginTop: 10,
  },
  Textua: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInput_6H: {
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
  Textm4: {
    fontFamily: 'System',
    fontWeight: '600',
  },
  TextInputdi: {
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
  View_34: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  ButtonSolidF3: {
    borderRadius: 64,
    fontFamily: 'System',
    fontWeight: '700',
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  View_7m: {
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 40,
  },
  View_0t: {
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    alignContent: 'stretch',
    height: '100%',
  },
});

export default withTheme(CreatePostScreen);
