import { View, Image, StyleSheet } from "react-native";
import React from "react";
import AppInput from "../../components/AppInput";
import { colors } from "../../config/colors";
import AppButton from "../../components/AppButton";
import AppText from "../../components/typo/AppText";
// import SelectDropdown from "react-native-select-dropdown";

const gender = ["Select gender", "Female", "Male"];

const ProfileUpdateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <AppText value="Upload Image" color={colors.tomato} />
        <AppInput placeholder="Full Name" />
        <AppInput placeholder="Email" />
        <AppInput placeholder="Date of birth" />
        {/* <SelectDropdown
          data={gender}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            // text represented after item is selected
            // if data array is an array of objects then return selectedItem.property to render after item is selected
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            // text represented for each item in dropdown
            // if data array is an array of objects then return item.property to represent item in dropdown
            return item;
          }}
        /> */}
        <AppButton title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.tomato,
    padding: 10,
    justifyContent: "center",
  },
  inputs: {
    gap: 12,
  },
});

export default ProfileUpdateScreen;
