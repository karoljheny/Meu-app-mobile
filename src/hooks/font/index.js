import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator, Text, View } from "react-native";



const FontContext = createContext({});

export function FontProvider({ children }) {
    const[loaded, error] = useFonts({
        regular: require('../../assets/fonts/Montserrat-Regular.ttf'),
        bold: require("../../assets/fonts/Montserrat-Bold.ttf"),
        black: require("../../assets/fonts/Montserrat-Black.ttf"),
        semibold: require("../../assets/fonts/Montserrat-SemiBold.ttf"),
        light: require("../../assets/fonts/Montserrat-Light.ttf"),  
    });

    if (!loaded && !error) {
        return
         <View style= {{ flex: 1, justifyContent: "center", alignItems: "center"}}>
          <Text style={{ fontSize: 28, marginTop: 15}}>
            Carregando as fontes 
          </Text>
          <ActivityIndicator size="large" color="#0000ff" />
         </View>;

    }
    return <FontContext.Provider value={{loaded}}>{children}</FontContext.Provider>;
}

export function useFont() {
    const Context = useContext(FontContext);

    if(!Context) {
        throw new Error("useFont must be use whithin a FontProvider");
    }
    return Context;
}
