import { useRouteError } from "react-router-dom";

type Props = {};

function ErrorPage({}: Props) {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1 className="text-3xl font-extrabold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
