import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { Link, router } from "expo-router";
import { signIn } from "@/lib/appWrite";

const SignIn = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async () => {
    const { email, password } = form;

    if (!email || !password)
      return Alert.alert(
        "Error",
        "Please enter valid email address & password."
      );

    setIsSubmitting(true);
    try {
      await signIn({ email, password });
      Alert.alert("Success", "You have successfully signed in!");
      router.replace("/");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View className="gap-10 bg-white rounded-lg p-5 mt-5">
      <CustomInput
        placeholder="Enter your mail"
        value={form.email}
        onChangeText={(text) => setForm((prev) => ({ ...prev, email: text }))}
        label="Email"
        keyboardType="email-address"
      />
      <CustomInput
        placeholder="Enter your password"
        value={form.password}
        onChangeText={(text) =>
          setForm((prev) => ({ ...prev, password: text }))
        }
        label="Password"
        secureTextEntry={true}
      />
      <CustomButton title="Sign In" onPress={submit} isLoading={isSubmitting} />
      <View className="flex flex-row justify-center mt-5 gap-2">
        <Text className="base-regular text-gray-100">
          Don't have an account
        </Text>
        <Link href="/signUp" className="base-bold text-primary">
          {" "}
          Sign Up
        </Link>
      </View>
    </View>
  );
};

export default SignIn;
