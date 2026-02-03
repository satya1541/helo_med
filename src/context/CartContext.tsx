import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export interface CartItem {
    id: number;
    name: string;
    price: number;
    originalPrice?: number;
    weight?: string;
    image: string;
    quantity: number;
    discount?: number;
}

export interface Address {
    id: string;
    type: 'Home' | 'Work' | 'Other';
    text: string;
}

export interface Order {
    id: string;
    date: string;
    items: CartItem[];
    total: number;
    status: 'Active' | 'Delivered' | 'Cancelled' | 'Returned';
}

export interface Transaction {
    id: number;
    type: 'credit' | 'debit';
    amount: number;
    description: string;
    date: string;
}

export interface Notification {
    id: number;
    title: string;
    message: string;
    type: 'order' | 'payment' | 'offer' | 'info';
    date: string;
    read: boolean;
}

interface CartContextType {
    cartItems: CartItem[];
    orders: Order[];
    walletBalance: number;
    transactions: Transaction[];
    notifications: Notification[];
    wishlist: number[];
    addresses: Address[];
    addToCart: (item: Omit<CartItem, 'quantity'>) => void;
    removeFromCart: (id: number) => void;
    updateQuantity: (id: number, quantity: number) => void;
    clearCart: () => void;
    placeOrder: () => void;
    addMoney: (amount: number) => void;
    addNotification: (title: string, message: string, type: Notification['type']) => void;
    markNotificationsAsRead: () => void;
    clearNotifications: () => void;
    toggleWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    upsertAddress: (address: Address) => void;
    removeAddress: (id: string) => void;
    cartTotal: number;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const savedCart = localStorage.getItem('helo_med_cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [orders, setOrders] = useState<Order[]>(() => {
        const savedOrders = localStorage.getItem('helo_med_orders');
        return savedOrders ? JSON.parse(savedOrders) : [];
    });

    const [walletBalance, setWalletBalance] = useState<number>(() => {
        const savedBalance = localStorage.getItem('helo_med_wallet_balance');
        return savedBalance ? JSON.parse(savedBalance) : 1250;
    });

    const [transactions, setTransactions] = useState<Transaction[]>(() => {
        const savedTransactions = localStorage.getItem('helo_med_transactions');
        return savedTransactions ? JSON.parse(savedTransactions) : [
            { id: 1027, type: 'credit', amount: 750, description: 'Added money', date: 'Feb 3, 2026' },
            { id: 1026, type: 'debit', amount: 500, description: 'Order #ORD-1026', date: 'Feb 2, 2026' },
            { id: 1025, type: 'credit', amount: 250, description: 'Refund: Order #1024', date: 'Feb 1, 2026' }
        ];
    });

    const [notifications, setNotifications] = useState<Notification[]>(() => {
        const savedNotifications = localStorage.getItem('helo_med_notifications');
        return savedNotifications ? JSON.parse(savedNotifications) : [
            { id: 1, title: 'Welcome to Helo Med!', message: 'Happy shopping!', type: 'info', date: 'Just now', read: false }
        ];
    });

    const [wishlist, setWishlist] = useState<number[]>(() => {
        const savedWishlist = localStorage.getItem('helo_med_wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    const [addresses, setAddresses] = useState<Address[]>(() => {
        const savedAddresses = localStorage.getItem('helo_med_addresses');
        return savedAddresses ? JSON.parse(savedAddresses) : [
            { id: '1', type: 'Home', text: '123, Green Park, Civil Lines, Bangalore, Karnataka - 560001' }
        ];
    });

    useEffect(() => {
        localStorage.setItem('helo_med_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        localStorage.setItem('helo_med_orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('helo_med_wallet_balance', JSON.stringify(walletBalance));
    }, [walletBalance]);

    useEffect(() => {
        localStorage.setItem('helo_med_transactions', JSON.stringify(transactions));
    }, [transactions]);

    useEffect(() => {
        localStorage.setItem('helo_med_notifications', JSON.stringify(notifications));
    }, [notifications]);

    useEffect(() => {
        localStorage.setItem('helo_med_wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        localStorage.setItem('helo_med_addresses', JSON.stringify(addresses));
    }, [addresses]);

    const addToCart = (product: Omit<CartItem, 'quantity'>) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id: number) => {
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number, quantity: number) => {
        if (quantity < 1) return;
        setCartItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const addNotification = (title: string, message: string, type: Notification['type']) => {
        const newNotification: Notification = {
            id: Date.now(),
            title,
            message,
            type,
            date: 'Just now',
            read: false
        };
        setNotifications(prev => [newNotification, ...prev]);
    };

    const markNotificationsAsRead = () => {
        setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    const toggleWishlist = (productId: number) => {
        setWishlist(prev =>
            prev.includes(productId)
                ? prev.filter(id => id !== productId)
                : [...prev, productId]
        );
    };

    const isInWishlist = (productId: number) => wishlist.includes(productId);

    const upsertAddress = (address: Address) => {
        setAddresses(prev => {
            const existing = prev.find(a => a.id === address.id);
            if (existing) {
                return prev.map(a => a.id === address.id ? address : a);
            }
            return [...prev, address];
        });
    };

    const removeAddress = (id: string) => {
        setAddresses(prev => prev.filter(a => a.id !== id));
    };

    const addMoney = (amount: number) => {
        setWalletBalance(prev => prev + amount);
        const newTransaction: Transaction = {
            id: Date.now(),
            type: 'credit',
            amount,
            description: 'Added to Wallet',
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })
        };
        setTransactions(prev => [newTransaction, ...prev]);
        addNotification('Money Added', `₹${amount} added to your wallet successfully.`, 'payment');
    };

    const placeOrder = () => {
        const newOrder: Order = {
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' }),
            items: [...cartItems],
            total: cartTotal,
            status: 'Active'
        };
        setOrders(prev => [newOrder, ...prev]);
        addNotification('Order Placed', `Your order #${newOrder.id} has been placed successfully.`, 'order');
        clearCart();
    };

    const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

    return (
        <CartContext.Provider value={{
            cartItems,
            orders,
            walletBalance,
            transactions,
            notifications,
            wishlist,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            placeOrder,
            addMoney,
            addNotification,
            markNotificationsAsRead,
            clearNotifications,
            toggleWishlist,
            isInWishlist,
            addresses,
            upsertAddress,
            removeAddress,
            cartTotal,
            cartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
