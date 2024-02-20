import { ActivityIndicator, FlatList, StyleSheet } from "react-native";
import { Text, View } from "@/src/components/Themed";
import StockListItem from "@/src/components/StockListItem";
import { Stack } from "expo-router";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query MyQuery($user_id: String!) {
    favoritesByUser_id(user_id: $user_id) {
      id
      quote {
        name
        symbol
        close
        percent_change
      }
    }
  }
`;

export default function TabTwoScreen() {
  const { data, loading, error } = useQuery(query, {
    variables: { user_id: "vadim" },
  });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch favorites.</Text>;
  }

  const stocks = data.favoritesByUser_id.map((fav) => fav.quote);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Favorites" }} />

      <FlatList
        data={stocks}
        renderItem={({ item }) => <StockListItem stock={item} />}
        contentContainerStyle={{ gap: 20, padding: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
