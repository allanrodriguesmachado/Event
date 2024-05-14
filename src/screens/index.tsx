import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Participant from "../components/Participant";

export default function Home() {

    function handleParticipantAdd() {
        console.log("OK")
    }

    return (
        <View style={styles.container}>

            <Text style={styles.eventName}>Nome do evento</Text>

            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2024</Text>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor={'#6B6B6B'}
                    keyboardType="default"
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant />
            <Participant />
            <Participant />
    </View>
    )
}