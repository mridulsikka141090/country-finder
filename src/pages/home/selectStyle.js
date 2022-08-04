export const customStyles = (theme) => {
    return {
        control: (base, state) => ({
            ...base,
            height: '50px',
            width: "300px",
            color: theme === 'Dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)',
            backgroundColor: theme === 'Dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
            border: state.isFocused ? "1px solid transparent" : "1px solid transparent",
            boxShadow: theme === 'Dark' ? "0.5px 0.5px 1px 1px rgb(30, 30, 30)" : "0.5px 0.5px 0.5px 0.5px #cccccc87",
            "&:hover": {
                border: "1px solid transparent",
                boxShadow: "0px 0px 6px transparent"
            }
        }),
        menu: (base) => ({
            ...base,
            backgroundColor: theme === 'Dark' ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 98%)",
        }),
        option: (base, state) => ({
            ...base,
            border: `1px solid transparent`,
            height: '100%',
        }),
        placeholder: (base) => ({
            ...base,
            color: theme === 'Dark' ? 'hsl(0, 0%, 100%)' : 'hsl(200, 15%, 8%)'
        }),
        singleValue: (base, state) => ({
            ...base,
            color: theme === 'Dark' ? 'white': 'black'
        })
    }
}