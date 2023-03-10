import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Mail from './Mail';
import EmailList from './EmailList';
import SendMail from './SendMail';
import Login from './Login';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
function App() {
	const user = useSelector(selectUser);
	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
	const dispatch = useDispatch();
	useEffect(() => {
		auth.onAuthStateChanged(user=>{
			if(user){
				// the user is logged in
				dispatch(
					login({
						displayName: user.displayName,
						email: user.email,
						photoUrl: user.photoURL
					})
				)
			}
		})
	}, []);
	return (
		<Router>
			{!user ? (
				<Login />
			) : (
				<div className="App">
					<Header />
					<div className="app_body">
						<Sidebar />
						<Switch>
							<Route path="/mail">
								<Mail />
							</Route>
							<Route path="/">
								<EmailList />
							</Route>
						</Switch>
					</div>
					{sendMessageIsOpen && <SendMail />}

					{/* <h2>lets build gmail-clone</h2> */}
				</div>
			)}
		</Router>
	);
}

export default App;