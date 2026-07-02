import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { router } from "expo-router";
import { colors } from "../styles/colors";
import { styles } from "./styles";

import { Button } from "@/components/button";
import { Categories } from "@/components/categories";
import { Input } from "@/components/input";





export default function Add(){

    const [category, setCategory] = useState();
    const [name, setName ] = useState("");
    const [url, setUrl ] = useState("");

    function handleAdd(){
        console.log({name , url, category})
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
                <Input placeholder="Nome" onChangeText={(value) => setName(value)} autoCorrect={false}/>
                <Input placeholder="Url" onChangeText={setUrl}/>

                <Button title="Adicionar" onPress={handleAdd}/>
            </View>
        </View>
    )

}