import { PropsWithChildren, useState } from "react";

export interface DropdownProps {
    label: string;
}

const Dropdown = (props: PropsWithChildren<DropdownProps>) => {
    const [open, setOpen] = useState(false);
    const handleOpen = (e: React.FormEvent<HTMLSpanElement>) => {
        e.preventDefault();
        setOpen(!open);
    };

    return (
        <div className="dropdown">
            <span onInput={(e) => handleOpen(e)}>{props.label}</span>
            {open && props.children}
        </div>
    );
};

export default Dropdown;
