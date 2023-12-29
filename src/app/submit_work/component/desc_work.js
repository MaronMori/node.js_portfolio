import {TextField} from "@mui/material";

export const Desc_work = ({description, setDesc}) => {
    const handleDescChange = (e) => {
        setDesc(e.target.value);
    }

    return <TextField required={true} label={"Description"} multiline rows={5} margin={"dense"}
                      value={description} onChange={(e) => handleDescChange(e)}/>

}