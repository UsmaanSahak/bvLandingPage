import React from "react";
import ReactDOM from "react-dom";




class FantasticEntry extends React.Component {
	render() {
	var outBorder = {
		display:"inline-block",
		border:"1px solid black"
	};
	var midBorder = {
		display:"inline-block",
		border: "5px solid rgb(100,100,100)"
	};
	var innerBorder = {
		display:"inline-block",
		border: "1px solid rgb(200,200,200)"
	};
	return (
	<div style={outBorder}>
		<div style={midBorder}>
			<div style={innerBorder}>
				{this.props.contents}
			</div>
		</div>
	</div>
	);
	}
}
class WelcomeText extends React.Component {
	render() {
		return (
		<div id="WelcomeText">
		<p>Hello, this is my page.</p>
		<p>+1 (888) 111-9999</p>
		<p>myName@domain.com</p>
		</div>
		);
	}
}

class TechStack extends React.Component {
	render() {
		return (
		<div id="TechStack">
		<p> My tech stack is as follows: </p>
		<br/><br/>
		<img id="StackImg" className="expandable" width="300px" src="src/explain.png"/>
		</div>
		);
	}
}
class HardStack extends React.Component {
	render() {
		return (
		<div id="HardStack">
		<p> This is a schematic template I have created. </p>
		<br/><br/>
		<img id="HardImg" className="expandable" width="300px" src="src/bvhardware.png"/>
		</div>
		);
	}
}
class Bullets extends React.Component {
	points() {
		//Make 1 div float left for topic.
		//Make another div float left for points
		var result = [];
		var points = this.props.points;
		for (var i=0; i < this.props.points.length; i++) {
			result.push(points[i]);
		}
		return result;
	}
	render() {
		var topic = {
			float: "left",
			width: "80px",
			marginRight: "50px"
		};
		var point = {
			float: "left",
			width: "500px"
		};
		var bullet = {
			display:"inline-block",
			marginBottom: "50px"	
		};
		return (
			<div style={bullet}>
			<div style={topic}>
			{this.props.topic}
			</div>
			<div style={point}>
			{this.points()}
			</div>
			</div>
		);
	}
}
class Body extends React.Component {
	render() {
		return (
		<div>
		<div id="brief">
		<h2>What are your needs?</h2>
		<h4>Common Web Formats:</h4>
		
		<Bullets topic="List Format" points={["Good for websites that can comfortably fit all of their content on one page.","Easy to use or add to.","Works predictably on both desktop and mobile."]}/>
		<Bullets topic="Index Format" points={["Good for abstract websites whose main purpose is to point to more specific pages or services."]}/>
		<Bullets topic="Aggregate Format" points={["Good for websites tha have a lot of content, and wants to display a portion of it while providding an index to point to the remianing content.","Between list and index."]}/>
		<Bullets topic="Search Format" points={["Good for websites that either have a massive amount of content or want to direct their user based off of input."]}/>
		<Bullets topic="Blog Format" points={["Common generic format to post articles and updates from a single source."]}/>
		<Bullets topic="Forums format" points={["Common generic format to post articles and media from a community."]}/>
		</div>
		</div>


		);
	}
}
class Pages extends React.Component {
	render() {
	return (
	<div id="page">
		<div className="fit">
		<FantasticEntry contents={<img id="pic" width="300px" src="src/placeholder.png"/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<img id="logo" width="372px" src="src/phlogo.jpg"/>}/>
		</div>
		<div className="fit">
		<FantasticEntry contents={<WelcomeText/>}/>
		</div>
		<div className="fit" id="topGap">
		</div>
		<div className="full">
		<Body/>
		</div>

	</div>);
	}
}
class Dragbird extends React.Component {
	render() {
		return (
		<div>
			<p></p>
		</div>
		);
	}
}
ReactDOM.render (<Pages/>, document.getElementById("Intro"));
ReactDOM.render (<Dragbird/>,document.getElementById("Dragbird"));
