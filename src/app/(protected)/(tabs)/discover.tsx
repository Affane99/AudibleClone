import { useSupabase } from "@/lib/supabase";
import { ActivityIndicator, FlatList, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { BookListItem } from "@/components/BookListItem";

export default function Discover() {
  const supabase = useSupabase();

  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const { data, error } = await supabase.from("books").select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  });

  if (isLoading) return <ActivityIndicator />;

  if (error) return <Text className="text-red-500">Error: {error.message}</Text>;

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BookListItem book={item} />}
      contentContainerClassName="gap-4 p-4"
    />
  );
}