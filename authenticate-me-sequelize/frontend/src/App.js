import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
// import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ListsPage from "./components/Lists";
import CreateListForm from "./components/CreateListForm";
import CreateTaskForm from "./components/CreateTaskForm";
import Home from "./components/Home";
import TasksPage from "./components/Tasks";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {/* <Route path="/login" >
            <LoginFormPage />
          </Route> */}
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/lists">
            <ListsPage />
          </Route>
          <Route path='/lists/:id'>
            <TasksPage />
          </Route>
          <Route path='/create-list'>
            <CreateListForm />
          </Route>
          <Route path='/create-task'>
            <CreateTaskForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
