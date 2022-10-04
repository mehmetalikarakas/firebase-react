import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { app } from "../firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const adduser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((response) => {
      const user = response.user;
      console.log(user);
    });
  };

  const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        console.log("Token" + token);

        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <center>
        <h1>Login Ekranı</h1>
        <div>
          <div className="p-fluid" style={{ width: "600px" }}>
            <label htmlFor="email"> Email : </label>
            <InputText
              id="email"
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="p-fluid" style={{ width: "600px" }}>
            <label htmlFor="password">Password :</label>
            <InputText
              id="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="p-fiuld">
            <Button onClick={login}>Giriş</Button>
            <br></br>
            <Button onClick={adduser}>Kaydet</Button>
            <br></br>
            <Button onClick={loginWithGoogle}>Login with google</Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
