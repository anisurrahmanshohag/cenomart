import React, { useState } from 'react';
import '../index.css';

const Signin = () => {
    const [writer, setwriter] = useState({
        eMail: "",
        passwords: "",
    });
    const inpEvent = (ivent) => {

        const { name, value } = ivent.target;
        setwriter({ ...writer, [name]: value })
    };
    const [chk, setchk] = useState("");
    const chkEvent = (ev) => {
        setchk(ev.target.checked)
    };
    const [allEntry, setallEntry] = useState([]);


    const submitLogin = (event) => {
        event.preventDefault();
        if (writer && chk) {
            const newEntry = { id: new Date().getHours().toString(), ...writer, chk }
            setallEntry([...allEntry, newEntry])
            setwriter({
                eMail: "",
                passwords: "",
            })
        } else alert("fill all etm")
    };
    return (
        <>
            <div id="banner_part">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="banner_text">
                                <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                {/* {
                                    allEntry.map((cu) => {
                                        return <ul>
                                            <li>{cu.eMail}</li>
                                            <li>{cu.passwords}</li>
                                            <li>{cu.chk ? "true" : "false"}</li>
                                        </ul>
                                    })
                                } */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="banner_pic reg_padding">
                                <img className="img-fluid w-100" src="images/signinbg.png" alt="Banner" />
                                <div className="sign_form">
                                    <h3>Sign in</h3>
                                    <form onSubmit={submitLogin}>
                                        <div className="mb-4">
                                            <label For="exampleInputEmail1" className="form-label">User Name or Email address</label>
                                            <input type="email" name="eMail" value={writer.eMail} onChange={inpEvent} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="mb-4">
                                            <label For="exampleInputEmail1" className="form-label">User Name or Email address</label>
                                            <input type="password" name="passwords" value={writer.passwords} onChange={inpEvent} className="form-control" id="exampleInputPassword1" />
                                        </div>

                                        <div className="mb-4 form-check">
                                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                            <input type="checkbox" checked={chk} onChange={chkEvent} className="form-check-input" id="exampleCheck1" />
                                        </div>
                                        <div className="mb-4">
                                            <button type="submit" className="btn btn-primary mb-5">Sign in</button>
                                        </div>
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
export default Signin;

