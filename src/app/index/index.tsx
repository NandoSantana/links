import { Image, View } from "react-native";

import { styles } from "./styles";

export default function Index() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} />
            </View>
        </View>
    );
}