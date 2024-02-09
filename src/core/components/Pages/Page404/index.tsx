import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Page404 = () => {
    const navigate = useNavigate();

    useLayoutEffect(() => {
      const timer = setTimeout(() => {
        navigate('/', {
          replace: true,
        });
      }, 2000);
  
      return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div>
            Sayfa Bunulunamadı
        </div>
    )
}

export default Page404