import { StyleSheet, View } from 'react-native';
import { CartesianChart, Bar } from "victory-native";

import { LinearGradient, useFont, vec } from "@shopify/react-native-skia"

const DATA = [
  { x: 'Ene', y: 2 },
  { x: 'Feb', y: 11 },
  { x: 'Mar', y: 23 },
  { x: 'Abr', y: 22 },
  { x: 'May', y: 34 },
  { x: 'Jun', y: 25 },
  { x: 'Jul', y: 39 },
  { x: 'Ago', y: 38 },
  { x: 'Sep', y: 25 },
  { x: 'Oct', y: 31 },
  { x: 'Nov', y: 20 },
  { x: 'Dic', y: 22 },
];

export default function App() {

  const font = useFont(require("./src/fonts/Roboto-Regular.ttf"))

  return (
    <View style={styles.container}>
      <View style={{width: '100%', height: 400}}>
        <CartesianChart 
          data={DATA}
          xKey="x"
          yKeys={["y"]}
          padding={10}
          domainPadding={{ left: 15, right: 15, top: 10 }}
          axisOptions={{
            tickCount: { x: 12, y: 20 },
            font: font,
            labelPosition: 'outset',
          }}
        >
          {({ points, chartBounds }) => (
            <Bar
              points={points.y}
              chartBounds={chartBounds}
              color="green"
              innerPadding={0.1}
              roundedCorners={{ topLeft: 10, topRight: 10 }}
              labels={{ position: "top", font: font, color: "orange" }}
            >
              <LinearGradient
                start={vec(0, 0)} // El inicio y el final son vectores que representan la dirección del degradado.
                end={vec(0, 500)}
                colors={[ // Los colores son un array de strings que representan los colores del degradado.
                  "#a78bfa",
                  "#a78bfa50" // El segundo color es el mismo que el primero, pero con un valor alfa del 50%.
                ]}
              />
            </Bar>
          )}
        </CartesianChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});