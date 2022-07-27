import React from 'react';
import { ScreenContainer, WebView } from '@draftbit/ui';
import { StyleSheet } from 'react-native';

const LiveMeetingScreen = props => {
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <WebView
        style={styles.WebViewOB}
        source={{
          uri: 'https://rising-coaches.whereby.com/q4h0w2?roomKey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWV0aW5nSWQiOiI1NzkyMjk3MiIsInJvb21SZWZlcmVuY2UiOnsicm9vbU5hbWUiOiIvcTRoMHcyIiwib3JnYW5pemF0aW9uSWQiOiIxNjQ0OTUifSwiaXNzIjoiaHR0cHM6Ly9hY2NvdW50cy5zcnYud2hlcmVieS5jb20iLCJpYXQiOjE2NTc3NDczNzcsInJvb21LZXlUeXBlIjoibWVldGluZ0hvc3QifQ.OSxZ8n6-Pp_cdDSQLgRfoNv6olp82o2SDeER-CapFis?needancestor&skipMediaPermissionPrompt',
        }}
        optimizeVideoChat={true}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  WebViewOB: {
    flex: 1,
  },
});

export default LiveMeetingScreen;
