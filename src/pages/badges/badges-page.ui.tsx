import { Box, Card, Chip, Tooltip, Typography } from '@mui/material';
import { achievementsQueries } from '~entities/achievements';
import { Title } from '~shared/ui/title';
import { BadgeCard } from '~widgets/badge-card';
import { userQueries } from '~entities/user';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css';
import 'swiper/css/pagination';




const rarityColors = [
  {
    rarity: 'Обычная',
    style: 'bg-[#6276CD]/80 text-white',
    description: 'Самая простая редкость, легко доступная.',
    probability: '60%',
    difficulty: 'Легко',
  },
  {
    rarity: 'Редкая',
    style: 'bg-sun text-tundora',
    description: 'Встречается реже, требует некоторых усилий.',
    probability: '25%',
    difficulty: 'Средняя',
  },
  {
    rarity: 'Эпическая',
    style: 'bg-[#3b039e] text-white',
    description: 'Довольно редкая, требует много времени и ресурсов.',
    probability: '10%',
    difficulty: 'Сложно',
  },
  {
    rarity: 'Легендарная',
    style: 'bg-gradient-to-r from-[#8A2BE2] to-70% to-blue text-white',
    description: 'Очень редкая, доступна только лучшим.',
    probability: '4%',
    difficulty: 'Очень сложно',
  },
  {
    rarity: 'Мифическая',
    style: 'bg-gradient-to-l from-red to-sun text-white',
    description: 'Практически невозможная для получения.',
    probability: '0.9%',
    difficulty: 'Экстремально сложно',
  },
  {
    rarity: 'Эксклюзивная',
    style: 'bg-gradient-to-l from-[#00188f] to-[#ec008c] text-white',
    description: 'Выдается только в уникальных условиях.',
    probability: '0.1%',
    difficulty: 'Уникально',
  },
];

export function BadgesPage() {
  const {
    data: achievementData,
    isLoading,
    isError,
  } = achievementsQueries.useAchievements();

  const {
    data: myachievementData,
    isLoading: isMyLoading,
    isError: isMyError,
  } = userQueries.useLoginUserQuery();

  if (isLoading || isMyLoading) {
    return <div>Loading...</div>;
  }
  if (myachievementData.data.role !== 'student') {
    return <div>Только для студентов</div>;
  }

  if (isError || isMyError) {
    return <div>Error fetching user data.</div>;
  }

  const myAchievementsIds = myachievementData.data.achievements.map(
    (achievement) => achievement.id
  );

  const filteredAchievements = achievementData.data
    .filter((achievement) => !myAchievementsIds.includes(achievement.id))
    .map((achievement) => ({
      ...achievement,
      hasAchievement: false,
    }));

  return (
    <div className='px-5 w-full'>
      <Title>Доска достижений</Title>
      <h5 className="font-bold my-3 text-[20px] text-tundora">
        Редкость достижений:
      </h5>
      <Swiper
      spaceBetween={10}
      className='max-w-[350px] md:hidden pb-8'
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
        slidesPerView={2}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {rarityColors.map(
          ({ rarity, style, description, probability, difficulty }) => (
            <SwiperSlide>
              <Tooltip
                key={rarity}
                title={
                  <Box>
                    <Typography variant="body2">
                      <strong>Описание:</strong> {description}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Вероятность:</strong> {probability}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Сложность:</strong> {difficulty}
                    </Typography>
                  </Box>
                }
              >
                <Chip
                  label={rarity}
                  className={`${style} w-[320px] font-bold px-2 transition duration-300 hover:cursor-pointer  hover:shadow-xl hover:scale-95`}
                />
              </Tooltip>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="md:flex flex-col md:flex-row gap-4 mb-10 hidden ">
        {rarityColors.map(
          ({ rarity, style, description, probability, difficulty }) => (
            <Tooltip
              key={rarity}
              title={
                <Box>
                  <Typography variant="body2">
                    <strong>Описание:</strong> {description}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Вероятность:</strong> {probability}
                  </Typography>
                  <Typography variant="body2">
                    <strong>Сложность:</strong> {difficulty}
                  </Typography>
                </Box>
              }
            >
              <Chip
                label={rarity}
                className={`${style} font-bold px-2 transition duration-300 hover:cursor-pointer  hover:shadow-xl hover:scale-95`}
              />
            </Tooltip>
          )
        )}
      </div>
      <h5 className="font-bold my-3 text-[20px] text-tundora">
        Мои достижения:
      </h5>
      <div className="flex flex-wrap gap-10 my-5">
        {myachievementData.data.achievements.map((achievement) => (
          <BadgeCard
            key={achievement.id}
            image={achievement.photo}
            title={achievement.name}
            description={achievement.description}
            rarity={achievement.rarity.name}
          />
        ))}
      </div>
      <h5 className="font-bold my-3 text-[20px] text-tundora">
        Все достижения:
      </h5>
      <div className="flex flex-wrap items-center gap-5 my-5">
        {filteredAchievements.map((achievement) => (
          <Box key={achievement.id} className="relative">
            <BadgeCard
              image={achievement.photo}
              title={achievement.name}
              description={achievement.description}
              rarity={achievement.rarity.name}
            />
            <Box className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-md flex items-center justify-center">
              <Typography variant="h6" className="text-white font-bold text-sm">
                Не достигнуто
              </Typography>
            </Box>
          </Box>
        ))}
      </div>
    </div>
  );
}
