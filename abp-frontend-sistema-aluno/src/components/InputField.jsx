export default function InputField({label, type='text', value, onChange, placeholder}) {

    return(
        <div>
            <label>{label}</label>
            <input 
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    )
}