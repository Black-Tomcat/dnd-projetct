import React, { useContext, useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { useMutation } from "@apollo/react-hooks";
import Text from "../components/Text";
import { LoginDocument, LoginMutation, LoginMutationVariables } from "../graph/graphql";
// @ts-ignore
import { GRAPH_PASSWORD, GRAPH_USERNAME } from "react-native-dotenv";
import { AuthContext } from "../app/auth";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../components/Section";
import { string } from "yup";
import { useNavigation } from "@react-navigation/native";
import { ThemeContext } from "../utils/ThemeContext";
import { TextField } from "react-native-material-textfield";
import { Icon } from "react-native-elements";
import Button from "../components/Button";

interface LoginScreenProps {}

const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
});

const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
    const { setTokens } = useContext(AuthContext);
    const { dangerColour } = useContext(ThemeContext);

    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const [login, { data, loading }] = useMutation<LoginMutation, LoginMutationVariables>(
        LoginDocument
    );

    const navigation = useNavigation();

    return (
        <View style={{ alignItems: "center", margin: 13 * 4 }}>
            <Text title>DnD Projetct</Text>
            <Section style={{ width: 400, alignSelf: "center", margin: 13 * 4 }} first last>
                <Text heading>Login</Text>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validationSchema}
                    onSubmit={({ username, password }, { setFieldError, setErrors, setStatus }) => {
                        login({
                            variables: {
                                username,
                                password,
                            },
                        }).then((res) => {
                            if (res.data?.login?.__typename === "Login") {
                                const { accessToken, refreshToken } = res.data.login;
                                setTokens(accessToken, refreshToken);
                            } else if (res.data?.login?.__typename === "MutationFail") {
                                res.data.login.errors?.map((error) => {
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
                    {({
                        status,
                        handleSubmit,
                        values,
                        errors,
                        touched,
                        handleBlur,
                        handleChange,
                    }) => (
                        <View>
                            <View style={{ marginVertical: 13, alignItems: "center" }}>
                                <TextField
                                    value={values.username}
                                    error={(touched.username && errors.username) || undefined}
                                    onChange={handleChange("username")}
                                    onBlur={handleBlur("username")}
                                    label={"username"}
                                    containerStyle={styles.containerStyleOverride}
                                    labelTextStyle={styles.labelTextOverride}
                                    fontSize={14}
                                />
                                <TextField
                                    value={values.password}
                                    error={(touched.password && errors.password) || undefined}
                                    onChange={handleChange("password")}
                                    onBlur={handleBlur("password")}
                                    label={"password"}
                                    containerStyle={styles.containerStyleOverride}
                                    labelTextStyle={styles.labelTextOverride}
                                    fontSize={14}
                                    secureTextEntry={!passwordVisible}
                                    renderRightAccessory={() => (
                                        <Icon
                                            name={passwordVisible ? "visibility-off" : "visibility"}
                                            onPress={() => {
                                                setPasswordVisible(!passwordVisible);
                                            }}
                                        />
                                    )}
                                />
                                {status && <Text style={{ color: dangerColour }}>{status}</Text>}
                            </View>
                            <Button onPress={handleSubmit} style={{ marginBottom: 13 }}>
                                Submit
                            </Button>
                            <Text>
                                Don't have an account?{" "}
                                <Text
                                    style={{ textDecorationLine: "underline" }}
                                    onPress={() => {
                                        navigation.navigate("Register");
                                    }}
                                >
                                    Register
                                </Text>
                            </Text>
                        </View>
                    )}
                </Formik>
            </Section>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyleOverride: { marginTop: -16, width: "100%" },
    labelTextOverride: {
        fontFamily: "Quattrocento Sans Regular",
        fontSize: 14,
        paddingLeft: Platform.OS == "web" ? "33.3333333%" : undefined,
    },
    override: {
        fontFamily: "Quattrocento Sans Regular",
        fontSize: 14,
        marginTop: 24,
        flexGrow: 1,
        transform: [{ translateY: 0 }],
    },
});

export default LoginScreen;
