import React, { useState } from 'react';
import '../index.css';

const SignUp = () => {
    const [textInp, setTextinp] = useState({
        fName: "",
        lName: "",
        eMail: "",
        passWord: "",
        confirmPassWord: "",
    });

    const inputIvent = (cvent) => {
        const { name, value } = cvent.target;
        setTextinp((prl) => {
            return {
                ...prl,
                [name]: value
            }
        })
    };

    // check box start
    const [iChecked, setiChecked] = useState(false);
    const checkEvent = (ev) => {
        const checked = ev.target.checked;
        setiChecked(checked);
    };
    // check box end
    // Radio start
    const [readGender, setreadGender] = useState("");
    const genderEvent = (van) => {
        setreadGender(van.target.value)
    };
    // Radio end

    const [allEntry, setEntry] = useState([]);
    const formSubmit = (formEvent) => {
        formEvent.preventDefault();
        if (textInp && iChecked && readGender) {
            const getEntry = { id: new Date().getTime().toString(), ...textInp, iChecked, readGender }
            setEntry([...allEntry, getEntry]);
        } else alert("Form event is not filled")
        setTextinp({
            fName: "",
            lName: "",
            eMail: "",
            passWord: "",
            confirmPassWord: "",
        })

    };


    return (
        <>
            <div id="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner_text">
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>

                                <div>
                                    {/* {
                                        allEntry.map((cur) => {

                                            return (
                                                <>
                                                    <ul key={cur.id}>
                                                        <li>{cur.fName}</li>
                                                        <li>{cur.lName}</li>
                                                        <li>{cur.eMail}</li>
                                                        <li>{cur.passWord}</li>
                                                        <li>{cur.confirmPassWord}</li>
                                                        <li>{cur.iChecked ? "Yes We agree" : "No its not possible"}</li>
                                                        <li>{cur.readGender}</li>
                                                    </ul>
                                                </>
                                            );
                                        })
                                    } */}
                                    {/* <p>{iChecked ? "yes i agree" : "no i dont"}</p>
                                    <p>{readGender}</p> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner_pic reg_padding">
                                <img className="img-fluid w-100" src="images/signinbg.png" alt="Banner" />
                                <div className="sign_form">
                                    <h3>Sign up</h3>
                                    <form onSubmit={formSubmit}>
                                        <div className="mb-4 d-flex justify-content-between usersName">
                                            <input type="text" onChange={inputIvent} name="fName" value={textInp.fName} className="form-control" id="exampleInputEmail1" aria-label="default input example" />
                                            <input type="text" onChange={inputIvent} name="lName" value={textInp.lName} className="form-control" id="exampleInputEmail1" aria-label="default input example" />
                                        </div>
                                        <div className="mb-4">
                                            <input type="email" onChange={inputIvent} name="eMail" value={textInp.eMail} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" onChange={inputIvent} name="passWord" value={textInp.passWord} className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-4">
                                            <input type="password" onChange={inputIvent} name="confirmPassWord" value={textInp.confirmPassWord} className="form-control" id="exampleInputPassword1" />
                                        </div>
                                        <div className="mb-4 d-flex w-75 justify-content-between">
                                            <div className="male">
                                                <label For="form_gender">Male</label>
                                                <input onChange={genderEvent} value="Male" checked={readGender === "Male"} type="radio" id="form_gender" name="gend" />
                                            </div>
                                            <div className="female">
                                                <label For="form_gender1">Female</label>
                                                <input onChange={genderEvent} value="Female" checked={readGender === "Female"} type="radio" id="form_gender1" name="gend" />
                                            </div>
                                        </div>

                                        <div className="mb-4 form-check">
                                            <input type="checkbox" checked={iChecked} onChange={checkEvent} className="form-check-input" id="exampleCheck1" />
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                        </div>
                                        <button type="submit" className="btn btn-primary mb-5">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default SignUp;

