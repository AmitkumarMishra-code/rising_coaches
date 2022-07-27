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

export const addChatRecordPOST = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chat`, {
    body: JSON.stringify({ message: 'Thanks!', chatroom_id: 1 }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['auth_header'],
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

export const useAddChatRecordPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addChatRecordPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Chatroom', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Chatroom');
        queryClient.invalidateQueries('Chatrooms');
      },
    }
  );
};

export const getChatroomGET = (Constants, { chatroom_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chat/chatroom/${
      chatroom_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['auth_header'],
        'Content-Type': 'application/json',
      },
    }
  )
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetChatroomGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Chatrooms', args], () => getChatroomGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetChatroomGET = ({
  children,
  onData = () => {},
  refetchInterval,
  chatroom_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetChatroomGET(
    { chatroom_id },
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetChatroom: refetch });
};

export const getUserChatroomsGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:D9yaTDL_/chatrooms`, {
    headers: {
      Accept: 'application/json',
      Authorization: Constants['auth_header'],
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      if (!res.ok) {
        console.error('Fetch error: ' + res.status + ' ' + res.statusText);
      }
      return res;
    })
    .then(res => res.json())
    .catch(() => {});

export const useGetUserChatroomsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Chatrooms', args],
    () => getUserChatroomsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetUserChatroomsGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetUserChatroomsGET(
    {},
    { refetchInterval }
  );

  React.useEffect(() => {
    if (!prevIsFocused && isFocused) {
      refetch();
    }
  }, [isFocused, prevIsFocused]);

  React.useEffect(() => {
    if (error) {
      console.error('Fetch error: ' + error.status + ' ' + error.statusText);
      console.error(error);
    }
  }, [error]);
  React.useEffect(() => {
    if (data) {
      onData(data);
    }
  }, [data]);

  return children({ loading, data, error, refetchGetUserChatrooms: refetch });
};
