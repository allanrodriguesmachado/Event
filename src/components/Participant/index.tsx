import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

type Properties = {
    name: string
}

export default function Participant({name}: Properties) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity style={styles.button} >
                    <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
        </View>
    )
}