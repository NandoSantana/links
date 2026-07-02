import { Category } from "@/components/category";
import { categories } from "@/utils/categories";
import { FlatList } from "react-native";
import { styles } from "./styles";

type Props = {
    selected: string,
    onChange:(cagtegory:string) => void
}

export function Categories({selected, onChange}){
    return(
        <FlatList
            data={categories}
            keyExtractor={(item)=> item.id}
            renderItem={({item}) => <Category onPress={() => onChange(item.name)} name={item.name} icon={item.icon} isSelected={item.name === selected} />}
            horizontal
            style={styles.container}
            contentContainerStyle={styles.content}
            showsHorizontalScrollIndicator={false}
        />
    )
}