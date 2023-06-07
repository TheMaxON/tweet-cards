import { LinkBtnStyled } from 'components/TweetsList/TweetsList.styled';
import {
  HomeGreetingsWrapper,
  MainGreeting,
  Description,
  CardsImg,
} from 'components/Home/Home.styled';
import CardsIllustration from 'media/home-cards-illustration.png';

const Home = () => {
  return (
    <HomeGreetingsWrapper>
      <MainGreeting>Welcome!</MainGreeting>
      <Description>
        Here you can find new tweets or manage existing ones.
      </Description>
      <CardsImg src={CardsIllustration} alt="Cards illustration" />
      <LinkBtnStyled to="/tweets">Go to Tweets! ▶</LinkBtnStyled>
    </HomeGreetingsWrapper>
  );
};

export default Home;
