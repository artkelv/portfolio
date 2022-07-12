import { useState } from "react";

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const onChangeDataUser = (e) => {
        const {name, value} = e.target
        setForm({...form, [name]:value});
    };

    const cleanFields = () => {
        setForm(initialState)
    }
    return {form, onChangeDataUser, cleanFields}
}
export default useForm