import { View, Text, TextInput } from "react-native";
import React from "react";
import { CustomInputProps } from "@/types/type";
import cn from "clsx";


const CustomInput = ({
  placeholder = "Enter text",
  value,
  label,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <View className="w-full">
      <Text className="label">{label}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={isFocused ? "#000" : "#888"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={cn('input', isFocused ? 'border-primary' : 'border-gray-300')}
      />
    </View>
  );
};

export default CustomInput;
