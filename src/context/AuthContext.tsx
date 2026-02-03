import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    login: (username: string) => void;
    logout: () => void;
    user: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
        return localStorage.getItem('helo_med_auth') === 'true';
    });

    const [user, setUser] = useState<string | null>(() => {
        return localStorage.getItem('helo_med_user');
    });

    const login = (username: string) => {
        setIsAuthenticated(true);
        setUser(username);
        localStorage.setItem('helo_med_auth', 'true');
        localStorage.setItem('helo_med_user', username);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('helo_med_auth');
        localStorage.removeItem('helo_med_user');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
