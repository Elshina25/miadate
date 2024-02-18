/**
 * компонент отображает кнопку "Регистрация"
 * принимает в качестве аргумента функцию обработки клика
 */

type TRegisterButton = {
    handlerClick: () => void;
}

const SignInButton: React.FC<TRegisterButton> = ({ handlerClick }) => {
    return (
        <button onClick={handlerClick} className="button register-button">Регистрация</button>
    )
}

export default SignInButton;