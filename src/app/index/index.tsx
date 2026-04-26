import { Image, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";

import { Categories } from "@/components/categories";
import { Link } from "@/components/link";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../styles/colors";

export default function Index() {
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('@/assets/logo.png')} style={styles.logo} />
                <TouchableOpacity>
                    <MaterialIcons name="add" size={32} color={colors.green[300]} />
                </TouchableOpacity>
            </View>
           <Categories />
           <Link name="MinasUpdate" url="minasupdate.com.br" />
           <Link name="Google" url="google.com.br" />
           
        </View>
    );
}