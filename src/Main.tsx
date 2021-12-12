import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import VideosRoute from "./screens/VideosScreen";
import MaisonRoute from "./screens/MaisonScreen";
import ActusRoute from "./screens/ActusScreen";

export default function Main() {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "videos", title: "Videos", icon: "video", color: "#3F5185" },
    { key: "maison", title: "La maison", icon: "home", color: "#3F5185" },
    { key: "actus", title: "Actus", icon: "history", color: "#3F5185" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    videos: VideosRoute,
    maison: MaisonRoute,
    actus: ActusRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}
