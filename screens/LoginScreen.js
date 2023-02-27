import { useContext, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/AuthUI/LoadingOverlay";
import { AuthContext } from "../store/auth-context";
import { LinearGradient } from "expo-linear-gradient";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebaseConfig";

const auth = getAuth(app);

function LoginScreen() {
  const [isAuthenticating, setIsAutenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function loginHandler({ email, password }) {
    setIsAutenticating(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        
        // console.log(user.email);
        const token = user.accessToken;
        authCtx.authenticate(token);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(
          `Authentication Falid ${errorCode}`,
          `Please Check Your Cordintial and try again later ${errorMessage}`
        );
      });
    setIsAutenticating(false);
  }

  if (isAuthenticating) {
    return <LoadingOverlay message='Logging you in...' />;
  }

  return (
    <LinearGradient colors={["#5dfa6e", "#2f302e"]} style={styles.container}>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </LinearGradient>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
