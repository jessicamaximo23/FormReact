import React, { useState } from "react";
import validator from "validator";
import Navigation from "./Navigation";
import './Form.css';

const Form = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        name: '',
        age: '',
    });

    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validationForm(formData);

        if (Object.keys(newErrors).length === 0) {
            /* forma de submeter o formulario */
            console.log('Form Submitted', formData);
        } else {
            setErrors(newErrors);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({...errors,[name]:''});
    }

    const validationForm = (data) => {
        const erros = {};
        if (!validator.isEmail(data.email)) {
            erros.email = 'Invalid Email Address';
        }
        if (validator.isEmpty(data.password)) {
            erros.password = 'Password is required';
        } 
        else if (!validator.isLength(data.password, { min: 8 })) {
            erros.password = 'Password must be at least 8 characters long';
        }
        if (validator.isEmpty(data.name)) {
            erros.name = 'Name is required';
        }
        if (!validator.isInt(data.age)) {
            erros.age = 'Age must be a number';
        }
        return erros;
    } 

    //Aqui nesse caso eu to colucando um componente dentro de outro
    //E uma forma mais pratica de Usar
    return (
        <div id='form'>
            <Navigation />
            <div className="formCont">
                <h2>Registration Form:</h2>
                <form onSubmit={handleSubmit}>
                    <div className="formgroup">
                        <label>Email:</label>
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>

                    <div className="formgroup">
                        <label>Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <span className="error">{errors.password}</span>}
                    </div>

                    <div className="formgroup">
                        <label>Name:</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                    </div>

                    <div className="formgroup">
                        <label>Age:</label>
                        <input
                            type="number"
                            name="age"
                            value={formData.age}
                            onChange={handleChange}
                        />
                        {errors.age && <span className="error">{errors.age}</span>}
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
