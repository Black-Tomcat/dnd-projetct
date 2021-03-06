import React, { useContext, useState } from "react";
import { ActivityIndicator, Platform, StyleSheet, View } from "react-native";

import { useMutation } from "@apollo/react-hooks";
import Text from "../components/Text";
import Section from "../components/Section";
import { Formik } from "formik";
import { TextField } from "react-native-material-textfield";
import { Icon } from "react-native-elements";
import Button from "../components/Button";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { RegisterDocument, RegisterMutation, RegisterMutationVariables } from "../graph/graphql";
import { ThemeContext } from "../utils/ThemeContext";
import { AuthContext } from "../app/auth";
import FormikTextField from "../components/form/FormikTextField";
import { Layout, useTheme } from "@ui-kitten/components";

interface RegisterScreenProps {}

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("confirmPassword")], "The passwords must match")
        .min(8),
    confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], "The passwords must match")
        .min(8),
});

const RegisterScreen: React.FC<RegisterScreenProps> = (props: RegisterScreenProps) => {
    const navigation = useNavigation();
    const [register, { loading }] = useMutation<RegisterMutation, RegisterMutationVariables>(
        RegisterDocument
    );

    const theme = useTheme();

    const { setTokens } = useContext(AuthContext);

    return (
        <Layout level={"4"} style={{ alignItems: "center", padding: 13 * 4 }}>
            <Section style={{ width: 400, alignSelf: "center", margin: 13 * 4 }} first last>
                <Text category={"h1"}>Register</Text>
                <Formik
                    initialValues={{ username: "", password: "", confirmPassword: "" }}
                    validationSchema={validationSchema}
                    onSubmit={({ username, password }, { setFieldError, setErrors, setStatus }) => {
                        console.log("setting");
                        register({
                            variables: {
                                username,
                                password,
                            },
                        }).then((res) => {
                            if (res.data?.userCreate?.__typename === "UserCreate") {
                                const { accessToken, refreshToken } = res.data.userCreate;
                                setTokens(accessToken, refreshToken);
                            } else if (res.data?.userCreate?.__typename === "MutationFail") {
                                res.data.userCreate.errors?.map((error) => {
                                    if (error.path[0]) {
                                        setFieldError(error.path.join("."), error.message);
                                    } else {
                                        setStatus(error.message);
                                    }
                                });
                            }
                        });
                    }}
                >
                    {({ status, handleSubmit }) => (
                        <View>
                            <View style={{ marginVertical: 13, alignItems: "center" }}>
                                <FormikTextField
                                    fieldName={"username"}
                                    label={"Username"}
                                    style={{ alignSelf: "stretch" }}
                                />
                                <FormikTextField
                                    fieldName={"password"}
                                    passwordField
                                    label={"Password"}
                                    style={{ alignSelf: "stretch" }}
                                />
                                <FormikTextField
                                    fieldName={"confirmPassword"}
                                    passwordField
                                    label={"Confirm Password"}
                                    style={{ alignSelf: "stretch" }}
                                />
                                {status && (
                                    <Text style={{ color: theme["color-danger-500"] }}>
                                        {status}
                                    </Text>
                                )}
                            </View>
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    marginBottom: 13,
                                }}
                            >
                                <Button onPress={handleSubmit} style={{ marginRight: 13 }}>
                                    Submit
                                </Button>
                                <ActivityIndicator animating={loading} size={"small"} />
                            </View>
                            <Text>
                                Already have an account?{" "}
                                <Text
                                    style={{ textDecorationLine: "underline" }}
                                    onPress={() => {
                                        navigation.navigate("Login");
                                    }}
                                >
                                    Login
                                </Text>
                            </Text>
                        </View>
                    )}
                </Formik>
            </Section>
        </Layout>
    );
};

export default RegisterScreen;
