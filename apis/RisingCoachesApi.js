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

export const addJobToTimelinePOST = (
  Constants,
  { end_date, isCurrentJob, job_description, job_title, organization, user_id }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/job_timeline`, {
    body: JSON.stringify({
      job_title: job_title,
      organization: organization,
      user_id: user_id,
      end_date: end_date,
      isCurrentJob: isCurrentJob,
      job_description: job_description,
      start_date: null,
    }),
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

export const useAddJobToTimelinePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addJobToTimelinePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Profile', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Profile');
        queryClient.invalidateQueries('Profiles');
      },
    }
  );
};

export const addLikePOST = (Constants, { feed_post_id }) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/likes`, {
    body: JSON.stringify({ feed_post_id: feed_post_id }),
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

export const useAddLikePOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => addLikePOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Likes', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Like');
        queryClient.invalidateQueries('Likes');
      },
    }
  );
};

export const createAccountPOST = (
  Constants,
  { email, handle, name, password, profile_image }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/auth/signup`, {
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      handle: handle,
      profile_image: profile_image,
    }),
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

export const useCreateAccountPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createAccountPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('User', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('User');
        queryClient.invalidateQueries('Users');
      },
    }
  );
};

export const createCalendarItemPOST = (
  Constants,
  {
    creator_id,
    description,
    duration_minutes,
    event_date,
    event_day,
    event_location,
    event_name,
  }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/calendar`, {
    body: JSON.stringify({
      event_name: event_name,
      height: 100,
      day: event_day,
      datetime: event_date,
      creator_id: creator_id,
      location: event_location,
      start_time: null,
      duration_minutes: duration_minutes,
      description: description,
    }),
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

export const useCreateCalendarItemPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createCalendarItemPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Calendar', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Calendar');
        queryClient.invalidateQueries('Calendars');
      },
    }
  );
};

export const createCommentPOST = (
  Constants,
  { author_user_id, comment_text, feed_post_id }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/comment`, {
    body: JSON.stringify({
      comment_text: comment_text,
      author_user_id: author_user_id,
      feed_post_id: feed_post_id,
    }),
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

export const useCreateCommentPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createCommentPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Comment', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Comment');
        queryClient.invalidateQueries('Comments');
      },
    }
  );
};

export const createContentPOST = (
  Constants,
  {
    content_title,
    content_type,
    file_content,
    folder_id,
    image_content,
    isFile,
    isImage,
    isShared,
    isVideo,
    tags,
    text_content,
    youtubeID,
  }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/folder_content`, {
    body: JSON.stringify({
      folders_id: folder_id,
      content_title: content_title,
      tags: tags,
      content_type: content_type,
      text_content: text_content,
      content: image_content,
      isShared: isShared,
      youtubeId: youtubeID,
      isVideo: isVideo,
      isFile: isFile,
      isImage: isImage,
      file_content: file_content,
    }),
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

export const useCreateContentPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createContentPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Respository', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Respository');
        queryClient.invalidateQueries('Respositories');
      },
    }
  );
};

export const createPostPOST = (
  Constants,
  { author_user_id, image, post_content, post_title, post_type, tags }
) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/feedposts`, {
    body: JSON.stringify({
      content: image,
      post_title: post_title,
      tags: tags,
      author_user_id: author_user_id,
      post_type: post_type,
      post_content: post_content,
    }),
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

export const useCreatePostPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createPostPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Feed', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Feed');
        queryClient.invalidateQueries('Feeds');
      },
    }
  );
};

export const createRSVPPOST = (Constants, { event_id }) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/rsvps`, {
    body: JSON.stringify({ event_id: event_id }),
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

export const useCreateRSVPPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => createRSVPPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Calendar', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Calendar');
        queryClient.invalidateQueries('Calendars');
      },
    }
  );
};

export const deleteJobDELETE = (Constants, { job_timeline_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/job_timeline/${
      job_timeline_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['auth_header'],
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
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

export const useDeleteJobDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => deleteJobDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Profile', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Profile');
        queryClient.invalidateQueries('Profiles');
      },
    }
  );
};

export const deleteRSVPDELETE = (Constants, { rsvp_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/rsvps/${rsvp_id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['auth_header'],
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
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

export const useDeleteRSVPDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => deleteRSVPDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Calendar', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Calendar');
        queryClient.invalidateQueries('Calendars');
      },
    }
  );
};

export const followUserPOST = (Constants, { followed_id }) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/follows`, {
    body: JSON.stringify({ followed_id: followed_id }),
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

export const useFollowUserPOST = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => followUserPOST(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Follows', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Follow');
        queryClient.invalidateQueries('Follows');
      },
    }
  );
};

export const getAllUsersGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/user`, {
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

export const useGetAllUsersGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Users', args], () => getAllUsersGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetAllUsersGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetAllUsersGET(
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

  return children({ loading, data, error, refetchGetAllUsers: refetch });
};

export const getCalendarGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/calendar`, {
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

export const useGetCalendarGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Calendars', args], () => getCalendarGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetCalendarGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetCalendarGET(
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

  return children({ loading, data, error, refetchGetCalendar: refetch });
};

export const getContentDetailsGET = (Constants, { folder_content_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/folder_content/${
      folder_content_id ?? ''
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

export const useGetContentDetailsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['Respository', args],
    () => getContentDetailsGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['Respositories']),
    }
  );
};

export const FetchGetContentDetailsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  folder_content_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetContentDetailsGET(
    { folder_content_id },
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

  return children({ loading, data, error, refetchGetContentDetails: refetch });
};

export const getEventDetailGET = (Constants, { calendar_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/calendar/${
      calendar_id ?? ''
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

export const useGetEventDetailGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['Calendar', args],
    () => getEventDetailGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['Calendars']),
    }
  );
};

export const FetchGetEventDetailGET = ({
  children,
  onData = () => {},
  refetchInterval,
  calendar_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetEventDetailGET(
    { calendar_id },
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

  return children({ loading, data, error, refetchGetEventDetail: refetch });
};

export const getFeedGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/feedposts`, {
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

export const useGetFeedGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(['Feeds', args], () => getFeedGET(Constants, args), {
    refetchInterval,
  });
};

export const FetchGetFeedGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetFeedGET(
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

  return children({ loading, data, error, refetchGetFeed: refetch });
};

export const getJobTimelineGET = (Constants, { user_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/job_timeline/${
      user_id ?? ''
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

export const useGetJobTimelineGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Profiles', args],
    () => getJobTimelineGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetJobTimelineGET = ({
  children,
  onData = () => {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetJobTimelineGET(
    { user_id },
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

  return children({ loading, data, error, refetchGetJobTimeline: refetch });
};

export const getOpportunitiesGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/opportunities`, {
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

export const useGetOpportunitiesGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Opportunities', args],
    () => getOpportunitiesGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetOpportunitiesGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetOpportunitiesGET(
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

  return children({ loading, data, error, refetchGetOpportunities: refetch });
};

export const getOpportunityDetailGET = (Constants, { opportunity_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/opportunities/${
      opportunity_id ?? ''
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

export const useGetOpportunityDetailGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(
    ['Opportunity', args],
    () => getOpportunityDetailGET(Constants, args),
    {
      refetchInterval,
      onSuccess: () => queryClient.invalidateQueries(['Opportunities']),
    }
  );
};

export const FetchGetOpportunityDetailGET = ({
  children,
  onData = () => {},
  refetchInterval,
  opportunity_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetOpportunityDetailGET(
    { opportunity_id },
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

  return children({
    loading,
    data,
    error,
    refetchGetOpportunityDetail: refetch,
  });
};

export const getPostGET = (Constants, { post_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/feedposts/${post_id ?? ''}`,
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

export const useGetPostGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['SinglePost', args], () => getPostGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['SinglePosts']),
  });
};

export const FetchGetPostGET = ({
  children,
  onData = () => {},
  refetchInterval,
  post_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetPostGET(
    { post_id },
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

  return children({ loading, data, error, refetchGetPost: refetch });
};

export const getUserDetailGET = (Constants, { user_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/user/${user_id ?? ''}`,
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

export const useGetUserDetailGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  const queryClient = useQueryClient();
  return useQuery(['User', args], () => getUserDetailGET(Constants, args), {
    refetchInterval,
    onSuccess: () => queryClient.invalidateQueries(['Users']),
  });
};

export const FetchGetUserDetailGET = ({
  children,
  onData = () => {},
  refetchInterval,
  user_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetUserDetailGET(
    { user_id },
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

  return children({ loading, data, error, refetchGetUserDetail: refetch });
};

export const getUserFolderContentsGET = (Constants, { folder_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/folder_content/folder/${
      folder_id ?? ''
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

export const useGetUserFolderContentsGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Respositories', args],
    () => getUserFolderContentsGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetUserFolderContentsGET = ({
  children,
  onData = () => {},
  refetchInterval,
  folder_id,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetUserFolderContentsGET(
    { folder_id },
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

  return children({
    loading,
    data,
    error,
    refetchGetUserFolderContents: refetch,
  });
};

export const getUserFoldersGET = Constants =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/folders`, {
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

export const useGetUserFoldersGET = (args, { refetchInterval } = {}) => {
  const Constants = GlobalVariables.useValues();
  return useQuery(
    ['Respositories', args],
    () => getUserFoldersGET(Constants, args),
    {
      refetchInterval,
    }
  );
};

export const FetchGetUserFoldersGET = ({
  children,
  onData = () => {},
  refetchInterval,
}) => {
  const Constants = GlobalVariables.useValues();
  const isFocused = useIsFocused();
  const prevIsFocused = usePrevious(isFocused);

  const { loading, data, error, refetch } = useGetUserFoldersGET(
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

  return children({ loading, data, error, refetchGetUserFolders: refetch });
};

export const loginPOST = (Constants, { email, password }) =>
  fetch(`https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/auth/login`, {
    body: JSON.stringify({ email: email, password: password }),
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

export const removeLikeDELETE = (Constants, { post_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/likes/${post_id ?? ''}`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['auth_header'],
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
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

export const useRemoveLikeDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => removeLikeDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Likes', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Like');
        queryClient.invalidateQueries('Likes');
      },
    }
  );
};

export const unfollowUserDELETE = (Constants, { followed_id }) =>
  fetch(
    `https://xg3n-4mh1-ngd5.n7.xano.io/api:qSqAPJML/follows/${
      followed_id ?? ''
    }`,
    {
      headers: {
        Accept: 'application/json',
        Authorization: Constants['auth_header'],
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
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

export const useUnfollowUserDELETE = initialArgs => {
  const queryClient = useQueryClient();
  const Constants = GlobalVariables.useValues();

  return useMutation(
    args => unfollowUserDELETE(Constants, { ...initialArgs, ...args }),
    {
      onError: (err, variables, { previousValue }) => {
        if (previousValue) {
          return queryClient.setQueryData('Follows', previousValue);
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries('Follow');
        queryClient.invalidateQueries('Follows');
      },
    }
  );
};
