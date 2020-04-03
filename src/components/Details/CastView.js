import React from "react";
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import "../Style/Details.css"
// import {faSync} from "@fortawesome/free-solid-svg-icons";

class CastView extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			person: null
		};
	}

	photoApi = "https://image.tmdb.org/t/p/w500/";

	async componentDidMount() {
		("started");
		const api_key = "fef700429c99e494247e8de834e89564";
		const request = await fetch("https://api.themoviedb.org/3/person/" + this.props.cast_id + "?api_key=" + api_key);
		let parsedCrew = await request.json();
		this.setState({...this.state, person: parsedCrew});
	}

	months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	render() {
		// https://api.themoviedb.org/3/person/8891?api_key=api_key
		// https://www.themoviedb.org/movie/imdb_id 
		// https://www.imdb.com/title/imdb_id,
		if (this.state.person === null) {
            return (<div>Hello</div>)
			// return (<FontAwesomeIcon icon={faSync} className="is-text-centered fa-10x fa-spin"/>)
		} else {
			const {name, imdb_id, biography, profile_path, birthday, place_of_birth} = this.state.person;
			const birthdayObject = new Date(birthday);
			const birthdayString = `${this.months[birthdayObject.getMonth()]} ${birthdayObject.getDay()}, ${birthdayObject.getFullYear()}`;
			return (
				<div className="CastView">
					<div className="card column">
						<div className="card-image">
							<figure className="image">
								<img src={this.photoApi + profile_path} alt={name}
									 style={{margin: "auto", height: "50vh", width: "auto"}}/>
							</figure>
						</div>
						<div className="card-content">
							<div className="media">
								<div className="media-left">
								</div>
								<div className="media-content">
									<h4 className="title is-4">{name}</h4>
									<p className="subtitle">{`Born: ${birthdayString}, ${place_of_birth}`}</p>
									<a href={`https://www.imdb.com/name/${imdb_id}`} className="is-link is-6">IMDB
										Profile</a>
								</div>
							</div>
							<div className="media-content">
								{biography}
							</div>
							<a onClick={() => this.props.castButton()} className="button is-1 is-danger is-pulled-right"
							   style={{margin: "0"}}>Close</a>
						</div>

					</div>
				</div>);
		}
	}

}
export default CastView;