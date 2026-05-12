import { FlatList, Image, Modal, Text, TouchableOpacity, View } from "react-native";

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
        
            <FlatList
                data={[1,2,3,4,5]}
                keyExtractor={item => item}
                renderItem={()=> (
                    <Link name="MinasUpdate" url="minasupdate.com.br" 
                        onDetails={()=>{console.log('clickou')}}
                    />
                )}
                style={styles.links}
                contentContainerStyle={styles.linksContent}
                showsVerticalScrollIndicator={false}
            />
           <Modal transparent visible={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCategory}>Curso</Text>
                            <TouchableOpacity>
                                <MaterialIcons name="close" size={20} color={colors.gray[400]} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.modalLinkName}>
                            MinasUpdate
                        </Text>
                        <Text style={styles.modalUrl}>
                            URL
                        </Text>
                    </View>

                </View>
           </Modal>
        </View>
    );
}