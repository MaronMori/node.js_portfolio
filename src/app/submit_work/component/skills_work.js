import {IconButton, TextField} from "@mui/material";
import {Delete} from "@mui/icons-material";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const Skills_work = ({skillTextFields, setSkillTextFields }) => {
    const addSkillTextField = () => {
        setSkillTextFields([...skillTextFields, ""]);
    };

    const removeSkillTextField = (index) => {
        const newSkillTextFields = skillTextFields.filter((_, i) => i !== index);
        setSkillTextFields(newSkillTextFields);
    };

    const handleSkillTextFieldChange = (index, event ) => {
        const newSkillTextFields = [...skillTextFields];
        newSkillTextFields[index]= event.target.value;
        setSkillTextFields(newSkillTextFields);
    };

    return (
        <div>
            {skillTextFields.map((skill, index) => (
                <div className={"flex"} key={index}>
                    <TextField  value={skill}
                                onChange={(e) => handleSkillTextFieldChange(index, e)}
                                label={"Skill"} fullWidth={true} margin={"dense"}/>
                    <IconButton onClick={() => removeSkillTextField(index)}>
                        <Delete />
                    </IconButton>
                </div>
            ))}
            <div className={"flex justify-center"}>
                <IconButton onClick={addSkillTextField} size={"large"}>
                    <AddBoxIcon fontSize={"large"}/>
                </IconButton>
            </div>
        </div>
    )
}