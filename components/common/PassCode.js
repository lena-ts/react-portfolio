import React, {useState} from "react"
import {motion} from "framer-motion";

const PassCode = ({updateData, projectItem}) => {
    const [value, setValue] = useState(1);

    const setPasscode = (e) => {
        setValue(e.target.value)
        updateData(e.target.value)
    }
    // const submitPassCode = () => {
    //     updateData(value)
    //     // setValue(e.target.value)
    //     // updateData(e.target.value)
    //     console.log("clickValue", value)
    // }


    return(
        <div style={{
            backgroundColor: "#E8EBF2",
            height: "100vh",
            display: "flex",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                backgroundColor: "white",
                borderRadius: "25px",
                padding: "25px",
                width: "auto"
            }}>
                <h1 style={{paddingBottom: "6px", textAlign: "center"}}>
                    {/*<img src={`../${projectItem.icon_path}`} style={{width: 36, display: "inline-block"}}/>*/}
                    {projectItem.title}</h1>
                <div style={{fontSize: "14px"}}>Enter password to access the project</div>
                <input
                    style={{
                        backgroundColor: "#E8EBF2",
                        borderRadius: 12,
                        border: "0px",
                        height: "44px",
                        paddingLeft: 12,
                        width: "100%",
                        marginTop: 20,
                        outlineColor: "#333"
                    }}
                    placeholder={"Password"}
                    onChange={setPasscode}
                />
            {/*    <div*/}
            {/*        style={{*/}
            {/*            width: "100%",*/}
            {/*            backgroundColor: "#333",*/}
            {/*            borderRadius: 12,*/}
            {/*            lineHeight: "48px",*/}
            {/*            textAlign: "center",*/}
            {/*            marginTop: "15px",*/}
            {/*            cursor: "pointer",*/}
            {/*            color: "#fff"*/}
            {/*        }}*/}
            {/*        onClick={submitPassCode}>Submit</div>*/}

            </div>
        </div>
    )
}

export default PassCode