import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((response) => {
      const user = response.user;
      console.log(user);
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
          <div className="p-field">
            <Button onClick={login}>Giriş</Button>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
