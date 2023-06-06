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
  const [filterOption, setFilterOption] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        const allTweets = await getTweets(filterOption, 1);
        if (allTweets.length < 8) {
          setHasMoreTweets(false);
        } else {
          setHasMoreTweets(true);
        }
        setTweets(allTweets);
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
          const newTweets = await getTweets(filterOption, page);
          setTweets(prevTweets => [...prevTweets, ...newTweets]);
          if (newTweets.length < 8) {
            setHasMoreTweets(false);
          } else {
            setHasMoreTweets(true);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchTweets(page);
    }
  }, [page, hasMoreTweets, filterOption]);

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

  const changeFilterOption = newFilterOption => {
    setFilterOption(newFilterOption);
  };

  return (
    <>
      {isLoading && <LoaderComponent />}
      <Section>
        {!isLoading && <FilterTweets changeFilterOption={changeFilterOption} />}
        {tweets.length === 0 && <h2>No tweets here...</h2>}
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
