import { useState } from "react";
import "./photo-release-document.scss";

const PhotoReleaseDocument = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="photo-release-document">
            <button
                className="photo-release-open-button"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(true);
                }}
            >
                View Photo Release Document
            </button>
            {open && (
                <>
                    <div
                        className="overlay-background"
                        onClick={() => setOpen(false)}
                    ></div>
                    <div className="overlay" onBlur={() => setOpen(false)}>
                        <button onClick={() => setOpen(false)}>X</button>
                        <h2>Photo Release Document</h2>
                        <p>
                            <strong>Summary: </strong>This document is a legal
                            outline that protects both you and me. It states
                            that:
                        </p>
                        <ul>
                            <li>
                                You are free to use your pictures in any way you
                                see fit, as long as you are not commercializing
                                them. This allows you to edit, share, and print
                                your images for personal use.
                            </li>
                            <li>
                                I am free to use these pictures in any public
                                manner, either personal or professional. This
                                includes commercial usage or advertising.
                            </li>
                        </ul>
                        <p>
                            All this means is that you understand that pictures
                            taken during this session could show up in any form
                            of public media (unless otherwise stated/agreed
                            upon). Any alterations to this will be done in
                            writing so that both you and I have a clear
                            understanding of what is expected.
                        </p>
                        <hr />
                        <h3>The Legal Stuff</h3>
                        <p>
                            <strong>Copywright: </strong>The Clients recognize
                            that the Photographer is producing works made for
                            hire and that the copyright of all photographs is
                            retained by the Photographer. Permission is granted
                            to the Clients to reproduce and make use of the
                            photographs under the following conditions. The use
                            of any images by the Client is permitted provided
                            the use is restricted to the Clients' personal use
                            and the personal use by the Clients' friends and
                            family. Prior written permission from the
                            Photographer is required for any sale, publication
                            or commercial use of the photographs.
                        </p>
                        <p>
                            <strong>Model Release: </strong>The Clients grant
                            the Photographer and its legal representatives,
                            heirs and assigns, the irrevocable and unlimited
                            consent to use, publish and distribute the
                            photographs of the Clients for advertising,
                            editorial, commercial and any other purpose and in
                            any manner, and to alter the photographs without
                            restriction. The Clients hereby release the
                            Photographer and its legal representatives, heirs
                            and assigns from all liability and claims in
                            connection with the photographs.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
};

export default PhotoReleaseDocument;
