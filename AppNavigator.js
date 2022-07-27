import * as React from 'react';
import { I18nManager, Platform, StyleSheet, Text, View } from 'react-native';
import { systemWeights } from 'react-native-typography';
import { Icon, Touchable } from '@draftbit/ui';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import theme from './themes/DraftbitTheme.js';
import LinkingConfiguration from './LinkingConfiguration.js';

import AddCalendarItemScreen from './screens/AddCalendarItemScreen';
import AddJobScreen from './screens/AddJobScreen';
import CalendarScreen_coaa8c4F from './screens/CalendarScreen_coaa8c4F';
import ChatScreen from './screens/ChatScreen';
import ContentDetailsScreen from './screens/ContentDetailsScreen';
import ContentRepositoryScreen from './screens/ContentRepositoryScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import EventDetailsScreen from './screens/EventDetailsScreen';
import FolderContentsScreen from './screens/FolderContentsScreen';
import InboxScreen from './screens/InboxScreen';
import JobTimelineScreen from './screens/JobTimelineScreen';
import LiveMeetingScreen from './screens/LiveMeetingScreen';
import MemberDetailScreen from './screens/MemberDetailScreen';
import MemberDirectoryScreen from './screens/MemberDirectoryScreen';
import NewsFeedScreen from './screens/NewsFeedScreen';
import OpportunitiesScreen from './screens/OpportunitiesScreen';
import OpportunityDetailsScreen from './screens/OpportunityDetailsScreen';
import PostDetailsScreen from './screens/PostDetailsScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import StartNewChatScreen from './screens/StartNewChatScreen';
import UploadContentScreen from './screens/UploadContentScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Placeholder() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#131A2A',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 36,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 12,
          color: '#FFF',
        }}
      >
        Missing Screens
      </Text>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          color: '#FFF',
          marginBottom: 8,
        }}
      >
        Your app doesn't have any screens added to the Root Navigator.
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 16, color: '#FFF' }}>
        Click the + (plus) icon in the Navigator tab on the left side to add
        some.
      </Text>
    </View>
  );
}
export default function RootAppNavigator() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <Stack.Navigator
        headerMode="float"
        initialRouteName="WelcomeScreen"
        screenOptions={{
          headerTransparent: false,
        }}
      >
        <Stack.Screen
          name="NewsFeedScreen"
          component={NewsFeedScreen}
          options={{
            headerShown: false,
            headerTransparent: false,
            title: 'News Feed',
          }}
        />
        <Stack.Screen
          name="PostDetailsScreen"
          component={PostDetailsScreen}
          options={{ title: 'Post Details' }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false, title: 'Welcome' }}
        />
        <Stack.Screen
          name="SignInScreen"
          component={SignInScreen}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="CreatePostScreen"
          component={CreatePostScreen}
          options={{ title: 'Create Post' }}
        />
        <Stack.Screen
          name="MemberDirectoryScreen"
          component={MemberDirectoryScreen}
          options={{ title: 'Member Directory' }}
        />
        <Stack.Screen
          name="MemberDetailScreen"
          component={MemberDetailScreen}
          options={{ title: 'Member Detail Screen' }}
        />
        <Stack.Screen
          name="JobTimelineScreen"
          component={JobTimelineScreen}
          options={{ title: 'Job Timeline' }}
        />
        <Stack.Screen
          name="AddJobScreen"
          component={AddJobScreen}
          options={{ title: 'Add Job' }}
        />
        <Stack.Screen
          name="CalendarScreen_coaa8c4F"
          component={CalendarScreen_coaa8c4F}
          options={{ title: 'Calendar' }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ title: 'Chat Screen' }}
        />
        <Stack.Screen
          name="ContentRepositoryScreen"
          component={ContentRepositoryScreen}
          options={{ title: 'Content Repository' }}
        />
        <Stack.Screen
          name="AddCalendarItemScreen"
          component={AddCalendarItemScreen}
          options={{ title: 'Add Calendar Item' }}
        />
        <Stack.Screen
          name="EventDetailsScreen"
          component={EventDetailsScreen}
          options={{ title: 'Event Details' }}
        />
        <Stack.Screen
          name="LiveMeetingScreen"
          component={LiveMeetingScreen}
          options={{ title: 'Live Meeting' }}
        />
        <Stack.Screen
          name="InboxScreen"
          component={InboxScreen}
          options={{ title: 'Inbox' }}
        />
        <Stack.Screen
          name="FolderContentsScreen"
          component={FolderContentsScreen}
          options={{ title: 'Folder Contents' }}
        />
        <Stack.Screen
          name="UploadContentScreen"
          component={UploadContentScreen}
          options={{ title: 'Upload Content' }}
        />
        <Stack.Screen
          name="ContentDetailsScreen"
          component={ContentDetailsScreen}
          options={{ title: 'Content Details' }}
        />
        <Stack.Screen
          name="StartNewChatScreen"
          component={StartNewChatScreen}
          options={{ title: 'Start New Chat' }}
        />
        <Stack.Screen
          name="OpportunitiesScreen"
          component={OpportunitiesScreen}
          options={{ title: 'Opportunities' }}
        />
        <Stack.Screen
          name="OpportunityDetailsScreen"
          component={OpportunityDetailsScreen}
          options={{ title: 'Opportunity Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: Platform.select({
    ios: {
      marginVertical: 12,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    default: {
      margin: 3,
      resizeMode: 'contain',
      transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
  }),
  headerIconLeft: Platform.select({
    ios: {
      marginRight: 6,
    },
  }),
  headerIconRight: Platform.select({
    ios: {
      marginLeft: 6,
    },
  }),
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    ...Platform.select({
      ios: null,
      default: {
        marginVertical: 3,
        marginHorizontal: 11,
      },
    }),
  },
  headerContainerLeft: Platform.select({
    ios: {
      marginLeft: 8,
    },
  }),
  headerContainerRight: Platform.select({
    ios: {
      marginRight: 8,
    },
  }),
  headerLabelWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  headerLabel: {
    fontSize: 17,
    letterSpacing: 0.35,
  },
});
