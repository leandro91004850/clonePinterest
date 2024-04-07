import { Slot } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StyleSheet, StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {

    const [fontsLoaded] =useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    if(fontsLoaded) {
        SplashScreen.hideAsync();
    }

    return (
        <GestureHandlerRootView style={styles.container}>
            <StatusBar barStyle="light-content"/>
            {fontsLoaded && <Slot/>}
        </GestureHandlerRootView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})