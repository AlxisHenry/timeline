import React, { Component } from "react";

type TimelineCardProps = {
	image: string;
	alt: string;
	title: string;
	body: string;
};

class TimelineCard extends React.Component<TimelineCardProps> {
	render() {
		return (
			<div className="timeline-card">
				<div className="timeline-card-header">
					<img src={this.props.image} alt={this.props.alt} />
					<h3>{this.props.title}</h3>
				</div>
				<div className="timeline-card-body">
					<p>{this.props.body}</p>
				</div>
			</div>
		);
	}
}

export default TimelineCard;