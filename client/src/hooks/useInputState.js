import { useState } from "react";
export default initialVal => {
    const [value, setValue] = useState(initialVal);
    const onInputChange = e => {
        setValue(e.target.value);
    };
    const reset = () => {
        setValue("");
    };
    return [value, onInputChange, reset];
};
