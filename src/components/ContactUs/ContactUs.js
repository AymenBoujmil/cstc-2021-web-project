import React, { useState } from 'react';

import './ContactUs.css';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


export const ContactUs = () => {
  
  const { register, errors, handleSubmit, reset } = useForm();
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };


  const onSubmit = async (data) => {
	console.log(data);
    console.log('Email: ', data.email);
	console.log('Message: ', data.message);

	  try {
      const templateParams = {
        email: data.email,
        message: data.message
      };

      await emailjs.send(
       	"service_8zvmigg",
        "template_h9lhwq6",
        templateParams,
        "user_HYwquAFDNWv3tt1tP6xPZ"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };


        return (
        <div>    
        <div class="container">
              <div class="section-intro text-center pb-80px">
                <h3 class="primary-text"> ContactUS </h3> 
              </div>
            </div>
            	<div class="bg-contact100" >
		            <div class="container-contact100">
			            <div class="wrap-contact100">
				            <div class="contact100-pic js-tilt" data-tilt>
				        	    <img src="image/ContactUs/ContactMail.png" alt="IMG"></img>
		        	    	</div>
                           

				           <form class="contact100-form validate-form"  id='contact-form' onSubmit={handleSubmit(onSubmit)}>
                                <span class="contact100-form-title">
									<h2>	<i class="fas fa-envelope-open-text"></i> Email Us</h2>
								</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name='email' placeholder="Email" ref={register} /> 
						    <span class="focus-input100"></span>
					       
                           
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Message is required">
						<textarea class="input100" name='message' placeholder="Message"  ref={register} />
						<span class="focus-input100">
						
						</span>
                       
					</div>


					<div class="container-contact100-form-btn">
         
						<button class="contact100-form-btn" type='submit'>
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>

        </div>
        
        
        );
    }

