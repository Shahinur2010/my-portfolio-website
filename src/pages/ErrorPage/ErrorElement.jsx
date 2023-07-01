import { useNavigate, useRouteError } from "react-router-dom";
import img from '../../assets/m-404-errorpage.gif'
import useTitle from "../../hooks/useTitle";

const ErrorElement = () => {

  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  useTitle('ErrorPage')

  const handleGoBack = () => {
    navigate('/');
  }
  return (
    <div className='flex flex-col text-center justify-center items-center text-3xl font-semibold m-8'>
      <img className="w-2/5 animate-pulse" src={img} />
      <p>Sorry, an unexpected error has occurred.</p>
      <button onClick={handleGoBack} className='my-6 px-2 py-1 font-normal text-sm rounded-md bg-blue-200'>Back to home</button>
    </div>

  );
};

export default ErrorElement;