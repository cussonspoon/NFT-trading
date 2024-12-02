import { createContext, useState } from 'react'; 

export const UserContext = createContext(); 

export const UserProvider = ({ children }) => {
    const [ user, setUser ] = useState({ 
        username: '', 
        wallet_address: '', 
        user_id: 0});
    return (
       <UserContext.Provider value={{ user, setUser }}>
        { children }
       </UserContext.Provider>
    ); 
}

export default UserContext;