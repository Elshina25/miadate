/**
 * компонент отображает кнопку "Войти"
 * принимает в качестве аргумента функцию обработки клика
 */

type TSignInButton = {
    handlerClick: () => void;
}

const SignInButton: React.FC<TSignInButton> = ({ handlerClick }) => {
    return (
        <button onClick={handlerClick} className="button sign-in-button">Войти</button>
    )
}

export default SignInButton;