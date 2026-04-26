import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.title} >teste</Text>
            <Text style={styles.title}>No android passa, fica na barrar</Text>
        </View>

    );
}