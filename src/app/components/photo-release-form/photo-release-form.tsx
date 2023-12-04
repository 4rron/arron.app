import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
    selectPhotoReleaseForm,
    setPhotoReleaseComments,
    // setPhotoReleaseDate,
    setPhotoReleaseEmail,
    setPhotoReleaseGuardian,
    setPhotoReleaseIsMinor,
    setPhotoReleaseName,
} from "../../reducers/photo-release-form-slice";
import "./photo-release-form.scss";
import PhotoReleaseDocument from "../photo-release-document/photo-release-document";

interface apiSubmission {
    name: string;
    isMinor: boolean;
    guardian?: string;
    email: string;
    comments?: string;
}

const PhotoReleaseForm = () => {
    const formState = useAppSelector(selectPhotoReleaseForm);
    const dispatch = useAppDispatch();

    const sendForm = async (props: apiSubmission) => {
        let guardian = "N/A";
        if (props.guardian) guardian = props.guardian;
        let comments = "N/A";
        if (props.comments) comments = props.comments;
        await fetch(
            "https://jm3bzcwrj1.execute-api.us-east-1.amazonaws.com/prod/email",
            {
                method: "POST",
                body: JSON.stringify({
                    name: props.name,
                    date: Date(),
                    isMinor: props.isMinor,
                    guardian: guardian,
                    email: props.email,
                    comments: comments,
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                },
            }
        )
            .then((response) => response.json())
            .catch((err) => {
                console.log(err.message);
            });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendForm(formState as apiSubmission);
    };

    const isSaveDisabled = useMemo(() => {
        if (!formState.name || !formState.email) {
            return true;
        } else if (formState.isMinor === true && !formState.guardian) {
            return true;
        } else {
            return false;
        }
    }, [formState]);

    return (
        <div id="photo-release-form-container">
            <form id="photo-release-form" onSubmit={(e) => handleSubmit(e)}>
                <h1>Photo Release Form</h1>
                <div className="form-label-and-input">
                    <label htmlFor="name">Name *</label>
                    <input
                        name="name"
                        className="modal-input"
                        placeholder="Enter Your Name"
                        type="text"
                        required={true}
                        onChange={(e) => {
                            dispatch(setPhotoReleaseName(e.target.value));
                        }}
                    />
                </div>
                {/* <div className="form-label-and-input">
                    <label htmlFor="date">Date</label>
                    <input
                        name="date"
                        className="modal-input"
                        placeholder="MM/DD/YYYY"
                        type="date"
                        required={true}
                        onChange={(e) => {
                            dispatch(setPhotoReleaseDate(e.target.value));
                        }}
                    />
                </div> */}
                <div className="form-label-and-input">
                    <label htmlFor="isMinor">Check if you under 18</label>
                    <input
                        name="isMinor"
                        className="modal-input"
                        type="checkbox"
                        onChange={(e) => {
                            dispatch(setPhotoReleaseIsMinor(e.target.checked));
                        }}
                    />
                </div>
                {formState.isMinor && (
                    <div className="form-label-and-input">
                        <label htmlFor="guardian">Parent/Guardian Name</label>
                        <input
                            name="guardian"
                            className="modal-input"
                            placeholder="Enter Parent/Guardian Name"
                            type="text"
                            onChange={(e) => {
                                dispatch(
                                    setPhotoReleaseGuardian(e.target.value)
                                );
                            }}
                        />
                    </div>
                )}
                <div className="form-label-and-input">
                    <label htmlFor="email">
                        {formState.isMinor
                            ? "Parent/Guardian Email *"
                            : "Your Email *"}
                    </label>
                    <input
                        name="email"
                        className="modal-input"
                        placeholder={
                            formState.isMinor
                                ? "Enter Parent/Guardian Email"
                                : "Enter Your Email"
                        }
                        type="email"
                        onChange={(e) => {
                            dispatch(setPhotoReleaseEmail(e.target.value));
                        }}
                    />
                </div>
                <div className="form-label-and-input">
                    <label htmlFor="comment">Comment (optional)</label>
                    <textarea
                        name="comment"
                        className="modal-input"
                        placeholder="Enter Any Comments Here..."
                        onChange={(e) =>
                            dispatch(setPhotoReleaseComments(e.target.value))
                        }
                    />
                </div>
                <div className="modal-input-submit-wrapper">
                    <button
                        id="photo-release-form-submit"
                        className="modal-input-submit"
                        type="submit"
                        disabled={isSaveDisabled}
                    >
                        Submit
                    </button>
                </div>
                <PhotoReleaseDocument />
            </form>
        </div>
    );
};

export default PhotoReleaseForm;
