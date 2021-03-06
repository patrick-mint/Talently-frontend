/* eslint-disable no-empty */
import React , {useEffect, useState} from "react";
import { Progress } from "antd";
import "./motivateBar.css";
import axios from "axios";
const MotivateBar = () => {
	const url = "http://54.179.56.185:3000";
	const id = localStorage.getItem("ID");
	// const [, setLoad] = useState(true);
	const [percent, setPercent] = useState([]);

	const progressBarTagLeft = ["Helping", "Supporting", "knowledge","Order","Service", "Belonging"];
	const progressBarTagRight = ["Self Reliance", "Influence", "Practicality","Freedom","Financial Security", "Uniqueness"];

	const UserScore = async ()=> {
		// setLoad(false);
		const getScore = await axios.get(`${url}/api/user/score/${id}`);
		const totalScore = getScore.data[0].score.score;
		const scoreM = totalScore.scoreM;
		// const [tempValue, ] = useState([]);
		const temp = [];
		
		for (let index = 0; index < 6; index++) {
			let mFirst = scoreM[`M${2*index + 1}`];
			let mSecond = scoreM[`M${2*index + 2}`];
			let score = mFirst - mSecond;
			let percentDisplay = ((mFirst + mSecond)/40)*100;
			// console.log(score);
			if (score > 0 ){

				temp.push(["L", percentDisplay]);
	
			}else if (score < 0) {

				temp.push(["R", percentDisplay]);
					
			}else {

				temp.push(["E", percentDisplay]);
					
			}
			console.log(index);
		}
		setPercent(temp);
		// return temp;
	};
		
	console.log(percent);
	useEffect(() => {
		UserScore();

		console.log(percent.length);	
	}, []);

	

	return (
		<div className="motivate-type">
			
			<div className="left-side-bar-motivate">
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagLeft[index]}</h5>
						{val[0] == "L" ? (
							<Progress percent={val[1]} showInfo={false} strokeWidth="10px" trailColor="#F3F8FF" className="progress-display-blue-left"/>
						) : (
							<Progress percent={100} showInfo={false} strokeWidth="10px" trailColor="#F3F8FF" className="progress-display-gray-left"/>
						)}
						
					</>
				))}
				
				
			</div>
			<div className="right-side-bar-motivate">
				{percent && percent.map ((val, index) => (
					<>
						<h5>{progressBarTagRight[index]}</h5>
						{val[0] == "R" ? (
							<Progress percent={val[1]} showInfo={false} strokeWidth="10px" trailColor="#F3F8FF" className="progress-display-blue-right"/>
						) : (
							<Progress percent={100} showInfo={false} strokeWidth="10px" trailColor="#F3F8FF" className="progress-display-gray-right"/>
						)}
						
					</>
				))}
			</div>
			
		</div>
	);
};
export default MotivateBar;