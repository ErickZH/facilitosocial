// primer componente
import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';


export class Login extends React.Component
{
	render()
	{
		return (<MuiThemeProvider>
			<Formsy.Form>

				<div>
					<FormsyText
						name="email"
						required
						validations="isEmail"
						validationError="Asegúrate de introducir un correo electrónico válido"
						floatingLabelText="Correo electrónico"/>
				</div>

				<div>
					<FormsyText
						name="password"
						required
						type="password"
						floatingLabelText="Contraseña"/>
				</div>
				<div>
					<RaisedButton
						type="submit"
						label="Iniciar sesión"/>
				</div>
			</Formsy.Form>
		</MuiThemeProvider>);
	}
}
