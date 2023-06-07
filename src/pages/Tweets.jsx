import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Section } from 'components/Section/Section';
import TweetsList from 'components/TweetsList/TweetsList';
import { getTweets, changeFollowingState, refreshTweets } from 'services/api';
import LoaderComponent from 'components/Loader/Loader';
import { LinkBtnStyled } from 'components/TweetsList/TweetsList.styled';

const Tweets = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreTweets, setHasMoreTweets] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const scrollPositionRef = useRef(null);

  useEffect(() => {
    const fetchTweets = async () => {
      try {
        setIsLoading(true);
        scrollPositionRef.current = window.pageYOffset;
        const allTweets = await getTweets(1);
        if (allTweets.length < 8) {
          setHasMoreTweets(false);
        } else {
          setHasMoreTweets(true);
        }
        setTweets(allTweets);
      } catch (error) {
        toast.error('The error has occured. Error info: ', error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTweets();
  }, []);

  useEffect(() => {
    if (page > 1 && hasMoreTweets) {
      const fetchTweets = async page => {
        try {
          setIsLoading(true);
          scrollPositionRef.current = window.pageYOffset;
          const newTweets = await getTweets(page);
          setTweets(prevTweets => [...prevTweets, ...newTweets]);
          if (newTweets.length < 8) {
            setHasMoreTweets(false);
          } else {
            setHasMoreTweets(true);
          }
        } catch (error) {
          toast.error('The error has occured. Error info: ', error);
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchTweets(page);
    }
  }, [page, hasMoreTweets]);

  useEffect(() => {
    if (!isLoading) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [isLoading]);

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
        <LinkBtnStyled to="/">◀ Go back</LinkBtnStyled>
      </Section>
      <Section>
        {!isLoading && tweets.length === 0 && <h2>No tweets here...</h2>}
        {!isLoading && tweets.length > 0 && (
          <TweetsList
            allTweets={tweets}
            updateFollowing={updateFollowing}
            onLoadMore={onLoadMore}
            hasMoreTweets={hasMoreTweets}
            isLoading={isLoading}
          />
        )}
      </Section>
    </>
  );
};

export default Tweets;
