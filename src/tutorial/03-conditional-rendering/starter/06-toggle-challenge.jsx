import { useState } from "react";

const ToggleChallenge = () => {
    const [isAlert, setIsAlert] = useState(false);

    const handlesClick = () => {
        if (isAlert) {
            setIsAlert(false);
            return;
        }
        setIsAlert(true);
    };

    return (
        <div className="container">
            <h1>toggle challenge</h1>
            <hr></hr>
            <button type="button" className="btn" onClick={handlesClick}>
                {isAlert ? "CLOSE ALERT" : "OPEN ALERT"}
            </button>
            {isAlert && <Alert />}
        </div>
    );
};

export default ToggleChallenge;

export const Alert = () => {
    return <div className="alert alert-danger">Alert</div>;
};
