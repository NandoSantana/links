import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import { colors } from "../styles/colors";
import { styles } from "./styles";

import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";
import { linkStorage } from "@/storage/link-storage";





export default function Add(){

    const [category, setCategory] = useState();
    const [name, setName ] = useState("");
    const [url, setUrl ] = useState("");

    async function handleAdd(){
        try {
            if(!category){
                return Alert.alert("Categoria", "Selecione a categoria")
            }
            if(!name.trim()){
                return Alert.alert('Nome', "Informe o nome")
            }
            if(!url.trim()){
                return Alert.alert('Url', "Informe a url")
            }
            await linkStorage.save({
                id: new Date().getTime().toString(),
                name, 
                url, 
                category
            })
           
        
        } catch (error) {
            Alert.alert('Erro', "Não foi possivel salvar o link")
            console.log(error)
        }
        
    }

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back() }>
                    <MaterialIcons name="arrow-back" size={32} color={colors.gray[200]} />
                </TouchableOpacity>

                <Text style={styles.title}>Novo</Text>
         
            </View>
            <Text style={styles.label}>Selecione uma categoria</Text>
            <Categories onChange={setCategory} selected={category} />

            <View style={styles.form}>
                <Input autoCapitalize="none" placeholder="Nome" onChangeText={(value) => setName(value)} autoCorrect={false}/>
                <Input 
                    placeholder="Url" 
                    onChangeText={setUrl}
                    autoCapitalize="none"
                    />

                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )

}