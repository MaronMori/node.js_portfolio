import {Input} from "@mui/material";

export const Picture_work = ({picture, setPicture, picturePreview, setPicturePreview}) => {
    const handlePictureChange = (e) => {
        if (e.target.files && e.target.files[0]){
            setPicture(e.target.files[0])

            const reader = new FileReader();

            reader.onload = (e) => {
                setPicturePreview(e.target.result);
                console.log(picturePreview)
            };
            reader.readAsDataURL(e.target.files[0]);
        }else {
            console.log("Failed uploading image")
        }
    }

    return (
        <div>
            <Input required={true} fullWidth={true} inputProps={{accept: "image/jpeg, image/png, image/gif"}}
                   type={"file"} margin={"dense"} onChange={(e) => handlePictureChange(e)}/>
            {picture && <div className={"flex justify-center my-4"}>
                <img src={picturePreview} alt={"workPicture"} className={"w-56"}/>
            </div>}
        </div>
    )
}