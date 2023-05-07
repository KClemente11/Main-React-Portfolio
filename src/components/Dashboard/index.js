import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }, []);


}

export default Dashboard;
