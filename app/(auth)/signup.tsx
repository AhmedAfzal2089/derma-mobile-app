import Spinner from "@/components/Common/Spinner";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Toast from "react-native-toast-message";
import { auth } from "../config/firebase";
import { SignupPayload } from "../models/signup-payload.model";
import { ENVIRONMENT } from "../constants/environment.constants";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [errors, setErrors] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // --- Validation Functions ---
  const validateFullName = (value: string) => {
    if (!value.trim()) return "Full Name is required";
    if (value.length < 3) return "Full Name must be at least 3 characters";
    if (!/^[a-zA-Z\s]{3,50}$/.test(value)) return "Full Name must contain only letters and spaces";
    return "";
  };

  const validateEmail = (value: string) => {
    if (!value.trim()) return "Email is required";
    if (value.length > 50) return "Email must not exceed 50 characters";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email address";
    return "";
  };

  const validatePhone = (value: string) => {
    if (!value.trim()) return "Phone number is required";
    return "";
  };

  const validatePassword = (value: string) => {
    if (!value) return "Password is required";
    if (value.length < 8) return "Password must be at least 8 characters";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    if (!regex.test(value)) return "Password must include upper, lower, number, and special character";
    return "";
  };

  const validateConfirmPassword = (value: string) => {
    if (!value) return "Confirm Password is required";
    if (value !== password) return "Passwords do not match";
    return "";
  };

  const handleBlur = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "fullName":
        error = validateFullName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "phoneNumber":
        error = validatePhone(value);
        break;
      case "password":
        error = validatePassword(value);
        break;
      case "confirmPassword":
        error = validateConfirmPassword(value);
        break;
    }
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  // --- Disable button if any validation fails ---
  const isFormValid =
    !validateFullName(fullName) &&
    !validateEmail(email) &&
    !validatePhone(phoneNumber) &&
    !validatePassword(password) &&
    !validateConfirmPassword(confirmPassword);

  // --- Signup logic (same as before) ---
  const handleSignup = async () => {
    setLoading(true);
    try {
      const payload = new SignupPayload();
      payload.displayName = fullName;
      payload.email = email;
      payload.phone = phoneNumber;
      payload.password = password;

      const response = await fetch(`${ENVIRONMENT.API_BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await sendEmailVerification(userCredential.user);

      Toast.show({
        type: "success",
        text1: `Signup Successful, Account created for ${data.userData.name}. Please verify your email.`,
      });

      await auth.signOut();

      setFullName("");
      setEmail("");
      setPhoneNumber("");
      setPassword("");
      setConfirmPassword("");
      setErrors({ fullName: "", email: "", phoneNumber: "", password: "", confirmPassword: "" });
    } catch (error: any) {
      console.log("Error in signup", error);
      Toast.show({
        type: "error",
        text1: "An error occurred during Signup.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex flex-col justify-center items-center px-4 w-full">
      {/* Full Name */}
      <TextInput
        placeholder="Full Name"
        keyboardType="default"
        autoCapitalize="words"
        className={`w-full border rounded-lg px-4 py-3 mb-1 text-base text-zinc-900 ${
          errors.fullName ? "border-red-500" : "border-zinc-300"
        }`}
        value={fullName}
        onChangeText={setFullName}
        onBlur={() => handleBlur("fullName", fullName)}
        editable={!loading}
      />
      {errors.fullName ? <Text className="text-red-500 mb-2 text-sm self-start">*{errors.fullName}</Text> : null}

      {/* Email */}
      <TextInput
        placeholder="Email Address"
        keyboardType="email-address"
        autoCapitalize="none"
        className={`w-full border rounded-lg px-4 py-3 mb-1 text-base text-zinc-900 ${errors.email ? "border-red-500" : "border-zinc-300"}`}
        value={email}
        onChangeText={setEmail}
        onBlur={() => handleBlur("email", email)}
        editable={!loading}
      />
      {errors.email ? <Text className="text-red-500 mb-2 text-sm self-start">*{errors.email}</Text> : null}

      {/* Phone Number */}
      <TextInput
        placeholder="Phone Number"
        keyboardType="phone-pad"
        autoCapitalize="none"
        className={`w-full border rounded-lg px-4 py-3 mb-1 text-base text-zinc-900 ${
          errors.phoneNumber ? "border-red-500" : "border-zinc-300"
        }`}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onBlur={() => handleBlur("phoneNumber", phoneNumber)}
        editable={!loading}
      />
      {errors.phoneNumber ? <Text className="text-red-500 mb-2 text-sm self-start">*{errors.phoneNumber}</Text> : null}

      {/* Password */}
      <View className="w-full relative mb-1">
        <TextInput
          placeholder="Password (Minimum 8 characters)"
          secureTextEntry={!showPassword}
          className={`w-full border rounded-lg px-4 py-3 text-base text-zinc-900 pr-10 ${
            errors.password ? "border-red-500" : "border-zinc-300"
          }`}
          value={password}
          onChangeText={setPassword}
          onBlur={() => handleBlur("password", password)}
          editable={!loading}
        />
        <Pressable className="absolute right-3 top-3" onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={22} color="gray" />
        </Pressable>
      </View>
      {errors.password ? <Text className="text-red-500 mb-2 text-sm self-start">*{errors.password}</Text> : null}

      {/* Confirm Password */}
      <View className="w-full relative mb-1">
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          className={`w-full border rounded-lg px-4 py-3 text-base text-zinc-900 pr-10 ${
            errors.confirmPassword ? "border-red-500" : "border-zinc-300"
          }`}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          onBlur={() => handleBlur("confirmPassword", confirmPassword)}
          editable={!loading}
        />
        <Pressable className="absolute right-3 top-3" onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={22} color="gray" />
        </Pressable>
      </View>
      {errors.confirmPassword ? <Text className="text-red-500 mb-2 text-sm self-start">*{errors.confirmPassword}</Text> : null}

      {/* Create Account Button */}

      <Pressable
        onPress={handleSignup}
        className={`w-full py-3 rounded-lg items-center mt-2 ${loading || !isFormValid ? "bg-zinc-700" : "bg-zinc-900"}`}
        disabled={loading || !isFormValid}
      >
        <Text className="text-white font-semibold text-base">{loading ? <Spinner size="small" color="#fff" /> : "Create Account"}</Text>
      </Pressable>
    </View>
  );
}
