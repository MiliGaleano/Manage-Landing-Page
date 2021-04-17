import React from 'react'
import styled from 'styled-components'
import {NewTitle} from './secondSection'
import {Text, Button} from './firstSection'
import user2 from '../assets/avatar-ali.png'
import user1 from '../assets/avatar-anisha.png'
import user3 from '../assets/avatar-richard.png'
import user4 from '../assets/avatar-shanai.png'
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
// import {tablet, desktop} from './Header'

const breakpoint1 = 850;
const breakpoint2 = 1400;

const tablet = `@media (min-width: ${breakpoint1}px)`
const desktop = `@media (min-width: ${breakpoint2}px)`

const DivThirdSection = styled.div`
    width: 80%;
    margin-left: 10%;
    margin-top: 80px;
`;

const TitleSection = styled(NewTitle)`
    ${tablet} {
        text-align: center;
        }
    `;

const UserCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:50px;

    ${tablet} {
        width: 60%;
        margin-left: 20%;
        }
`;

const ImgUser = styled.img`
    width: 100px;
    border-radius: 50%;
    position: relative;
    top: 50px;
`;

const UserDivText = styled.div`
    background-color: hsla(228, 39%, 23%, 0.03);
    padding: 50px 10px 30px;

    ${tablet} {
        padding: 50px 100px 30px;
        }
`;

const TitleUser = styled(NewTitle)`
    font-size: 1rem;
    padding-top: 30px;

    ${tablet} {
        text-align: center;
        }
`;

const OpinionUser = styled(Text)`
    ${tablet} {
        text-align: center;
        }
`;

const ThirdSection = () => {

    SwiperCore.use([Pagination]);

    return(
        <DivThirdSection>
            <TitleSection>What they’ve said</TitleSection>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <UserCard>
                        <ImgUser src={user1}></ImgUser>
                        <UserDivText>
                            <TitleUser>Anisha Li</TitleUser>
                            <OpinionUser>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</OpinionUser>
                        </UserDivText>
                    </UserCard>
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard>
                        <ImgUser src={user2}></ImgUser>
                        <UserDivText>
                            <TitleUser>Ali Bravo</TitleUser>
                            <OpinionUser>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</OpinionUser>
                        </UserDivText>
                    </UserCard>
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard>
                        <ImgUser src={user3}></ImgUser>
                        <UserDivText>
                            <TitleUser>Richard Watts</TitleUser>
                            <OpinionUser>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</OpinionUser>
                        </UserDivText>
                    </UserCard>
                </SwiperSlide>
                <SwiperSlide>
                    <UserCard>
                        <ImgUser src={user4}></ImgUser>
                        <UserDivText>
                            <TitleUser>Shanai Gough</TitleUser>
                            <OpinionUser>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</OpinionUser>
                        </UserDivText>
                    </UserCard>
                </SwiperSlide>
            </Swiper>
            <Button>Get Started</Button>
        </DivThirdSection>
    )
}

export default ThirdSection