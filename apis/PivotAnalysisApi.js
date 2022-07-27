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

export const getScoresGET = (
  Constants,
  { league_id, limit, start_date_after, state_date_before }
) =>
  fetch(
    `https://api.pivotanalysis.app/api/stats/feed?league_id=${
      league_id ?? ''
    }&limit=${limit ?? ''}&start_date_after=${
      start_date_after ?? ''
    }&start_date_before=${state_date_before ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['pivot_auth_header'],
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

export const useGetScoresGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Scores', args], () => getScoresGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetScoresGET = ({
  children,
  onData = () => {},
  refetchInterval,
  league_id,
  limit,
  start_date_after,
  state_date_before,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetScoresGET(
    { league_id, limit, start_date_after, state_date_before },
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

  return children({ loading, data, error, refetchGetScores: refetch });
};

export const getTokenPOST = Constants =>
  fetch(`https://api.pivotanalysis.app/api/token/`, {
    body: JSON.stringify({
      email: 'marknaufel@gmail.com',
      password: 'Naufel2022!',
    }),
    headers: {
      Accept: 'application/json',
      Authorization: Constants['pivot_auth_header'],
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

export const useGetTokenPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => getTokenPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Auth', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Auth');
        queryClient.invalidateQueries('Auths');
      },
    }
  );
};
