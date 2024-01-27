import axios from 'axios';
import { toast as notify } from 'react-toastify';
// Import your notification library
import {
  GENERATE_PASSWORD_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  PROFILE_UPDATE,
  PROFILE_UPDATE_IMAGE,
  REGISTER_USER_SUCCESS,
} from './auth_Type';

const baseurl = "http://localhost:8080/user";

export const registerUser = (form, toast) => async (dispatch) => {
  try {
    const res = await axios.post(`${baseurl}/signup`, form);

    dispatch({ type: REGISTER_USER_SUCCESS });
    notify(toast, 'User Registered successfully', 'success');
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Signup failed', 'error');
  }
};

export const userLogin = (form, toast) => async (dispatch) => {
  
  try {
    const res = await axios.post(`${baseurl}/login`, form);
    
    if (res.data.message === 'User logedin successfully') {
      notify(toast, 'User logged in successfully', 'success');
      dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data.data });
   //   localStorage.setItem("token", JSON.stringify(res.data.token))
    } else {
      console.error('Error', res);
      notify(toast, 'Login failed', 'error', 'Please check your email and password');
      dispatch({ type: LOGIN_USER_FAIL });
    }
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Login failed', 'error', 'Please check your email and password');
    dispatch({ type: LOGIN_USER_FAIL });
  }
};

export const changePassword = (form, toast) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseurl}/change-password/${form.userId}`, form);
   
    if (res.data.message === 'Password changed successfully') {
      dispatch({ type: LOGIN_USER_FAIL });
      notify(
        toast,
        'Password Update',
        'success',
        'Password Updated successfully. Please Login again'
      );
    } else {
      console.error('Error', res);
      notify(toast, 'Process failed', 'error', 'Enter Correct Password');
    }
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Process failed', 'error', 'Enter Correct Password');
  }
};

export const GenerateNewPassword = (form, toast) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseurl}/forget-password`, form);

    if (res.data.message === 'Password changed successfully') {
      dispatch({ type: GENERATE_PASSWORD_SUCCESS });
      notify(
        toast,
        'Password Update',
        'success',
        'Password Updated successfully. Please Login again'
      );
    } else {
      console.error('Error', res);
    }
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Process failed', 'error');
  }
};

export const changeProfile = (form, toast) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseurl}/change-profile/${form.userId}`, form);

    if (res.data.message === 'Profile changed successfully') {
      dispatch({ type: PROFILE_UPDATE, payload: res.data.data });
      notify(toast, 'Name updated', 'success', 'Profile Name updated successfully');
    } else {
      console.error('Error', res);
      notify(toast, 'Process failed', 'error');
    }
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Process failed', 'error');
  }
};

export const changeProfileImage = (form, toast) => async (dispatch) => {
  try {
    const res = await axios.put(`${baseurl}/update-profile-image`, form);

    if (res.data.message === 'Profile image updated successfully') {
      dispatch({ type: PROFILE_UPDATE_IMAGE, payload: res.data.data });
      notify(toast, 'Profile updated', 'success', 'Profile image updated successfully');
    } else {
      console.error('Error', res);
      notify(toast, 'Process failed', 'error');
    }
  } catch (error) {
    console.error('Error', error);
    notify(toast, 'Process failed', 'error');
  }
};

export const userLogout = () => (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};
