import {
  Background,
  ButtonLink,
  ContentWrap,
  Section,
  SubTitle,
  Title,
} from "./HomePage-styled";

export const HomePage = () => {
  return (
    <>
      <Background>
        <Section>
          <ContentWrap>
            <Title>
              Let's <span>Go!</span>
            </Title>
            <SubTitle>
              Discover a world of convenient car rentals in Ukraine with Car
              Rental.
            </SubTitle>
            <SubTitle>
              Explore our wide range of vehicles, choose the one that suits your
              needs, and hit the road!
            </SubTitle>

            <ButtonLink to="/catalog">Get started</ButtonLink>
          </ContentWrap>
        </Section>
      </Background>
    </>
  );
};
