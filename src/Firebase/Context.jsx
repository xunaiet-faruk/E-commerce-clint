import { createContext } from "react";

export const Authcontext =createContext(null)

const Context = () => {
    return (
        <Authcontext.Provider>
            
        </Authcontext.Provider>
    );
};

export default Context;