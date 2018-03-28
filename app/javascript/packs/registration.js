// primer componente
import React from 'react';
import ReactDOM from 'react-dom';

class Registration extends React.Component
{
	render()
	{
		return <div>Nuevo componente</div>;
	}
}

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(<Registration/>, document.getElementById('react-container'));
});
