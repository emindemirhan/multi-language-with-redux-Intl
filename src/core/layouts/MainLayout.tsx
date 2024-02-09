import Header from '../components/Header';
import Conatiner from '../components/Container';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    return (
        <>
            <Header />
            <main>
                <Conatiner>
                    <Outlet />
                </Conatiner>
            </main>
        </>
    )
}

export default MainLayout