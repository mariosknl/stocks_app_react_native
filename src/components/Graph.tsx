import Colors from "../constants/Colors";
import { View, Text } from "./Themed";
import { LineGraph, GraphPoint } from "react-native-graph";
import timeseries from "@/assets/data/timeseries.json";
import { MonoText } from "./StyledText";
import { useState } from "react";

const Graph = () => {
  const points: GraphPoint[] = timeseries.values.map((value) => ({
    date: new Date(value.datetime),
    value: Number.parseFloat(value.close),
  }));
  const [selectedPoint, setSelectedPoint] = useState<GraphPoint>(
    points[points.length - 1]
  );

  const onPointSelected = (point: GraphPoint) => {
    setSelectedPoint(point);
  };

  return (
    <View>
      <MonoText style={{ fontSize: 20, color: Colors.light.graph }}>
        €{selectedPoint?.value.toFixed(1)}
      </MonoText>
      <Text style={{ color: "gray" }}>
        {selectedPoint?.date.toDateString()}
      </Text>

      <LineGraph
        style={{ width: "100%", height: 300 }}
        points={points}
        animated={true}
        color={Colors.light.graph}
        gradientFillColors={[
          Colors.light.gradientLight,
          Colors.light.gradientDark,
        ]}
        enablePanGesture
        onPointSelected={onPointSelected}
        indicatorPulsating
        enableIndicator
        enableFadeInMask
      />
    </View>
  );
};

export default Graph;
