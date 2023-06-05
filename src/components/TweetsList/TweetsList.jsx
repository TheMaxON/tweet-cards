import {
  TweetsListWrapper,
  TweetsListStyled,
  Card,
  LogoStyled,
  AvatarWrapper,
  AvatarOutline,
  AvatarBackground,
  AvatarImg,
  LineDecor,
  Statistics,
  FollowBtn,
  FollowingBtn,
  ButtonStyled,
} from './TweetsList.styled';
import TopDecorImg from 'media/card-top-decor.png';
import { useState } from 'react';

const TweetsList = ({
  allTweets,
  updateFollowing,
  onLoadMore,
  hasMoreTweets,
}) => {
  const [localFollowing] = useState(false);
  const changeLocalFollowing = (id, followers, following) => {
    updateFollowing(id, followers, following);
  };
  return (
    <TweetsListWrapper>
      <TweetsListStyled>
        {allTweets.map(({ id, avatar, name, tweets, followers, following }) => (
          <Card key={id}>
            <LogoStyled />
            <img src={TopDecorImg} alt="Card decor" />
            <AvatarWrapper className="avatar-wrapper">
              <AvatarOutline className="avatar-outline">
                <AvatarBackground>
                  <AvatarImg src={avatar} alt="Avatar" />
                </AvatarBackground>
              </AvatarOutline>
              <LineDecor className="line-decor"></LineDecor>
            </AvatarWrapper>
            <Statistics className="statistics">
              <p>{tweets.toLocaleString('en-US')} tweets</p>
              <p>{followers.toLocaleString('en-US')} followers</p>
            </Statistics>
            {following ? (
              <FollowingBtn
                type="button"
                onClick={() => changeLocalFollowing(id, followers, following)}
              >
                following
              </FollowingBtn>
            ) : (
              <FollowBtn
                type="button"
                onClick={() => changeLocalFollowing(id, followers, following)}
              >
                follow
              </FollowBtn>
            )}
          </Card>
        ))}
      </TweetsListStyled>
      {hasMoreTweets && (
        <ButtonStyled type="button" onClick={onLoadMore}>
          Load more
        </ButtonStyled>
      )}
    </TweetsListWrapper>
  );
};

export default TweetsList;
