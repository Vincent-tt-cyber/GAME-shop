import React from "react";
import styles from "./HomePage.module.css";
import GameItem from "../../components/GameItem/GameItem";

// https://youtu.be/2j_xaE91mNA?t=1640

export const HomePage = () => {
  const GAMES = [
    {
      id: 1,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/dac9251a-d851-4ff9-b783-edcb8a6f2bc1.jpg?quality=85&format=webp",
      title: "Atomic Heart",
      geners: ["Экшен", "Ролевые", "Шутер"],
      price: 2499,
      video: "https://youtu.be/0UBiw1xkHl8",
      description:
        "Atomic Heart — приключенческий ролевой боевик с открытым миром, действие которого разворачивается в альтернативном Советском Союзе 1955 года.",
    },
    {
      id: 2,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocaledraft/picture/a51bb02c-d35d-4228-bef1-3bc7383dc6f3.jpg?quality=85&format=webp",
      title: "Fisher Online",
      geners: ["Симулятор", "MMORPG", "Спорт"],
      price: 399,
      video: false,
      description:
        "Fisher Online - многопользовательский онлайн-симулятор рыбалки. Забудьте о лицензиях и нормах вылова. Выбирайте удочку, наживку и ловите рыбу в странах Европы и России. Ловите в любом месте на открытых водоёмах в любое время суток. Ловите на поплавок, спиннинг, нахлыст или донную снасть. Множество видов рыбы, от мелкой уклейки до огромного осетра, ждут вас.",
    },
    {
      id: 3,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/beecae32-cb74-4580-b801-622e4832cfef.jpg?quality=85&format=webp",
      title: "Torn Away",
      geners: ["Приключения", "Квест", "Инди", "Военные", "Пазл", "Российские"],
      price: 495,
      video: "https://vk.com/video-187477335_456239158",
      description:
        "Torn Away — интерактивная история, собранная из элементов приключенческих игр, стелс сайд-скроллера и сцен от первого лица. Взгляните на ужасы Второй мировой войны глазами ребенка. Сможете ли вы сохранить веру в людей и вернуться домой?",
    },
    {
      id: 4,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/c4d60cc7-4855-4be1-a671-1176452eaee4.jpg?quality=85&format=webp",
      title: "Myth of Empires",
      geners: ["Экшен", "Стратегия", "Ролевые", "MMORPG"],
      price: 1799,
      video: "https://youtu.be/issLgGMtlbU",
      description:
        "Myth of Empires - многопользовательская песочница. Обладая свободой действий, игроки будут сражаться, чтобы выжить и завоевать себе место на земле. Стройте крепости, возглавьте армии в масштабных сражениях, осаждайте города и создайте собственную империю!",
    },
    {
      id: 5,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/dac9251a-d851-4ff9-b783-edcb8a6f2bc1.jpg?quality=85&format=webp",
      title: "Atomic Heart",
      geners: ["Экшен", "Ролевые", "Шутер"],
      price: 2499,
      video: "https://youtu.be/0UBiw1xkHl8",
      description:
        "Atomic Heart — приключенческий ролевой боевик с открытым миром, действие которого разворачивается в альтернативном Советском Союзе 1955 года.",
    },
    {
      id: 6,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocaledraft/picture/a51bb02c-d35d-4228-bef1-3bc7383dc6f3.jpg?quality=85&format=webp",
      title: "Fisher Online",
      geners: ["Симулятор", "MMORPG", "Спорт"],
      price: 399,
      video: false,
      description:
        "Fisher Online - многопользовательский онлайн-симулятор рыбалки. Забудьте о лицензиях и нормах вылова. Выбирайте удочку, наживку и ловите рыбу в странах Европы и России. Ловите в любом месте на открытых водоёмах в любое время суток. Ловите на поплавок, спиннинг, нахлыст или донную снасть. Множество видов рыбы, от мелкой уклейки до огромного осетра, ждут вас.",
    },
    {
      id: 7,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/beecae32-cb74-4580-b801-622e4832cfef.jpg?quality=85&format=webp",
      title: "Torn Away",
      geners: ["Приключения", "Квест", "Инди", "Военные", "Пазл", "Российские"],
      price: 495,
      video: "https://vk.com/video-187477335_456239158",
      description:
        "Torn Away — интерактивная история, собранная из элементов приключенческих игр, стелс сайд-скроллера и сцен от первого лица. Взгляните на ужасы Второй мировой войны глазами ребенка. Сможете ли вы сохранить веру в людей и вернуться домой?",
    },
    {
      id: 8,
      image:
        "https://vkplay.ru/pre_310x186_resize/hotbox/showcase/gamelocale/picture/c4d60cc7-4855-4be1-a671-1176452eaee4.jpg?quality=85&format=webp",
      title: "Myth of Empires",
      geners: ["Экшен", "Стратегия", "Ролевые", "MMORPG"],
      price: 1799,
      video: "https://youtu.be/issLgGMtlbU",
      description:
        "Myth of Empires - многопользовательская песочница. Обладая свободой действий, игроки будут сражаться, чтобы выжить и завоевать себе место на земле. Стройте крепости, возглавьте армии в масштабных сражениях, осаждайте города и создайте собственную империю!",
    },
  ];

  return (
    <>
      <div className={styles["home-page"]}>
        {GAMES.map((game) => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </>
  );
};
