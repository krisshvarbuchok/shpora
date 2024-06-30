import { Link } from 'react-router-dom';

const HomePicture=()=>{
   
    return(
        <>
            <Link to="/routerComponent">
                <button>Перейти обратно к Router</button>
            </Link>
            <div>
                <img src="https://vikentia.github.io/react-helper/static/media/main-menu.2b8fea9d5945941ec638.jpeg" height='500px' />
            </div>
        </>
    )
}
export default HomePicture;