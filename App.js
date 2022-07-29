import * as React from 'react';
import { AppState } from 'react-native';
import * as Notifications from 'expo-notifications';
import AppLoading from 'expo-app-loading';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { Provider as ThemeProvider } from '@draftbit/ui';
import { QueryClient, QueryClientProvider } from 'react-query';

import AppNavigator from './AppNavigator';
import DraftbitTheme from './themes/DraftbitTheme.js';
import cacheAssetsAsync from './config/cacheAssetsAsync';
import { GlobalVariableProvider } from './config/GlobalVariableContext';
import { useFonts } from 'expo-font';
import { Cantarell_400Regular } from '@expo-google-fonts/cantarell';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const queryClient = new QueryClient();

const App = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [fontsLoaded] = useFonts({
    Cantarell_400Regular,
    Cantarell_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_700Bold,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
    Roboto_700Bold,
  });

  if (!isReady || !fontsLoaded) {
    return (
      <AppLoading
        startAsync={cacheAssetsAsync}
        onFinish={() => setIsReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <GlobalVariableProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={DraftbitTheme}>
            <AppNavigator />
          </ThemeProvider>
        </QueryClientProvider>
      </GlobalVariableProvider>
    </SafeAreaProvider>
  );
};

export default App;
