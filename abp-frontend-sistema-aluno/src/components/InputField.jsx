export default function InputField({label, type='text', value, onChange, placeholder, maxLength, minLength}) {

    return(
        <div>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
            />
        </div>
    )
}