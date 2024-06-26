import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import Participant from "../components/Participant";
import { useState } from "react";

export default function Home() {
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    function handleParticipantAdd() {
        if (participants.includes(participantName)) {
            return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome")
        }

        if (participantName.length == 0) {
            return Alert.alert("Atenção", "Informe o nome do participante")
        }


        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: string) {

        Alert.alert("Remover", `Remover o participante ${name}`, [
            {
                text: 'Sim',
                onPress: () => setParticipants(
                    prevState => prevState.filter(Participant => Participant !== name)
                )
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
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
                    onChangeText={setParticipantName}
                    value={participantName}
                />

                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>


            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                        key={item} name={item} onRemove={() => handleParticipantRemove(item)} />
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
            />
        </View>
    )
}