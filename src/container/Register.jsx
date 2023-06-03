import { useEffect, useRef, useState } from "react";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const Register = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setemailFocus] = useState(false);

  const [userName, setUserName] = useState("");
  const [validUserName, setValidUserName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [termbox, setTermbox] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  // check if user entered valid email address
  useEffect(() => {
    const result = USER_REGEX.test(userName);
    console.log(result);
    console.log(userName);
    setValidUserName(result);
  }, [userName]);

  // check if the password is valid and if the it matches
  useEffect(() => {
    const result = PASSWD_REGEX.test(password);
    console.log(password);
    console.log(result);
    setValidPassword(result);
    const match = password === matchPwd;
    setValidMatch(match);
  }, [password, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [email, userName, password, matchPwd]);

  return (
    <section className="tab-content">
      <div className="tab-pane fade show active ">
        <div className="text-center mb-3  p-4">
          <div className="block-inline d.flex flex-column">
            <p
              ref={errRef}
              className={errMsg ? "visible" : "invisible"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1 className="pb-3">Register</h1>

            <form>
              <div className="d.flex flex-column justify-content-start">
                <div>
                  <label htmlFor="emailAddress">
                    Email:
                    <span className={validEmail ? "visible" : "invisible"}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  </label>
                  <input
                    type="text"
                    name="emailAddress"
                    id="emailAddress"
                    autoComplete="off"
                    ref={emailRef}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={validEmail ? "false" : "true"}
                    onFocus={() => setemailFocus(true)}
                    onBlur={() => setemailFocus(false)}
                  />
                  <p
                    id="emailnote"
                    className={emailFocus && email && !validEmail
                      ? "visible"
                      : "invisible"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    Enter valid Email address<br />
                  </p>
                </div>
                <div>
                  <label htmlFor="userName">
                    userName:
                  </label>
                  <span className={validUserName ? "visible" : "invisible"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <input
                    type="text"
                    name="userName"
                    id="userName"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    onBlur={() => setUserFocus(false)}
                    onFocus={() => setUserFocus(true)}
                    aria-invalid={validUserName ? "false" : "true"}
                    required
                  />

                  <p
                    id="userNote"
                    className={userFocus && userName && !validUserName
                      ? "visible"
                      : "invisible"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 23 character <br />
                    Must begin with a Letter<br />
                  </p>
                </div>
                <div>
                  <label htmlFor="passwordInput">Password:</label>
                  <span className={validPassword ? "visible" : "invisible"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <input
                    type="password"
                    name="password"
                    id="passwordInput"
                    onClick={(e) => setPassword(e.target.value)}
                    onBlur={() => setPasswordFocus(false)}
                    onFocus={() => setPasswordFocus(true)}
                    required
                    aria-invalid={validPassword ? "false" : "true"}
                  />
                  <p
                    id="pwdNote"
                    className={passwordFocus && password && !validPassword
                      ? "visible"
                      : "invisible"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    password must be 8 to 23 character <br />
                    and include capital - small letters <br />
                  </p>
                </div>
                <div>
                  <label htmlFor="matchPwd">Retype-Password:</label>
                  <span className={validMatch ? "visible" : "invisible"}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                  <input
                    type="password"
                    name="matchPwd"
                    id="matchPwd"
                    onClick={(e) => setMatchPwd(e.target.value)}
                    onBlur={() => setMatchFocus(false)}
                    onFocus={() => setMatchFocus(true)}
                    required
                  />
                  <p
                    id="pwdNote"
                    className={matchFocus && matchPwd && !validMatch
                      ? "visible"
                      : "invisible"}
                  >
                    <FontAwesomeIcon icon={faInfoCircle} />
                    password must match with above <br />
                  </p>
                </div>
                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="registerCheck"
                    value={termbox}
                    aria-describedby="registerCheckHelpText"
                  />
                  <label className="form-check-label" htmlFor="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
