import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import "./Home.css";
import Quiz from "./Quiz";

const Home = () => {

  const [name, setName] = useState("");

  const history = useHistory();

  const handleSubmit = () => {
    if(!name){
      
    }else{
    history.push("/quiz")
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 30 }}>Quiz App</span>
        <div className="settings__select">
          <TextField
            style={{ marginBottom: 25,
            width: 320 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
     </div>
  );
};

export default Home;
