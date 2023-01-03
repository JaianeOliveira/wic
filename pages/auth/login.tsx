import { GithubLogo } from 'phosphor-react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import AuthLayout from '../../components/Layout/Auth';
import Logo from '../../components/Logo';

const Login = () => {
	return (
		<AuthLayout>
			<div className="px-4 py-8 bg-neutral-800 rounded-lg shadow-md min-w-[480px] min-h-[504px] flex flex-col gap-2 items-center">
				<Logo />
				<h2 className="text-sm my-2 font-medium uppercase">
					Entre com a sua conta
				</h2>
				<form className="flex flex-col gap-4 w-full">
					<Input
						inputWidth="full"
						type="email"
						label="E-mail"
						name="email"
						placeholder="example@email.com"
					/>
					<Input
						inputWidth="full"
						type="password"
						label="Senha"
						name="password"
						placeholder="******"
					/>

					<Button size="full">Entrar</Button>
				</form>
				<span className="text-sm font-light">ou</span>
				<Button size="full" variant="outlined">
					<GithubLogo /> Entrar com o github
				</Button>
			</div>
		</AuthLayout>
	);
};

export default Login;
