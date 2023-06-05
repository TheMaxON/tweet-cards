import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import TweetsList from 'components/TweetsList/TweetsList';
import { getTweets, changeFollowingState, refreshTweets } from 'services/api';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  // const [followingState, setFollowingState] = useState(false);
  const [hasMoreTweets, setHasMoreTweets] = useState(true);

  useEffect(() => {
    if (page === 1) {
      const fetchTweets = async () => {
        const tweets = await getTweets(page);
        setTweets(tweets);
      };
      fetchTweets();
    }
  }, []);

  useEffect(() => {
    if (page > 1 && hasMoreTweets) {
      const fetchTweets = async page => {
        const newTweets = await getTweets(page);
        setTweets(prevTweets => [...prevTweets, ...newTweets]);
        if (newTweets.length < 8) {
          setHasMoreTweets(false);
        }
      };
      fetchTweets(page);
    }
  }, [page, hasMoreTweets]);

  const updateFollowing = async (id, followers, followingState) => {
    const numberOfTweets = tweets.length;
    const newFollower = followingState ? (followers -= 1) : (followers += 1);
    const newState = {
      followers: newFollower,
      following: !followingState,
    };

    await changeFollowingState(id, newState);
    const updatedTweets = await refreshTweets(numberOfTweets);
    setTweets(updatedTweets);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <Section>
        <TweetsList
          allTweets={tweets}
          updateFollowing={updateFollowing}
          onLoadMore={onLoadMore}
          hasMoreTweets={hasMoreTweets}
        />
      </Section>
    </>
  );
};

export default Tweets;
