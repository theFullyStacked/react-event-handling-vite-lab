// Code PasswordInput Component Here

function PasswordInput() {
    function handleChange(event) {
        console.log("Entering password...");
    }

    return (
        <input
            type="password"
            onChange={handleChange}
            placeholder="Input password"
        />
    )
}

export default PasswordInput;