// import React, { createContext, useContext } from 'react';

//  export interface TokenContextProps {
//   token: string;
//   setToken: React.Dispatch<React.SetStateAction<string>>;
// }

// const TokenContext = createContext<TokenContextProps | undefined>(undefined);

// export const useToken = () => {
//   const context = useContext(TokenContext);
//   if (!context) {
//     throw new Error('useToken must be used within a TokenProvider');
//   }
//   return context;
// };

// export default TokenContext;

import { createContext } from "react";

export const authToken=createContext({token:''});