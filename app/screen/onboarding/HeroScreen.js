import { Text, View, Image, StyleSheet } from "react-native";
import Screen from "../../components/Screen";
import AppText from "../../components/typo/AppText";
import { colors } from "../../config/colors";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppButton from "../../components/AppButton";

const HeroScreen = () => {
  const navigate = useNavigation();
  const handlePress = () => {
    navigate.navigate("Slide");
  };
  return (
    <Screen>
      <View
        style={{
          borderRadius: 20,
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/house2.jpg")}
        />
      </View>
      <View
        style={{
          width: "100%",
        }}
      >
        <AppText
          value="Welcome to EstateVR"
          size={30}
          bold={true}
          color={colors.tomato}
        />
        <AppText
          value="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque unde"
          size={15}
          bold={false}
          color="black"
        />
      </View>
      <AppButton title="Get Started" onPress={handlePress} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    overflow: "hidden",
  },
});
export default HeroScreen;
