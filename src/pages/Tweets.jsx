import { useState, useEffect } from 'react';
import { Section } from 'components/Section/Section';
import TweetsList from 'components/TweetsList/TweetsList';
import { getTweets, changeFollowingState, refreshTweets } from 'services/api';
import LoaderComponent from 'components/Loader/Loader';
import FilterTweets from 'components/FilterTweets/FilterTweets';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreTweets, setHasMoreTweets] = useState(true);
  const [filterOption, setFilterOption] = useState('Show all');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        switch (filterOption) {
          case 'Show all':
            const allTweets = await getTweets(null, 1);
            console.log(allTweets.keys());
            setTweets(allTweets);
            break;
          case 'Follow':
            const followTweets = await getTweets(false, 1);
            setTweets(followTweets);
            break;
          case 'Followings':
            const followingsTweets = await getTweets(true, 1);
            setTweets(followingsTweets);
            break;
          default:
            setTweets(tweets);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTweets();
  }, [filterOption]);

  useEffect(() => {
    if (page > 1 && hasMoreTweets) {
      const fetchTweets = async page => {
        try {
          setIsLoading(true);
          const newTweets = await getTweets(null, page);
          setTweets(prevTweets => [...prevTweets, ...newTweets]);
          if (newTweets.length < 8) {
            setHasMoreTweets(false);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
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
      {isLoading && <LoaderComponent />}
      <Section>
        {!isLoading && <FilterTweets setFilterOption={setFilterOption} />}
        <TweetsList
          allTweets={tweets}
          updateFollowing={updateFollowing}
          onLoadMore={onLoadMore}
          hasMoreTweets={hasMoreTweets}
          isLoading={isLoading}
        />
      </Section>
    </>
  );
};

export default Tweets;
