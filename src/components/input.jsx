/* eslint-disable react/prop-types */
function Input({ value, onChange, onSubmitButton }) {
    return <>
        <input type="text" value={value} onChange={onChange} />
        <button onClick={onSubmitButton}>
            Ajouter un Todo
        </button>
    </>
}

export default Input;