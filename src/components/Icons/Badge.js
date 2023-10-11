import React from "react";
import { View, Text } from "react-native";
import * as Color from "../Colors/colors";

export const Badge = (props) => {
	return <View style={{ backgroundColor: props.badgeBackGroudColor, padding: 5, borderRadius: 10 }}>{props.children}</View>;
};
