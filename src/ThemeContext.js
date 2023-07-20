import { createContext, useState } from 'react';

const ThemeContext = createContext()

const ThemeProvider = function({children}) {
    // children are subscribers
    const [theme, setTheme] = useState("light");

    const toggleTheme = function() {
        // agar curr light hai toh dark krdo, agar dark hai toh light krdo
        setTheme((prevTheme) => {
            return prevTheme === 'light' ? 'dark' : 'light'
        })
    }; // toggleTheme ends

    // return will publish to it's subscribers
    return (
        <ThemeProvider.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeProvider.Provider>
    )

    // will consumed as  `const {theme, toggleTheme} = useContext(ThemeContext);`
};

export { ThemeProvider, ThemeContext };
