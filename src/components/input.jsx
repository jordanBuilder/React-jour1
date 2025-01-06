/* eslint-disable react/prop-types */
function Input({value, onChange, onClick}) {
    return <>
        <input type="text" name="" id="" value={value} onChange={(e)=>{onChange(e.target.value)}} />
        <button onClick={onClick}>
            Ajouter une Todo
        </button>
    </>
}

export default Input;