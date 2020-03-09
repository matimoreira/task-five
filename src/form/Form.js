import React from 'react';

class Form extends React.Component {
	state = {id: '', name: '', active: '1'};

	handlerEnviar = (e) => {
		e.preventDefault();
		if (this.state.name === '' && this.state.id ===0) return;
		this.props.onFormSubmit( this.state);
		this.setState({id: 0, name: '', active: '1'});
	};

	caca = (e) => {
		this.setState({active: this.state.active === '0' ? '1' : '0'});
		console.log(this.state.active);
	}

	render(){
		return(
			<form onSubmit={this.handlerEnviar} className='bg-light p-4 rounded border border-light shadow'>
				<label className="control-label">Id</label>
				<input className="form-control p-2" type='number' value={this.state.id} onChange={(e) => this.setState({id:e.target.value}) }/>
				<label className="control-label">Nombre</label>
				<input className="form-control p-2" type='text' value={this.state.name} onChange={(e) => this.setState({name:e.target.value}) }/>
				<div className="pt-2" onClick={this.caca}>
					<label className="control-label">Estado</label>
					<br/>
				    <input  type="checkbox" defaultChecked data-onstyle="success" data-offstyle="danger" data-on="Activo" data-off="Inactivo" data-toggle="toggle" id="input--toogle"></input>
				  	
				</div>
				<div className="d-flex justify-content-end">
					<button className="btn btn-primary ">Agregar</button>
				</div>
			</form>
		);
	}
}
{/*this.state.active === '1' ? 'checked' : ''*/}
export default Form;