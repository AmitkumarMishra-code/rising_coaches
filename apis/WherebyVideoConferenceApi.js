import * as React from 'react';
import {
  useQuery,
  useMutation,
  useIsFetching,
  useQueryClient,
} from 'react-query';
import useFetch from 'react-fetch-hook';
import { useIsFocused } from '@react-navigation/native';
import usePrevious from '../utils/usePrevious';
import * as GlobalVariables from '../config/GlobalVariableContext';

export const createMeetingRoomPOST = (
  Constants,
  { endDate, isLocked, roomMode }
) =>
  fetch(`https://api.whereby.dev/v1/meetings`, {
    body: JSON.stringify({
      isLocked: isLocked,
      roomNamePattern: 'human-short',
      roomMode: roomMode,
      endDate: endDate,
      fields: ['hostRoomUrl', 'viewerRoomUrl'],
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['whereby_header'],
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useCreateMeetingRoomPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createMeetingRoomPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('MeetingRoom', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('MeetingRoom');
        queryClient.invalidateQueries('MeetingRooms');
      },
    }
  );
};
