import {TextField} from "@mui/material";

export const Title_work = ({title, setTitle}) => {
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    return <TextField required={true} label={"Title"} margin={"dense"} value={title}
                      onChange={(e) => handleTitleChange(e)}/>

}