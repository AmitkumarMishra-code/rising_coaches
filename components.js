// Place any imports required by your custom components at the top of
// this file. Make sure to add those imports (besides "react"
// and "react-native") to the Packages section. The first import from
// 'react' is required.
// KSL Added 'Button' for Global Variables
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  Alert,
  TextInput,
  Dimensions,
  Platform,
  TouchableHighlight,
} from 'react-native';
import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { Calendar, Agenda } from 'react-native-calendars';
import { Actions, GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import moment from 'moment';
import { CircleImage, Icon } from '@draftbit/ui';
import * as GlobalVariableContext from './config/GlobalVariableContext';
import AutoTags from 'react-native-tag-autocomplete-expo';
import { ButtonSolid, withTheme } from '@draftbit/ui';
import { configureAbly, useChannel } from '@ably-labs/react-hooks';

export { moment };

// Define and export your components as named exports here.
// You can reference them within a Custom Code block
// as <CustomCode.MyTextComponent />
// KSL Access Global Variables in Custom Components

export const CalendarComponent = () => {
  return (
    <Calendar
      onDayPress={day => {
        console.log('selected day', day);
      }}
      onDayLongPress={day => {
        console.log('selected day', day);
      }}
      onMonthChange={month => {
        console.log('month changed', month);
      }}
      hideExtraDays={true}
      firstDay={1}
      onPressArrowLeft={subtractMonth => subtractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
  );
};

export const ChatComponent = props => {
  // const { navigation } = props;
  const variables = GlobalVariableContext.useValues();

  configureAbly({
    key: 'YtqgTA.WDAdsg:lEzZt7we5sZhXonrI9LDkUnFcX3vQDfwASFr_p60-Q0',
  });

  const [messages, setMessages] = useState(variables.return_chat);

  const [channel] = useChannel(props.chat_id, 'naufel', message => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, message.data)
    );
  });

  const startVideoChat = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);
  };

  const renderActions = () => {
    return (
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Actions
          {...props}
          onPressActionButton={startVideoChat}
          icon={() => (
            <Icon
              color="grey"
              type="material"
              name="videocam"
              size={28}
              onPress={startVideoChat}
            />
          )}
          onSend={args => console.log(args)}
        />
      </View>
    );
  };

  const onSend = useCallback((messages = []) => {
    channel.publish('naufel', messages);

    const requestOptions = {
      method: 'POST',
      headers: new Headers({
        Authorization: 'Bearer ' + variables.auth_header,
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        message: messages[0].text,
        chatroom_id: props.chat_id,
      }),
    };
    fetch(
      'https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chat',
      requestOptions
    ).then(response => response.json());
  }, []);

  return (
    <GiftedChat
      messages={messages}
      renderActions={renderActions}
      onSend={messages => onSend(messages)}
      user={{
        _id: variables.user_id,
      }}
    />
  );
};

export const AgendaComponent = props => {
  const { navigation } = props;
  const variables = GlobalVariableContext.useValues();

  const renderItem = (item, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        style={[
          styles.item,
          { backgroundColor: '#ffffff', borderRadius: 12, height: item.height },
        ]}
        onPress={() => {
          try {
            navigation.navigate('EventDetailsScreen', {
              navigate_event_id: item?.id,
            });
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View style={styles.Viewaa}>
          <Text style={[styles.TextVc, { color: 'black' }]}>
            {moment(item?.datetime).format('h:mm')}
          </Text>

          <Text style={[styles.Textsu, { color: 'black' }]}>
            {moment(item?.datetime).format('A')}
          </Text>
        </View>

        <View style={styles.View_39}>
          <Text style={{ fontSize, color }}>{item?.event_name}</Text>

          <View style={styles.ViewXm}>
            <CircleImage
              source={{
                uri: `${item?.user_details?.profile_image?.url}`,
              }}
              size={20}
            />
            <Text style={[styles.Texttq, { color: 'black' }]}>
              {item?.user_details.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  return (
    <Agenda
      items={variables.return_calendar}
      renderItem={item => {
        return renderItem(item);
      }}
      selected={'2022-07-07'}
      renderEmptyDate={this.renderEmptyDate}
      rowHasChanged={this.rowHasChanged}
      showClosingKnob={true}
      //renderEmptyData={renderEmptyItem}
      //renderEmptyDate={renderEmptyDate}
      //theme={calendarTheme}
      theme={{
        agendaKnobColor: '#F16834', // knob color
        agendaTodayColor: '#F16834', // today in list
        // textSectionTitleColor: "#F16834",
        selectedDayBackgroundColor: '#011145', // calendar sel date
        selectedDotColor: '#FFFFFF', // dots
        dotColor: '#F16834', // dots
        todayTextColor: '#F16834',
        selectedDayTextColor: '#FFFFFF',
      }}
    />
  );
};

export const MultiUserTags = props => {
  const variables = GlobalVariableContext.useValues();
  const [tagsSelected, setTagsSelected] = useState([]);
  const [suggestions, setSuggestions] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        Authorization: 'Bearer ' + variables.auth_header,
        'Content-Type': 'application/json',
      }),
    };
    fetch(
      'https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/user',
      requestOptions
    ).then(response =>
      response.json().then(data => setSuggestions(data.items))
    );
  }, []);

  const customFilterData = query => {
    //override suggestion filter, we can search by specific attributes
    query = query.toUpperCase();
    let searchResults = suggestions.filter(s => {
      return (
        s.name.toUpperCase().includes(query) ||
        s.email.toUpperCase().includes(query)
      );
    });
    return searchResults;
  };

  const customRenderTags = tags => {
    //override the tags render
    return (
      <View style={styles.customTagsContainer}>
        {tagsSelected.map((t, i) => {
          return (
            <TouchableHighlight
              key={i}
              style={styles.customTag}
              onPress={() => handleDelete(i)}
            >
              <Text style={{ color: 'white' }}>{t.name || t.email}</Text>
            </TouchableHighlight>
          );
        })}
      </View>
    );
  };

  const customRenderSuggestion = suggestion => {
    //override suggestion render the drop down
    const name = suggestion.name;
    return <Text>{name}</Text>;
  };

  const handleDelete = ind => {
    //tag deleted, remove from our tags array
    setTagsSelected(tagsSelected.filter((value, index) => index !== ind));
  };

  const handleAddition = contact => {
    //suggestion clicked, push it to our tags array
    // this.setState({ tagsSelected: this.state.tagsSelected.concat([contact]) });
    setTagsSelected(tagsSelected.concat([contact]));
  };

  const onCustomTagCreated = userInput => {
    //user pressed enter, create a new tag from their input
    const contact = {
      email: userInput,
      name: null,
    };
    handleAddition(contact);
  };

  const { navigation } = props;

  return (
    <View style={styles.autoContainer}>
      <View style={styles.autocompleteContainer}>
        <Text style={styles.label}>Recipients</Text>
        <AutoTags
          //required
          suggestions={suggestions}
          tagsSelected={tagsSelected}
          handleAddition={handleAddition}
          handleDelete={handleDelete}
          //optional
          placeholder="Add a contact.."
          filterData={customFilterData}
          renderSuggestion={customRenderSuggestion}
          renderTags={customRenderTags}
          onCustomTagCreated={onCustomTagCreated}
          createTagOnSpace
        />
      </View>
      <View style={styles.messageContainer}>
        <ButtonSolid
          style={[styles.ButtonSolidKk]}
          onPress={() => {
            try {
              let result = tagsSelected.map(a => a.id);
              result.push(variables.user_id);
              result = result.sort();
              //TODO IF logic the result array matches an existing GET call - navigate user to existing Chat Room
              const getOptions = {
                method: 'GET',
                headers: new Headers({
                  Authorization: 'Bearer ' + variables.auth_header,
                  'Content-Type': 'application/json',
                }),
              };
              fetch(
                'https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chatrooms/existing/' +
                  result.join('-'),
                getOptions
              ).then(response =>
                response.json().then(data => {
                  if (data.id) {
                    navigation.navigate('ChatScreen', {
                      chatroom_id: data?.id,
                    });
                  } else {
                    //Else navigate them to below logic that creates a new chatroom
                    const requestOptions = {
                      method: 'POST',
                      headers: new Headers({
                        Authorization: 'Bearer ' + variables.auth_header,
                        'Content-Type': 'application/json',
                      }),
                      body: JSON.stringify({
                        members_ids: result,
                        title: result.join('-'),
                      }),
                    };
                    fetch(
                      'https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chatrooms',
                      requestOptions
                    ).then(response =>
                      response.json().then(data =>
                        navigation.navigate('ChatScreen', {
                          chatroom_id: data?.id,
                        })
                      )
                    );
                  }
                })
              );
            } catch (err) {
              console.error(err);
            }
          }}
          title={'Create'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customTagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#efeaea',
    width: 300,
  },
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    flexDirection: 'row',
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
  ButtonSolidKk: {
    borderRadius: 8,
    fontFamily: 'System',
    marginBottom: 50,
    fontWeight: '700',
    width: 150,
    textAlign: 'center',
    backgroundColor: '#F16834',
  },
  customTag: {
    backgroundColor: '#F16834',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 30,
    padding: 8,
  },
  autoContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#011145',
    height: 80,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    marginBottom: 10,
  },
  autocompleteContainer: {
    flex: 1,
    left: 20,
    position: 'absolute',
    right: 20,
    top: 100,
    zIndex: 1,
  },
  label: {
    color: '#614b63',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    // marginTop: 160,
    height: 200,
    // alignSelf: 'stretch',
    // marginLeft: 20,
    // marginRight: 20,
  },
  message: {
    backgroundColor: '#efeaea',
    height: 200,
    textAlignVertical: 'top',
  },
  TextVc: {
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
  },
  Textsu: {
    fontSize: 14,
    fontFamily: 'Roboto_400Regular',
  },
  Viewaa: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Textub: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 18,
  },
  Texttq: {
    marginLeft: 5,
    fontFamily: 'Roboto_400Regular',
  },
  ViewXm: {
    flexDirection: 'row',
  },
  View_39: {
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  ViewLm: {
    flexDirection: 'row',
    marginLeft: 30,
    marginTop: 50,
    marginRight: 30,
    paddingTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 15,
  },
});
