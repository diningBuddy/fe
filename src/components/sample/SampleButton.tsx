import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, ButtonText } from "../../common/Button";
import { ChevronRight } from "../../assets/icons/arrow/chevron";

const SampleButton = () => {
  const [isPressed, setIsPressed] = useState(false);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Primary */}
      <View style={styles.buttonGroup}>
        <Button height="sm" iconL={ChevronRight}>
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>
        <Button isPressed={isPressed}>
          <ButtonText>MEDIUM</ButtonText>
        </Button>
        <Button height="lg">
          <ButtonText fontSize="lg">LARGE</ButtonText>
        </Button>
        <Button height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Primary + icon*/}
      <View style={styles.buttonGroup}>
        <Button height="sm">
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>
        <Button isPressed={isPressed} iconL={ChevronRight} iconColor="#ffffff">
          <ButtonText>MEDIUM</ButtonText>
        </Button>
        <Button height="lg">
          <ButtonText fontSize="lg">LARGE</ButtonText>
        </Button>
        <Button height="lg" isDisabled iconL={ChevronRight} iconColor="#ffffff">
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Secondary */}
      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm">
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>

        <Button mode="secondary" iconR={ChevronRight}>
          <ButtonText>MEDIUM</ButtonText>
        </Button>
        <Button mode="secondary" height="lg">
          <ButtonText>LARGE</ButtonText>
        </Button>

        {/* isDisabled */}
        <Button height="lg" isDisabled iconL={ChevronRight}>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Secondary + icon*/}
      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm">
          <ButtonText fontSize="sm">SMALL</ButtonText>
        </Button>

        <Button mode="secondary">
          <ButtonText>MEDIUM</ButtonText>
        </Button>
        <Button mode="secondary" height="lg" iconL={ChevronRight}>
          <ButtonText>LARGE</ButtonText>
        </Button>

        {/* isDisabled */}
        <Button height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Outline */}
      <View style={styles.buttonGroup}>
        <Button mode="outline" height="sm">
          <ButtonText mode="outline" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="outline">
          <ButtonText mode="outline">MEDIUM</ButtonText>
        </Button>
        <Button mode="outline" height="lg">
          <ButtonText mode="outline" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_RED Border none, only Text */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineRed" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineRed">MEDIUM</ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineRed" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button mode="text" height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_RED Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineRed" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineRed" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineRed" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button height="lg" isDisabled mode="text">
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Border none, only Text */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outline" fontSize="sm">
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outline">MEDIUM</ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outline" fontSize="lg">
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button mode="text" height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outline" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outline" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outline" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button mode="text" height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* OUTLINE_GRAY Border none, only Text underline */}
      <View style={styles.buttonGroup}>
        <Button mode="text" height="sm">
          <ButtonText mode="outlineGray" fontSize="sm" isUnderLine>
            SMALL
          </ButtonText>
        </Button>

        <Button mode="text">
          <ButtonText mode="outlineGray" isUnderLine>
            MEDIUM
          </ButtonText>
        </Button>
        <Button mode="text" height="lg">
          <ButtonText mode="outlineGray" fontSize="lg" isUnderLine>
            LARGE
          </ButtonText>
        </Button>

        {/* isDisabled */}
        <Button mode="text" height="lg" isDisabled>
          <ButtonText fontSize="lg" isDisabled>
            LARGE
          </ButtonText>
        </Button>
      </View>

      {/* loading button */}
      <View style={styles.buttonGroup}>
        <Button mode="main" height="sm" isLoading />
        <Button mode="main" isLoading />
        <Button mode="main" height="lg" isLoading />
      </View>

      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm" isLoading />
        <Button mode="secondary" isLoading />
        <Button mode="secondary" height="lg" isLoading />
      </View>

      <View style={styles.buttonGroup}>
        <Button mode="outline" height="sm" isLoading />
        <Button mode="outline" isLoading />
        <Button mode="outline" height="lg" isLoading />
      </View>

      {/* loading button */}
      <View style={styles.buttonGroup}>
        <Button mode="outline" height="sm" isLoading isDisabled />
        <Button mode="outline" isLoading isDisabled />
        <Button mode="outline" height="lg" isLoading isDisabled />
      </View>

      {/* pencil icon button  */}
      <View style={styles.buttonGroup}>
        <Button height="sm" isPencil />
        <Button isPencil />
        <Button height="lg" isPencil />
        <Button height="lg" isPencil isDisabled />
      </View>

      <View style={styles.buttonGroup}>
        {/* pencil icon button isCircle */}
        <Button height="sm" isPencil isCircle />
        <Button isPencil isCircle />
        <Button height="lg" isPencil isCircle />
        <Button height="lg" isPencil isDisabled isCircle />
      </View>

      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm" isPencil />
        <Button mode="secondary" isPencil />
        <Button mode="secondary" height="lg" isPencil />
        <Button mode="secondary" height="lg" isPencil isDisabled />
      </View>

      <View style={styles.buttonGroup}>
        <Button mode="secondary" height="sm" isPencil isCircle />
        <Button mode="secondary" isPencil isCircle />
        <Button mode="secondary" height="lg" isPencil isCircle />
        <Button mode="secondary" height="lg" isPencil isDisabled isCircle />
      </View>

      <View style={styles.buttonGroup}>
        <Button mode="outline" height="sm" isPencil />
        <Button mode="outline" isPencil />
        <Button mode="outline" height="lg" isPencil />
        <Button mode="outline" height="lg" isPencil isDisabled />
      </View>

      <View style={styles.buttonGroup}>
        {/* pencil icon button isCircle */}
        <Button mode="outline" height="sm" isPencil isCircle />
        <Button mode="outline" isPencil isCircle />
        <Button mode="outline" height="lg" isPencil isCircle />
        <Button mode="outline" height="lg" isPencil isDisabled isCircle />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  buttonGroup: {
    flexDirection: "row",
    margin: 8,
    gap: 12,
  },
});

export default SampleButton;