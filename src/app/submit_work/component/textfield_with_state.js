import {TextField} from "@mui/material";

export const TextField_with_state = ({state, setState, label, type}) => {
    const handleSetState = (e) => {
        setState(e.target.value);
    }

    return <TextField type={type} label={label} margin={"dense"} value={state}
                      onChange={(e) => handleSetState(e)}/>

}