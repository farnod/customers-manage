function FormInput({ name, label, type, value, onChange }) {
	return (
		<div className="form-input">
			<label htmlFor={name}>{label}</label>
			<input
				name={name}
				id={name}
				type={type}
				value={value}
				onchange={onChange}
			/>
		</div>
	);
}

export default FormInput;
